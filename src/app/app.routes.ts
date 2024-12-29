import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes = [
  {
    path: '',
    component: HomeComponent, // HomeComponent es la raíz
    children: [
      { path: 'experience', component: ExperienceComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: '**', redirectTo: '' }, // Ruta de fallback
];