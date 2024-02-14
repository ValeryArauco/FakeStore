import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent {

  productos$: any;
  private searchTerms = new Subject<string>();

  constructor(private productosService: ProductosService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // this.productos$ = this.searchTerms.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((term: string) => this.productosService.buscarProductos(term)),
    // );
  }
}
