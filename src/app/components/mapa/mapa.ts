import { Component } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.html',
  styleUrls: ['./mapa.css']
})
export class MapaComponent {
  accessToken = 'pk.eyJ1IjoiZGV2ZWxvcGVyIiwiYSI6ImNsc2V4bG9odzA0bG0yaW10a3V3c2Nlc3cifQ.sampletoken';
  
  center: [number, number] = [-87.2068, 14.0722];
  
  markers = [
    {
      id: '1',
      lng: -87.2068,
      lat: 14.0722,
      title: 'Centro Histórico',
      description: 'El corazón de la ciudad',
      color: '#ff4444',
      showPopup: false
    },
    {
      id: '2',
      lng: -87.1968,
      lat: 14.0822,
      title: 'Parque Central',
      description: 'Lugar de reunión principal',
      color: '#44ff44',
      showPopup: false
    }
  ];

  togglePopup(marker: any) {
    marker.showPopup = !marker.showPopup;
  }
}