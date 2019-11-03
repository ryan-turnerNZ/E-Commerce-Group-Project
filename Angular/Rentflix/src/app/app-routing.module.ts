import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {CartComponent} from './pages/cart/cart.component';
import {LoginComponent} from './pages/login/login.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {PaymentComponent} from './pages/payment/payment.component';
import {ProductComponent} from './pages/product/product.component';
import { AuthGuard } from './guards/auth-guard.service';
import {AccountComponent} from './pages/AccountPages/account/account.component';
import {LibraryComponent} from './pages/AccountPages/library/library.component';
import {OrdersComponent} from './pages/AccountPages/orders/orders.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'catalog/page/:page', component: CatalogComponent},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'product/:id', component: ProductComponent},
  //authGuard protected links
  {path: 'account/cart', component: CartComponent , canActivate: [AuthGuard]},
  {path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]},
  {path: 'account/profile', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'account/library', component: LibraryComponent, canActivate: [AuthGuard]},
  {path: 'account/orders', component: OrdersComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
