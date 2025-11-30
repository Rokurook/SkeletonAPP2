import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
  standalone:false
})
export class MapsPage implements OnInit {


  constructor() { }

  ngOnInit() {
    this.getLocationAndShowOnMap()
  }

  async  getLocationAndShowOnMap() {
  try {
    const position = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    });

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Mostrar coordenadas en el mapa
    const mapFrame: any = document.getElementById('mapFrame');
    mapFrame.src = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;
  } catch (error) {
    console.error('Error al obtener la ubicación:', error);
  }
}

}