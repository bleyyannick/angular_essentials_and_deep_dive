import { Component, input, output, Output } from '@angular/core';
import { task } from './task.model';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  template: `
    <article>
      <h2>{{ task().title}}</h2>
       <time datetime="">{{ task().dueDate}}</time>
       <p> {{ task().summary}} </p>
       <p class="actions">
           <button (click)="onCompleteTask()">Complete</button>
       </p>
    </article>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent {
   task = input.required<task>();
   userId = input.required<string>();
   complete = output<string>();


   onCompleteTask() {
     this.complete.emit(this.task().id);
   }
}
