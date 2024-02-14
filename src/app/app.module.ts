import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoProductoComponent } from './info-producto/info-producto.component';
import { BusquedaProductoComponent } from './busqueda-producto/busqueda-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    DetalleProductoComponent,
    ContactoComponent,
    InfoProductoComponent,
    BusquedaProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
