import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoProductoComponent } from './info-producto/info-producto.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path: "inicio", component: InicioComponent},
  {path: "productos", component: ProductosComponent},
  {path: "contacto", component: ContactoComponent},
  { path: 'info/:id', component: InfoProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
