import { Component } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { UsersService } from '../../serivces/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  usersRegister!: iUser[];

  constructor(private userSvc: UsersService) {}

  ngOnInit() {
    this.userSvc
      .getAllUser()
      .subscribe((users) => (this.usersRegister = users as iUser[]));
  }
}
