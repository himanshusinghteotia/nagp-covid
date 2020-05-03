import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoldTextPipe } from './precautions/bold-text.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewNewsComponent } from './news/view-news/view-news.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateDistrictComponent } from './dashboard/state-district/state-district.component';

@NgModule({
  declarations: [
    AppComponent,
    PrecautionsComponent,
    HeaderComponent,
    FooterComponent,
    BoldTextPipe,
    LoginComponent,
    AddNewsComponent,
    ViewNewsComponent,
    DashboardComponent,
    StateDistrictComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
