import { Component } from '@angular/core';
import { ArmasService } from '../../services/armas.service';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrl: './armas.component.css',
})
export class ArmasComponent {
  arrayArmas: any[] = [];

  constructor(private armas: ArmasService) {
    this.getArmas();
  }

  getArmas() {
    this.armas.getAllArmas()?.subscribe((item) => {
      this.arrayArmas = item.data;
    });
  }
}
