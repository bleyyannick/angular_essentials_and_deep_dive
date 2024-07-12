import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  template:`
    <div class="backdrop" (click)="closeNewTask()"></div>
    <dialog open>
      <h2>Add Task</h2>
      <form [formGroup]="newTaskForm" (submit)="submitFormTask()">
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
          <button type="button" (click)="closeNewTask()">Cancel</button>
          <button type="submit">Create</button>
        </p>
      </form>
    </dialog>`,
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  toDisableNewTask = output<boolean>();
  addNewTask = output<task>();

  newTaskForm = new FormGroup({
    taskTitle: new FormControl(''),
    taskSummary: new FormControl(''),
    taskDate: new FormControl('')
  });

  closeNewTask(): void {
    this.toDisableNewTask.emit(false);
  }

  submitFormTask(): void {
    this.addNewTask.emit({
      id: Math.random().toString(36).substr(2, 9),
      userId: '1',
      title: this.newTaskForm.value.taskTitle ?? '',
      summary: this.newTaskForm.value.taskSummary?? '',
      dueDate: this.newTaskForm.value.taskDate ?? ''
    });

  } 
  
  
}
