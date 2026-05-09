import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  produtos: Array<Producto>;
  constructor() {
    this.produtos = Array<Producto>();
    this.produtos.push(new Producto("Notebook ASUS Zenbook S 16 16\"", 'AMD Ryzen AI 7 350 24GB DDR5 SSD 1TB Win11 3K OLED', 'assets/img/asus.jpg', 2800250));
    this.produtos.push(new Producto("Monitor Gamer ASUS 22\"", 'FHD IPS 100Hz', 'assets/img/monitor.jpg', 150750));
    this.produtos.push(new Producto("Teclado Mecanico ASUS ROG Strix M701", 'RGB Wireless 2.4Ghz Bluetooth Switch NX Snow Black ESP', 'assets/img/teclado.jpg', 294800));
    this.produtos.push(new Producto("Mouse SteelSeries Aerox 9", 'Wireless 2.4Ghz Bluetooth Ultra LightWeight', 'assets/img/mouse.jpg', 203550));
    this.produtos.push(new Producto("Auriculares Corsair Virtuoso MAX", 'Wireless 2.4Ghz Bluetooth Premium Dolby Atmos Black USB-C', 'assets/img/auriculares.jpg', 676750));
    this.produtos.push(new Producto("Webcam Logitech Brio 4K UHD", 'HDR 1080p/60FPS 720/90FPS USB-C', 'assets/img/webcam.jpg', 252300));
  }
  getProductos(): Array<Producto> {
    return this.produtos;
  }
}
