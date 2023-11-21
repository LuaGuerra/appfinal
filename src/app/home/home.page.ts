import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  mapa: any = Leaflet.Map;

  constructor() {}

  ngOnInit(): void {
    const printCurrentPosition = async () => {
      const coor = await Geolocation.getCurrentPosition();

      this.carregaMapa(coor.coords.latitude,coor.coords.longitude);
      
    };
    printCurrentPosition();
  }

  carregaMapa(lat: any, long: any){
    console.log("Latitude", lat);
    console.log("longitude",long);
    console.log("LatitudePM",-23.97743);
    console.log("LongitudePM",-46.309197);

    this.mapa = Leaflet.map('mapId',{
      center: [ lat, long],
      zoom:18
    })

    

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution:"Meu mapa"
    }).addTo(this.mapa)


    const ondeestou = Leaflet.icon({
      iconUrl: '../../assets/marcador.png', //Caminho do Marcador
      iconSize: [38, 52], 
      iconAnchor: [20, 40], 
      popupAnchor: [-3, -40] 
    });

    //Leaflet.marker({ lat: VALOR DA LATITUDE, lng: VALOR DA LONGITUDE },
    Leaflet.marker({ lat: lat, lng: long }, { icon: ondeestou }).addTo(this.mapa).bindPopup('Estou aqui');


    const PM = Leaflet.icon({
      iconUrl: '../../assets/praiamar.png', //Caminho do Marcador
      iconSize: [96, 58], 
      iconAnchor: [0, 0], 
      popupAnchor: [0, 0] 
    });
  
      Leaflet.marker({lat:-23.97743, lng:-46.309197}, { icon:PM }).addTo(this.mapa).bindPopup('shopping 1');


    const PB = Leaflet.icon({
      iconUrl: '../../assets/6.png', //Caminho do Marcador
      iconSize: [96, 58], 
      iconAnchor: [0, 0], 
      popupAnchor: [0, 0] 
    });

      Leaflet.marker({lat:-23.968945, lng:-46.332291}, { icon:PB }).addTo(this.mapa).bindPopup('shopping 2');



  }


}
