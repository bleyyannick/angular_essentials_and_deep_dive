import { Component } from "@angular/core";


@Component({
    selector: 'task-container',
    standalone: true,
    template: `
    <ul>
        <ng-content></ng-content>
    </ul>
    `,
    styles:`
            ul {
            list-style: none;
            margin: 1rem 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-height: 50vh;
            overflow: auto;
        }
  
    `
})
export class TaskContainer {

}