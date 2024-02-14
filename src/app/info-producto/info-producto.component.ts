import { Component, Input } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.component.html',
  styleUrls: ['./info-producto.component.css']
})
export class InfoProductoComponent {

  @Input() producto: any;

  constructor(private productosService: ProductosService, private route: ActivatedRoute){

  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productosService.obtenerProducto(id)
      .subscribe(producto => this.producto = producto);

  }

}
