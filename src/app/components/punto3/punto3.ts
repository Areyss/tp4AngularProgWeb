import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3Component {
  cartas: any[] = [];
  intentos = 10;
  seleccionadas: number[] = [];
  juegoIniciado = false;

  iniciarJuego() {
    const parejas = [1,2,3,4,5,6];
    this.cartas = [...parejas, ...parejas]
      .sort(() => Math.random() - 0.5)
      .map(valor => ({ valor, descubierta: false, bloqueada: false }));
    this.intentos = 10;
    this.juegoIniciado = true;
    this.seleccionadas = [];
  }

  reiniciarJuego() {
    this.cartas = [];
    this.intentos = 10;
    this.juegoIniciado = false;
    this.seleccionadas = [];
  }

  intentar() {
    if (this.seleccionadas.length === 2) {
      const [i, j] = this.seleccionadas;
      if (this.cartas[i].valor === this.cartas[j].valor) {
        this.cartas[i].bloqueada = true;
        this.cartas[j].bloqueada = true;
      } else {
        this.cartas[i].descubierta = false;
        this.cartas[j].descubierta = false;
        this.intentos--;
      }
      this.seleccionadas = [];
    }
  }

  voltearCarta(index: number) {
    const carta = this.cartas[index];
    if (!carta.descubierta && !carta.bloqueada && this.seleccionadas.length < 2) {
      carta.descubierta = true;
      this.seleccionadas.push(index);
    }
  }

  get estadoJuego(): string {
    if (this.cartas.every(c => c.bloqueada)) return '¡Ganaste!';
    if (this.intentos <= 0) return 'Perdiste 😢';
    return '';
  }
}
