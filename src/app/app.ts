import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user';
import { RandomUserService } from './services/random-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './app.html'
})
export class App implements OnInit {

  user: any = {};

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.randomUserService.getRandomUser().subscribe(response => {
      this.user = response.results[0];
    });
  }
}

