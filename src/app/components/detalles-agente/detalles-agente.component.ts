import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentsService } from '../../services/agents.service';

@Component({
  selector: 'app-detalles-agente',
  templateUrl: './detalles-agente.component.html',
  styleUrls: ['./detalles-agente.component.css'],
})
export class DetallesAgenteComponent implements OnInit {
  id: String | null = '';
  agentsArray: any[] = [];

  constructor(private route: ActivatedRoute, private agents: AgentsService) {
    this.ngOnInit();
    this.loadAgents();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }

  loadAgents() {
    this.agents.getAllAgents()?.subscribe((item) => {
      this.agentsArray = item.data.filter((i: any) => i.uuid == this.id);
    });
    console.log(this.agentsArray, this.id);
  }
}
