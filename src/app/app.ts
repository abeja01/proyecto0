import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { FeaturesComponent } from './components/features/features';
import { ApproachComponent } from './components/approach/approach';
import { GalleryComponent } from './components/gallery/gallery';
import { TestimonialComponent } from './components/testimonial/testimonial';
import { FooterComponent } from './components/footer/footer';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    NavbarComponent, 
    HeroComponent, 
    FeaturesComponent, 
    ApproachComponent, 
    GalleryComponent, 
    TestimonialComponent, 
    FooterComponent,
    WhyChooseUsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public title = signal('Bespoke Home Builders');

  public navItems = [
    { label: 'Home', link: '#' },
    { label: 'Services', link: '#' },
    { label: 'Our approach', link: '#' },
    { label: 'About', link: '#' },
    { label: 'Gallery', link: '#' },
    { label: 'Journal', link: '#' }
  ];

  public approachSteps = [
    { 
      title: 'Consultation', 
      description: 'We starts by understanding your lifestyle needs and mapping your vision to our design expertise.',
      icon: 'chat'
    },
    { 
      title: 'Design', 
      description: 'Our architects develop architectural concepts that blend elegance with functional innovation.',
      icon: 'architecture'
    },
    { 
      title: 'Build', 
      description: 'The master construction phase where we create using the finest materials and artisanal precision.',
      icon: 'construction'
    },
    { 
      title: 'Handover', 
      description: 'Final walkthrough and commissioning of your masterpiece, ready for you to call home.',
      icon: 'key'
    }
  ];

  public signatureHomes = [
    { title: 'Living Room', image: 'luxury_living_room_1774275763704.png', link: '#' },
    { title: 'Kitchen Room', image: 'luxury_kitchen_v2_1774275849102.png', link: '#' },
    { title: 'Master Bedroom', image: 'luxury_bedroom_1774275865435.png', link: '#' },
    { title: 'Bathroom', image: 'luxury_bathroom_1774275883622.png', link: '#' }
  ];

  public testimonialData = {
    text: "Moving with Bespoke Home Builders was an incredible experience. They listened to every detail of our vision and brought it to life with perfection. Our home is more beautiful than we ever could have imagined.",
    author: "Elena M.",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?u=elena"
  };

  public whyChooseUsList = [
    { id: 1, text: "Your Vision, Our Expertise" },
    { id: 2, text: "Unparalleled Craftsmanship" },
    { id: 3, text: "Modern Design" },
    { id: 4, text: "Personalized Service" },
    { id: 5, text: "Exceptional Quality" }
  ];
}
