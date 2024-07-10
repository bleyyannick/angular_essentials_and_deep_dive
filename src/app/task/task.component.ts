import { Component, input } from '@angular/core';


export interface task {
  id: string; 
  userId: string;
  summary: string;
  dueDate: string;
  title: string;
}
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
           <button>Complete</button>
       </p>
    </article>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent {
   task = input.required<task>();
   userId = input.required<string>();
}
