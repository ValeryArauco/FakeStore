import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos:any;

  constructor(private productosService: ProductosService) {
  }
  ngOnInit() {
    this.productosService.obtenerProductos().subscribe(
      datos => this.productos = datos

      
    )
  }
}
