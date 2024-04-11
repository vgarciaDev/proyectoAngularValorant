import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapasService } from '../../services/mapas.service';

@Component({
  selector: 'app-mapas-detalle',
  templateUrl: './mapas-detalle.component.html',
  styleUrl: './mapas-detalle.component.css',
})
export class MapasDetalleComponent implements OnInit {
  id: String | null = '';
  mapa: any[] = [];

  constructor(private route: ActivatedRoute, private mapas: MapasService) {
    this.ngOnInit();
    this.loadMapa();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }

  loadMapa() {
    this.mapas.getAllMapas()?.subscribe((item) => {
      this.mapa = item.data.filter((i: any) => i.uuid == this.id);
    });
    console.log(this.mapa, this.id);
  }
}
