import { Routes } from '@angular/router';
// Importamos tu componente del Punto 1
import { Punto1Component } from './components/punto1/punto1';
import { Punto2Component } from './components/punto2/punto2';

export const routes: Routes = [
    // Cuando la URL sea 'punto1', mostrará tu slider
    { path: 'punto1', component: Punto1Component },
    { path: 'punto2', component: Punto2Component },
    
    // Ruta por defecto (opcional): si la URL está vacía, va al punto 1
    { path: '', redirectTo: 'punto1', pathMatch: 'full' }
];
