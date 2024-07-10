import { Component, Input, input } from '@angular/core';
import { task, TaskComponent } from "../task/task.component";
import { dummyTasks } from '../dummy_tasks';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  template: `
   <section id="tasks">
      <header>
        <h2>{{name()}}</h2>
        <menu>
        <button>Add task</button>
      </menu>
      </header>
      <ul>
        <li>
          @for( task of selectedUserTasks; track task.id) {
            <app-task [userId]="selectedUser_id" [task]="task"></app-task>
          }
        </li>
      </ul>

   </section>
  `,
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  name = input.required<string>();
  tasks = dummyTasks; 
  @Input() selectedUser_id!: string;

  get selectedUserTasks(): task[] {
    return this.tasks.filter(task => task.userId === this.selectedUser_id);
  }

}
