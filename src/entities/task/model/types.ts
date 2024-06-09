import { Tagged } from 'type-fest';

export type TaskId = Tagged<string, 'taskId'>;
export type TaskBase = {
  uuid: TaskId;
  title: string;
  body: string;
};
export type TaskBaseWithoutId = Omit<TaskBase, 'uuid'>;
