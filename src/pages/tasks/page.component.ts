import { Component } from '@angular/core';
import { TaskList } from '../../entities/task/ui/task-list';
import { TaskStore } from '../../entities/task/model';

@Component({
  standalone: true,
  selector: 'tasks-page',
  imports: [TaskList],
  providers: [TaskStore],
  template:
    '<section [id]="id"><task-list [taskList]="taskStore.taskList"/></section>',
})
export class TasksPage {
  id = 'tasks-page';
  constructor(public taskStore: TaskStore) {
    const testTask = this.taskStore.createTask({
      title: 'test-todo',
      body: '',
    });
    this.taskStore.addTask(testTask);
  }
}
