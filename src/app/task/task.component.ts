import { Component, input, output } from '@angular/core';
import { task } from './task.model';
import { DatePipe, registerLocaleData } from '@angular/common';
import localefr from '@angular/common/locales/fr';
import localeItExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localefr, 'fr-FR', localeItExtra);


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  template: `
    <article>
      <h2>{{ task().title}}</h2>
       <time datetime="">{{ task().dueDate | date }}</time>
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
