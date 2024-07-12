import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  newTaskForm = new FormGroup({
    taskTitle: new FormControl(''),
    taskSummary: new FormControl(''),
    taskDate: new FormControl('')
  });

  closeNewTask(): void {
    this.toDisableNewTask.emit(false);
  }

  submitFormTask(): void {
    console.log(this.newTaskForm.value.taskTitle);
    console.log(this.newTaskForm.value.taskSummary);
    console.log(this.newTaskForm.value.taskDate);
  } 
  
  
}
