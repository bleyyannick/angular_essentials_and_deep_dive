import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { dummyTasks } from '../dummy_tasks';
import { task } from '../task/task.model';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskContainer } from './task-container';


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
        <app-new-task (addNewTask)="onAddNewTask($event)" (toDisableNewTask)="closeNewTask()" />
      }
      <task-container>
          <li>
            @for( task of selectedUserTasks; track task.id) {
              <app-task (complete)="onCompleteTask($event)" [userId]="selectedUser_id" [task]="task" />
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
  name = input.required<string>();
  tasks :task[] = dummyTasks;
  isNewTaskVisible = false; 
  @Input() selectedUser_id!: string;


  get selectedUserTasks(): task[] {
    return this.tasks.filter(task => task.userId === this.selectedUser_id);
  }

  onCompleteTask(id: string): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onAddNewTask(newTask: task): void {
    newTask.userId = this.selectedUser_id;
    this.tasks = [...this.tasks, newTask];
    this.isNewTaskVisible = false;
  }
  toEnableNewTask(): void {
    this.isNewTaskVisible = true;
  }

  closeNewTask(): void {
    this.isNewTaskVisible = false;
  }
}


