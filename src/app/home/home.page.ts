import { Component } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}
  // ngOnInit(){
    
  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.770112464770944, 110.37777630624075], 15)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.map);
  
L.marker([-7.770112464770944, 110.37777630624075]).addTo(this.map)
    .bindPopup('Graha Saba Pramana')
    .openPopup();
  

    // Buat objek lapisan dasar
  const baseMaps = {
    'OpenStreetMap': L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    'Mapbox': L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN', {
      attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors',
      id: 'mapbox/streets-v11', // Ganti dengan ID gaya peta Mapbox Anda
      tileSize: 512,
      zoomOffset: -1,
    }),
    'Satellite (Esri)': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 19,
    }),
    'Topography': L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
      maxZoom: 16,
    }),
   
    
  };
  

  // Buat objek layer control dan tambahkan ke peta
  L.control.layers(baseMaps).addTo(this.map);
};

}
