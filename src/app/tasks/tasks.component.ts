import { Component, inject, Input, input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { task } from '../task/task.model';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskContainer } from './task-container';
import { tasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, TaskContainer],
  template: `
   <section id="tasks">
      <header>
        <h2>{{name()}}</h2>
        <menu>
        <button (click)="toEnableNewTask()">Add task</button>
      </menu>
      </header>
      
      @if(isNewTaskVisible) {
        <app-new-task [userId]="selectedUser_id" (onClose)="close($event)" />
      }
      <task-container>
          <li>
            @for( task of selectedUserTasks; track task.id) {
              <app-task [task]="task" />
            }
            @if (!this.selectedUserTasks.length) {
                <p>No tasks found</p>
                }
          </li>
      </task-container>

   </section>
  `,
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  isNewTaskVisible = false; 

  name = input.required<string>();
  @Input() selectedUser_id!: string;

  tasksService = inject(tasksService);


  get selectedUserTasks(): task[] {
    return this.tasksService.getuserTasks(this.selectedUser_id);
  }

  toEnableNewTask(): void {
    this.isNewTaskVisible = true;
  }

  close(IsVisisible: boolean): void {
    this.isNewTaskVisible = IsVisisible;
  }
}


