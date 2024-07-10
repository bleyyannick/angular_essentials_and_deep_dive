import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { dummyUser } from './types';
import { TasksComponent } from "./tasks/tasks.component";


@Component({
    selector: 'app-root',
    standalone: true,
    template: `
       <app-header />
       <main>
        <ul id="users">
          @for( dummyUser of users; track dummyUser.id) {
            <li>
              <app-user 
                 [dummyUser]="dummyUser" 
                 (select)="onSelectUser($event)" />
            </li>
          }
        </ul>
        @if(selectedUser_name && selectedUser_id) {
          <app-tasks [selectedUser_id]="selectedUser_id" [name]="selectedUser_name" />
        } @else {
          <p>Select a user to see their tasks</p>
        }
       </main>
  `,
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
    users: dummyUser[] = DUMMY_USERS; 
    selectedUser_id = 'u1';

    get selectedUser_name(): string {
       const userIndex = this.users.findIndex((user => user.id === this.selectedUser_id));
       return this.users[userIndex].name
    }

    onSelectUser(id: string): void{
      this.selectedUser_id = id;
    }

}