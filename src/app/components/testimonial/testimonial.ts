import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css'
})
export class TestimonialComponent {
  @Input() data: { text: string, author: string, role: string, image: string } | null = null;
}
