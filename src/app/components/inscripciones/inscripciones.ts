import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Inscripcion } from '../../models/inscripcion';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inscripciones.html'
})
export class Inscripciones {

  inscripcion: Inscripcion = {
    dni: '',
    precio: 0,
    categoriaAlumno: 0,
    fechaInscripcion: '',
    email: '',
    curso: '',
    total: 0
  };

  constructor(public service: InscripcionService) {}

  calcularTotal() {

    let descuento = 0;

    if (this.inscripcion.categoriaAlumno == 1) {
      descuento = 35;
    }
    else if (this.inscripcion.categoriaAlumno == 2) {
      descuento = 50;
    }

    this.inscripcion.total =
      this.inscripcion.precio -
      (this.inscripcion.precio * descuento / 100);
  }

  registrar() {

    this.service.agregar({...this.inscripcion});

    this.inscripcion = {
      dni: '',
      precio: 0,
      categoriaAlumno: 0,
      fechaInscripcion: '',
      email: '',
      curso: '',
      total: 0
    };
  }
}