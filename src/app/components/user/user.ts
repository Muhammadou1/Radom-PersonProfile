import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class UserComponent {
  @Input() user: any;
}
