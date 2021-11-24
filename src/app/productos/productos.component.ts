import { Component, Input, OnInit } from '@angular/core';

import { Producto } from '../interfaces/producto.interface';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  @Input() productos: Producto[];

  constructor(private productoService: ProductosService) {
    this.productos = [];
  }

  async ngOnInit() {
    try {
      const response = await this.productoService.getAll();
      this.productos = response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
