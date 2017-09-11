import { DoneTask } from './task-done';

describe('tasksdone/', () => {
  describe('DoneTask', () => {
    it('should set title', () => {
      expect(new DoneTask('test').title).toBe('test');
    });

    it('should set completed to false by default', () => {
      expect(new DoneTask('test').completed).toBe(false);
    });
  });
});
