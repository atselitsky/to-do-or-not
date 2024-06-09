import { TestBed } from '@angular/core/testing';
import { TasksPage } from './page.component';

describe('TasksPage ->', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPage],
    }).compileComponents();
  });

  it('render task list', () => {
    const pageSelector = '[data-testid="tasks-page"]';
    const taskListSelector = '[data-testid="task-list"]';

    const fixture = TestBed.createComponent(TasksPage);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector(pageSelector)).not.toBeNull();
    expect(page.querySelector(taskListSelector)).not.toBeNull();
  });
});
