import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import { Geolocation } from '@capacitor/geolocation';

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

    leafletMap: any;
    lat: number = 47.1539;
    lng: number = 2.2508;
    zoom: number = 6;

    constructor() {}

    userIcon = new L.Icon({
        iconUrl: '../../assets/img/marker.png',
        iconSize: [32, 32], // Taille de l'icône en pixels
        iconAnchor: [16, 32], // Point d'ancrage par rapport au coin supérieur gauche de l'icône
        popupAnchor: [0, -32] // Point d'ancrage pour la fenêtre contextuelle par rapport au coin inférieur gauche de l'icône
    });

    ngOnInit() {
        this.loadLeafletMap();

        let userCoordinates: Promise<number[]> = this.getCurrentPosition();

        userCoordinates.then((coordinates) => {
          L.marker([coordinates[0], coordinates[1]], {icon: this.userIcon}).addTo(this.leafletMap).bindPopup("You are here !");
        });
    }

    loadLeafletMap() {

        this.leafletMap = new L.Map('leafletMap');
        
        const self = this;
        
        this.leafletMap.on("load", function () {
            setTimeout(() => {
                self.leafletMap.invalidateSize();
            }, 10);
        });
        
        this.leafletMap.setView([this.lat, this.lng], this.zoom);
        
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href=”https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.leafletMap);
    }

    async getCurrentPosition() {

        const coordinates = await Geolocation.getCurrentPosition();

        return [coordinates.coords.latitude, coordinates.coords.longitude];
    }
}
