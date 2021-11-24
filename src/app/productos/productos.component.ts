import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  @Input() productos: Producto[];

  constructor() {
    this.productos = [];
  }

  ngOnInit(): void {}
}
