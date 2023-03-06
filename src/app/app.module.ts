import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { PostingNewsComponent } from './posting-news/posting-news.component';
import { PrimeNGModule } from './shared/prime-ng.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminComponent,
    PostingNewsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNGModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
