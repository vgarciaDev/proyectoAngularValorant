import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  valorant: String = '../../assets/img/V_Logotype_Red.png';
  imagenJuego: String[] = [
    '../../assets/img/Reveal_Window_VALORANT.jpg',
    '../../assets/img/Reveal_Canopy_VALORANT.jpg',
    '../../assets/img/Reveal_BSite_VALORANT.jpg',
    '../../assets/img/FirstLook_CreepCreep_VALORANT.jpg',
  ];
  valorImagen: any = 0;

  cambiarImagen(valor: any) {
    this.valorImagen = valor;
  }
}
