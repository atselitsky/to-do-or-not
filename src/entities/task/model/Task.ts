import { TaskBase, TaskId } from './types';

export class Task implements TaskBase {
  uuid: TaskId;
  title: string;
  body: string;

  constructor(base: TaskBase) {
    this.uuid = base.uuid;
    this.title = base.title;
    this.body = base.body;
  }
}
