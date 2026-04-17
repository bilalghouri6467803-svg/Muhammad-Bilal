import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudService } from './crud.service';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContectComponent } from './contect/contect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    ProductComponent,
    ContectComponent
  ],
imports: [
  BrowserModule,
  AppRoutingModule,   // ✅ only this
  HttpClientModule,
  ReactiveFormsModule
],
  providers: [CrudService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
