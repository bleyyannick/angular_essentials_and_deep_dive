import { Component, inject, Input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { task } from '../task/task.model';
import { tasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  template:`
    <div class="backdrop" (click)="close()"></div>
    <dialog open>
      <h2>Add Task</h2>
      <form [formGroup]="newTaskForm" (submit)="submitFormTask(userId)">
        <p>
          <label for="title">Title</label>
          <input type="text" id="title" name="title" formControlName="taskTitle" />
        </p>

        <p>
          <label for="summary">Summary</label>
          <textarea id="summary" rows="5" name="summary" formControlName="taskSummary"></textarea>
        </p>

        <p>
          <label for="due-date">Due Date</label>
          <input type="date" id="due-date" name="due-date" formControlName="taskDate" />
        </p>

        <p class="actions">
          <button type="button" (click)="close()">Cancel</button>
          <button type="submit">Create</button>
        </p>
      </form>
    </dialog>`,
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  onClose = output<boolean>();
  addNewTask = output<task>();
  @Input() userId!: string;


  tasksService = inject(tasksService);


  newTaskForm = new FormGroup({
    taskTitle: new FormControl(''),
    taskSummary: new FormControl(''),
    taskDate: new FormControl('')
  });

  close(): void {
    this.onClose.emit(false);
  }

  submitFormTask( userId: string) {
    this.tasksService.addTask({
      id: Math.random().toString(36).substr(2, 9),
      userId: userId,
      title: this.newTaskForm.value.taskTitle ?? '',
      summary: this.newTaskForm.value.taskSummary?? '',
      dueDate: this.newTaskForm.value.taskDate ?? ''
    });
    this.close();
  } 
}
