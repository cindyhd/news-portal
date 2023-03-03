import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';

const routes: Routes = [
  {path:'' , component: TopheadlinesComponent}, //topheadlines & Home
  {path:'admin' , component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
