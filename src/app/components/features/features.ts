import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class FeaturesComponent {
  protected readonly philosophyCards = [
    { title: 'Crafting Pristine Designs', description: 'Architectural excellence in every line.', icon: 'architecture' },
    { title: 'Building for the Future', description: 'Sustainable and timeless construction.', icon: 'eco' }
  ];
}
