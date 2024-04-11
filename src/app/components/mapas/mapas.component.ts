import { Component } from '@angular/core';
import { MapasService } from '../../services/mapas.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css',
})
export class MapasComponent {
  arrayMapas: any[] = [];

  constructor(private mapas: MapasService) {
    this.loadMapas();
  }

  loadMapas() {
    this.mapas.getAllMapas()?.subscribe((item) => {
      this.arrayMapas = item.data;
    });
  }
}
