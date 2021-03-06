import Huha from './huha';

describe('Huha', () => {
  it('should be instantiated', () => {
    const huha = new Huha();
    expect(huha).toBeDefined();
  });

  it('should be instantiated with the properly options', () => {
    const huha = new Huha({
      trackOnGoogleAnalytics: false,
      trackOnIntercom: false,
      trackOnSegment: false,
    });
    expect(huha.trackOnGoogleAnalytics).toBeFalsy();
    expect(huha.trackOnIntercom).toBeFalsy();
    expect(huha.trackOnSegment).toBeFalsy();
  });

  it('should be instantiated with the default properties, passing an empty object as options', () => {
    const huha = new Huha({});
    expect(huha.trackOnGoogleAnalytics).toBeFalsy();
    expect(huha.trackOnIntercom).toBeFalsy();
    expect(huha.trackOnSegment).toBeTruthy();
  });

  describe('HuhaTask', () => {
    it('should create a task with the parameters defined', () => {
      const huha = new Huha();

      // Check the number of the tasks
      expect(huha.tasks.length).toBe(0);

      const taskProperties = {
        name: 'mockTask-1',
        label: 'mockLabel',
        category: 'mockCategory',
        value: 'mockValue',
      };
      const task = huha.createTask(taskProperties);

      // Checking results
      expect(huha.tasks.length).toBe(1);
      expect(task).toBeDefined();
      expect(task.name).toBe('mockTask-1');
      expect(task.label).toBe('mockLabel');
      expect(task.category).toBe('mockCategory');
      expect(task.value).toBe('mockValue');
      expect(task.parentExecId).toBeNull();
      expect(task.persistent).toBeFalsy();
      expect(task.status).toBe('In progress');
    });

    it('should create a task with the label equal to the task name if it is not defined', () => {
      const huha = new Huha();

      // Check the number of the tasks
      expect(huha.tasks.length).toBe(0);

      const taskProperties = {
        name: 'mockTask-1',
      };
      const task = huha.createTask(taskProperties);

      // Checking results
      expect(huha.tasks.length).toBe(1);
      expect(task).toBeDefined();
      expect(task.label).toBe('mockTask-1');
    });

    it('should add one interaction', () => {
      const huha = new Huha();
      const taskProperties = {
        name: 'mockTask-1',
        category: 'mockCategory',
        value: 'mockValue',
      };
      const task = huha.createTask(taskProperties);

      // Checking results
      expect(task).toBeDefined();
      expect(task.effort).toBe(0);
      expect(task.errors).toBe(0);

      task.addInteraction();

      // Checking results
      expect(task.effort).toBe(1);
      expect(task.errors).toBe(0);
    });

    it('should add one error', () => {
      const huha = new Huha();
      const taskProperties = {
        name: 'mockTask-1',
        category: 'mockCategory',
        value: 'mockValue',
      };
      const task = huha.createTask(taskProperties);

      // Checking results
      expect(task).toBeDefined();
      expect(task.effort).toBe(0);
      expect(task.errors).toBe(0);

      task.addError();

      // Checking results
      expect(task.effort).toBe(0);
      expect(task.errors).toBe(1);
    });

    it('should be completed', () => {
      const huha = new Huha();
      const taskProperties = {
        name: 'mockTask-1',
        category: 'mockCategory',
        value: 'mockValue',
      };
      const task = huha.createTask(taskProperties);

      // Mock track function
      const mockTrack = jest.fn();
      task.track = mockTrack;

      expect(task.status).toBe('In progress');

      // Completing the task
      task.complete();

      // Checking results
      expect(task.status).toBe('Completed');
      expect(mockTrack).toHaveBeenCalled();
    });

    it('should be abandoned', () => {
      const huha = new Huha();
      const taskProperties = {
        name: 'mockTask-1',
        category: 'mockCategory',
        value: 'mockValue',
      };
      const task = huha.createTask(taskProperties);

      // Mock track function
      const mockTrack = jest.fn();
      task.track = mockTrack;

      expect(task.status).toBe('In progress');

      // Abandoning the task
      task.abandon();

      // Checking results
      expect(task.status).toBe('Abandoned');
      expect(mockTrack).toHaveBeenCalled();
    });

    it('should create a new persistent root task if it does not exist', () => {
      const huha = new Huha();
      const taskProperties = {
        name: 'mockTask',
        execId: 'id-1',
        persistent: true,
      };

      const task = huha.createTask(taskProperties);

      // Checking results
      expect(task).toBeDefined();
      expect(task.name).toBe('mockTask');
      expect(task.category).toBe('');
      expect(task.value).toBeUndefined();
      expect(task.parentExecId).toBeNull();
      expect(task.execId).toBe('id-1');
      expect(task.persistent).toBeTruthy();
      expect(task.status).toBe('In progress');
      expect(task.trackOnGoogleAnalytics).toBeFalsy();
      expect(task.trackOnIntercom).toBeFalsy();
      expect(task.trackOnSegment).toBeTruthy();
    });

    it('should create a child task', () => {
      const huha = new Huha();

      // parentTask
      const parentTaskProperties = {
        name: 'parentTask',
        execId: 'id-1',
        persistent: true,
      };
      const parentTask = huha.createTask(parentTaskProperties);

      // childTask
      const childTaskProperties = {
        name: 'childTask',
        parentTask,
        execId: 'id-2',
        persistent: true,
      };
      const childTask = huha.createTask(childTaskProperties);

      // Checking results
      expect(parentTask).toBeDefined();
      expect(parentTask.parentExecId).toBeNull();
      expect(childTask).toBeDefined();
      expect(childTask.parentExecId).toBe('id-1');
    });

    it('should create a child task and add interaction and errors', () => {
      const huha = new Huha();

      // parentTask
      const parentTaskProperties = {
        name: 'parentTask',
        execId: 'id-1',
        persistent: true,
      };
      const parentTask = huha.createTask(parentTaskProperties);

      // childTask
      const childTaskProperties = {
        name: 'childTask',
        parentTask,
        execId: 'id-2',
        persistent: true,
      };
      const childTask = huha.createTask(childTaskProperties);

      // Checking results
      expect(parentTask).toBeDefined();
      expect(childTask).toBeDefined();
      expect(childTask.effort).toBe(0);
      expect(childTask.parentTask.effort).toBe(0);
      expect(childTask.errors).toBe(0);
      expect(childTask.parentTask.errors).toBe(0);

      childTask.addInteraction();
      childTask.addError();

      // Checking results
      expect(childTask.effort).toBe(1);
      expect(childTask.parentTask.effort).toBe(1);
      expect(childTask.errors).toBe(1);
      expect(childTask.parentTask.errors).toBe(1);
    });
  });

  describe('HuhaEvent', () => {
    it('should create an event with the parameters defined', () => {
      const huha = new Huha();

      const eventProperties = {
        name: 'mockEvent',
        object: 'mockObject',
        action: 'mockAction',
        category: 'mockCategory',
        value: 'mockValue',
        task: null,
        eventGroup: 'id-1',
      };

      // Check the number of the events
      expect(huha.events.length).toBe(0);

      const event = huha.createEvent(eventProperties);

      // Checking results
      expect(huha.events.length).toBe(1);
      expect(event).toBeDefined();
      expect(event.name).toBe('mockEvent');
      expect(event.object).toBe('mockObject');
      expect(event.action).toBe('mockAction');
      expect(event.category).toBe('mockCategory');
      expect(event.value).toBe('mockValue');
      expect(event.task).toBeNull();
      expect(event.eventGroup).toBe('id-1');
    });

    it('should create an event with a task associated', () => {
      const huha = new Huha();

      const taskProperties = {
        name: 'mockTask-1',
        category: 'mockCategory',
        value: 'mockValue',
        execId: 'id-1',
      };
      const task = huha.createTask(taskProperties);

      const eventProperties = {
        name: 'mockEvent',
        object: 'mockObject',
        action: 'mockAction',
        category: 'mockCategory',
        value: 'mockValue',
        task,
      };
      const event = huha.createEvent(eventProperties);

      // Checking results
      expect(event).toBeDefined();
      expect(event.name).toBe('mockEvent');
      expect(event.object).toBe('mockObject');
      expect(event.action).toBe('mockAction');
      expect(event.category).toBe('mockCategory');
      expect(event.value).toBe('mockValue');
      expect(event.task).toBeDefined();
      expect(task.execId).toBe('id-1');
      expect(event.eventGroup).toBe('id-1');
    });
  });
});
