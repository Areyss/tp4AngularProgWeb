import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto';


@Component({
  selector: 'app-punto2',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2Component {

  productos: Array<Producto>;
  carrito: Array<Producto> = [];
  mostrarModal: boolean = false;

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.getProductos();
  }

  agregarAlCarrito(producto: Producto) {
    const existe = this.carrito.find(p => p.nombre === producto.nombre);
    if (!existe) {
      this.carrito.push(producto);
    }
  }
  estaEnCarrito(producto: Producto): boolean {
    return this.carrito.includes(producto);
  }
  eliminarDelCarrito(producto: Producto) {
    this.carrito = this.carrito.filter(p => p.nombre !== producto.nombre);
  }

  get total(): number {
    // Calcula el total sumando los precios de los productos en el carrito
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
    //                          ^valor anterior    ^suma actual              ^valor inicial
  }
  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}
