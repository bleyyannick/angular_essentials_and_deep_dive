import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  template:`
    <div class="backdrop" (click)="closeNewTask()"></div>
    <dialog open>
      <h2>Add Task</h2>
      <form>
        <p>
          <label for="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>

        <p>
          <label for="summary">Summary</label>
          <textarea id="summary" rows="5" name="summary"></textarea>
        </p>

        <p>
          <label for="due-date">Due Date</label>
          <input type="date" id="due-date" name="due-date" />
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

  closeNewTask(): void {
    this.toDisableNewTask.emit(false);
  }

}
