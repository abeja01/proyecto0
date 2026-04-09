import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css'
})
export class WhyChooseUsComponent {
  @Input() list: { id: number, text: string }[] = [];
}
