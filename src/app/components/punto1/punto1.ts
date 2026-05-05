import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.html',
  styleUrls: ['./punto1.css']
})
export class Punto1Component implements OnInit {

  // Definición del array de objetos (Fuente de datos)
  eventos: any[] = [
  { nombre: 'Taller de Yoga', descripcion: 'Relaja tu cuerpo y mente con expertos.', img: 'assets/evento01.jpg' },
  { nombre: 'Curso de Angular', descripcion: 'Aprende a programar aplicaciones web modernas.', img: 'assets/evento02.jpg' },
  { nombre: 'Torneo de E-sports', descripcion: 'Compite con los mejores en Gamers Zone.', img: 'assets/evento03.jpg' }
  ];

  // Variable para controlar el índice actual del slide
  indiceActual: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // Método para el botón de adelantar
  siguiente(): void {
    if (this.indiceActual < this.eventos.length - 1) {
      this.indiceActual++;
    } else {
      this.indiceActual = 0; // Vuelve al inicio si llega al final
    }
  }

  // Método para el botón de retrasar
  anterior(): void {
    if (this.indiceActual > 0) {
      this.indiceActual--;
    } else {
      this.indiceActual = this.eventos.length - 1; // Va al último si está en el inicio
    }
  }
}
