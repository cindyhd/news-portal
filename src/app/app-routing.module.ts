import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { PostingNewsComponent } from './posting-news/posting-news.component';

const routes: Routes = [
  { path:'main' , component: MainComponent }, 
  { path:'admin' , component: AdminComponent },
  { path:'posting-news' , component: PostingNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
