import { Component } from '@angular/core';

interface Testimonial {
  avatar: string;
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  readonly testimonials: Testimonial[] = [
    {
      avatar: 'images/image-emily.jpg',
      quote:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      role: 'Marketing Director',
    },
    {
      avatar: 'images/image-thomas.jpg',
      quote:
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      name: 'Thomas S.',
      role: 'Chief Operating Officer',
    },
    {
      avatar: 'images/image-jennie.jpg',
      quote:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      name: 'Jennie F.',
      role: 'Business Owner',
    },
  ];
}
