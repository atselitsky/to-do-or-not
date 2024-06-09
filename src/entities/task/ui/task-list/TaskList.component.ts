import { Component, Input } from '@angular/core';
import { Task } from '../../model/Task';
import { TaskCard } from '../task-card/TaskCard.component';

@Component({
  standalone: true,
  selector: 'task-list',
  templateUrl: './TaskList.component.html',
  imports: [TaskCard],
})
export class TaskList {
  testId = 'task-list';
  @Input() taskList: Task[] = [];
}
