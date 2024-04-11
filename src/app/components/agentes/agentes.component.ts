import { Component } from '@angular/core';
import { AgentsService } from '../../services/agents.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css'], // Asegúrate de que sea styleUrls en lugar de styleUrl
})
export class AgentesComponent {
  agentsArray: any[] = [];
  rol: string = 'todas';
  constructor(private agents: AgentsService) {
    this.loadAgents();
  }

  loadAgents() {
    this.agents.getAllAgents()?.subscribe((item) => {
      if (this.rol === 'todas') {
        this.agentsArray = item.data;
      } else {
        this.agentsArray = item.data.filter(
          (i: any) => i.role.displayName == this.rol
        );
      }
    });
  }

  onChangeRol() {
    this.loadAgents();
  }
}
