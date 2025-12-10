import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; //aqui defini rutas
import { ExperimentsComponent } from './pages/experiments/experiments.component';
import path from 'path';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'experimentos', component: ExperimentsComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
