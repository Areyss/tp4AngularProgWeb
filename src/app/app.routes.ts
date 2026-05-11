import { Routes } from '@angular/router';
// Importamos tu componente del Punto 1
import { Punto1Component } from './components/punto1/punto1';
import { Punto2Component } from './components/punto2/punto2';
import { Punto3Component } from './components/punto3/punto3';
import { Inscripciones } from './components/inscripciones/inscripciones';

export const routes: Routes = [
    // Cuando la URL sea 'punto1', mostrará tu slider
    { path: 'punto1', component: Punto1Component },
    { path: 'punto2', component: Punto2Component },
    { path: 'punto3', component: Punto3Component },
    { path: 'inscripciones', component: Inscripciones },
    // Ruta por defecto (opcional): si la URL está vacía, va al punto 1
    { path: '', redirectTo: 'punto1', pathMatch: 'full' }
];
