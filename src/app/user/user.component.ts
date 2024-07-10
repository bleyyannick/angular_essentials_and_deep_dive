import { Component, computed, input, output  } from '@angular/core';
import { dummyUser } from '../types';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  dummyUser = input.required<dummyUser>()
  imagePath = computed(() => `assets/users/${this.dummyUser().avatar}`); 
  select = output<string>();


  onSelectUser () {
    this.select.emit(this.dummyUser().id);
  }

}
