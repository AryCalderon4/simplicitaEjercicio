import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoComponent } from './home/historico/historico.component';
import { HomeComponent } from './home/home.component';
import { VigenteComponent } from './home/vigente/vigente.component';


const routes: Routes = [
  { path: '', component: HomeComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
