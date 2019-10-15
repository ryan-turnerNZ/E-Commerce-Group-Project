import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {CartComponent} from './pages/cart/cart.component';
import {LoginComponent} from './pages/login/login.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {PaymentComponent} from './pages/payment/payment.component';
import {ProductComponent} from './pages/product/product.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'product/id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
