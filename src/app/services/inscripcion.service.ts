import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private inscripciones: Inscripcion[] = [];

  constructor() { }

  agregar(inscripcion: Inscripcion) {
    this.inscripciones.push(inscripcion);
  }

  obtenerInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  totalGeneral(): number {
    return this.inscripciones.reduce((sum, i) => sum + i.total, 0);
  }

  totalPorCategoria(categoria: number): number {
    return this.inscripciones.filter(i => i.categoriaAlumno == categoria).length;
  }
}