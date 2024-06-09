import { TaskBase, TaskId } from './types';

export class Task implements TaskBase {
  id: TaskId;
  title: string;
  body: string;

  constructor(base: TaskBase) {
    this.id = base.id;
    this.title = base.title;
    this.body = base.body;
  }
}
