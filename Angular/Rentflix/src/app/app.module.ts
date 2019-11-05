import { BrowserModule } from '@angular/platform-browser';

import {Injector, NgModule} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductComponent } from './pages/product/product.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { AuthGuard } from './guards/auth-guard.service';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LibraryComponent } from './pages/AccountPages/library/library.component';
import { AccountComponent } from './pages/AccountPages/account/account.component';
import { OrdersComponent } from './pages/AccountPages/orders/orders.component';
import { NavComponent } from './component/nav/nav.component';
import { SearchComponent } from './pages/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from './component/alert/alert.component';
import  {MatButtonToggleModule } from '@angular/material';
import { ResetPageComponent } from './pages/reset-page/reset-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    CartComponent,
    PaymentComponent,
    ProductComponent,
    CatalogComponent,
    LibraryComponent,
    AccountComponent,
    OrdersComponent,
    NavComponent,
    SearchComponent,
    AlertComponent,
    ResetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [NavComponent, AlertComponent]
})

export class AppModule {
}
