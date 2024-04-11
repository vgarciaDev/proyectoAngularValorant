import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AgentesComponent } from './components/agentes/agentes.component';
import { DetallesAgenteComponent } from './components/detalles-agente/detalles-agente.component';
import { MapasComponent } from './components/mapas/mapas.component';
import { MapasDetalleComponent } from './components/mapas-detalle/mapas-detalle.component';
import { ArmasComponent } from './components/armas/armas.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'agentes',
    component: AgentesComponent,
  },
  {
    path: 'agentes/:id',
    component: DetallesAgenteComponent,
  },
  {
    path: 'mapas',
    component: MapasComponent,
  },
  {
    path: 'mapas/:id',
    component: MapasDetalleComponent,
  },
  {
    path: 'armas',
    component: ArmasComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
