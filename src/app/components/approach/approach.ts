import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './approach.html',
  styleUrl: './approach.css'
})
export class ApproachComponent {
  @Input() steps: { title: string, description: string, icon: string }[] = [];
  
  protected activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
