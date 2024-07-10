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
          @for( dummyUser of DUMMY_USERS; track dummyUser.id) {
            <li>
              <app-user 
                 [dummyUser]="dummyUser" 
                 (select)="onSelectUser($event)" />
            </li>
          }
        </ul>
        <app-tasks [name]="selectedUser_name" />
       </main>
  `,
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
    DUMMY_USERS: dummyUser[] = DUMMY_USERS;
    selectedUser_name!: string; 

    onSelectUser(id: string): void{
       const userIndex = this.DUMMY_USERS.findIndex((user => user.id === id));
       this.selectedUser_name = this.DUMMY_USERS[userIndex]!.name
    }

}