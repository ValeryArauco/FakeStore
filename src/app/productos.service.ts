import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'https://fakestoreapi.com/products';//'https://api.escuelajs.co/api/v1/products';
  constructor(private http: HttpClient) { }

  obtenerProductos(){
    return this.http.get(this.apiUrl);
  }

  obtenerProducto(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  // buscarProductos(term: string){
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return [];
  //   }
  //   return this.obtenerProductos().pipe(
  //     map((productos: any[]) =>
  //       productos.filter(producto => producto.title.toLowerCase().includes(term.toLowerCase()))
  //     )
  //   );
  // }
}
