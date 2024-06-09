import { Injectable } from '@angular/core';
import { Task } from './Task';
import { Constructor } from 'type-fest';
import { TaskBase, TaskBaseWithoutId, TaskId } from './types';

@Injectable()
export class TaskStore {
  private taskConstructor: Constructor<Task, [TaskBase]> = Task;

  taskList: Task[] = [];

  createTask(taskData: TaskBaseWithoutId) {
    const uuid = crypto.randomUUID() as TaskId;
    return new this.taskConstructor({ ...taskData, uuid });
  }

  addTask(task: Task) {
    this.taskList.push(task);
  }
}
