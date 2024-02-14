import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  @Input() titulo:any;
  @Input() precio:any;
  @Input() imagen:any;
  @Input() id:any;
}
