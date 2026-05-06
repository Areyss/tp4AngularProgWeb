import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
}

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2Component {

  productos: Producto[] = [
    { nombre: 'Notebook ASUS Zenbook S 16 16"', descripcion: 'AMD Ryzen AI 7 350 24GB DDR5 SSD 1TB Win11 3K OLED', img: 'assets/img/asus.jpg', precio: 2800250 },
    { nombre: 'Monitor Gamer ASUS 22"', descripcion: 'FHD IPS 100Hz', img: 'assets/img/monitor.jpg', precio: 150750 },
    { nombre: 'Teclado Mecanico ASUS ROG Strix M701', descripcion: 'RGB Wireless 2.4Ghz Bluetooth Switch NX Snow Black ESP', img: 'assets/img/teclado.jpg', precio: 294800 },
    { nombre: 'Mouse SteelSeries Aerox 9', descripcion: 'Wireless 2.4Ghz Bluetooth Ultra LightWeight', img: 'assets/img/mouse.jpg', precio: 203550},
    { nombre: 'Auriculares Corsair Virtuoso MAX', descripcion: 'Wireless 2.4Ghz Bluetooth Premium Dolby Atmos Black USB-C', img: 'assets/img/auriculares.jpg', precio: 676750 },
    { nombre: 'Webcam Logitech Brio 4K UHD', descripcion: 'HDR 1080p/60FPS 720/90FPS USB-C', img: 'assets/img/webcam.jpg', precio: 252300},
  ];
}
