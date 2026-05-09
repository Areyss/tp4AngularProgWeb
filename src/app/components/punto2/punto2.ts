import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto';


@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2Component {

  productos: Array<Producto>;

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.getProductos();
  }
}
