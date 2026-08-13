import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Features } from './sections/features/features';
import { Services } from './sections/services/services';
import { Testimonials } from './sections/testimonials/testimonials';
import { Gallery } from './sections/gallery/gallery';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Hero, Features, Services, Testimonials, Gallery, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
