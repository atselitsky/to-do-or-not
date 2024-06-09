import { Component, Input } from '@angular/core';
import { Task } from '../../model/Task';

@Component({
  standalone: true,
  selector: 'task-card',
  templateUrl: './TaskCard.component.html',
})
export class TaskCard {
  @Input({ required: true }) task!: Task;
}
