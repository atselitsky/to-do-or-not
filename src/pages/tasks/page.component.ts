import { Component, Signal, computed } from '@angular/core';
import { TaskList } from '../../entities/task/ui/task-list';
import { TaskStore } from '../../entities/task/model';
import { Task } from '../../entities/task/model/Task';

@Component({
  standalone: true,
  selector: 'tasks-page',
  imports: [TaskList],
  providers: [TaskStore],
  template:
    '<section [id]="id" [attr.data-testid]="testId"><task-list [taskList]="getTaskList()"/></section>',
})
export class TasksPage {
  id = 'tasks-page';
  testId = 'tasks-page';
  getTaskList: Signal<Task[]>;
  constructor(public taskStore: TaskStore) {
    // TODO: think about fix
    // ? I think this is not optimized, better use get/set or custom event
    this.getTaskList = computed(() => [...this.taskStore.tasks.values()]);
  }
}
