import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animado',
  templateUrl: './animado.html',
  styleUrls: [],
  animations: [
    trigger('cambioEstado', [
      state('original', style({
        backgroundColor: 'blue',
        transform: 'scale(1)'
      })),
      state('modificado', style({
        backgroundColor: 'red',
        transform: 'scale(1.2)'
      })),
      transition('original <=> modificado', animate('300ms'))
    ])
  ]
})
export class AnimadoComponent {
  estado = 'original';

  toggleEstado() {
    this.estado = this.estado === 'original' ? 'modificado' : 'original';
  }
  
  resetEstado() {
    this.estado = 'original';
  }
}