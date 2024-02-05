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

    constructor() { 
        this.printCurrentPosition();
    }

    ngOnInit() {
        this.loadLeafletMap();
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

    async printCurrentPosition() {
        const coordinates = await Geolocation.getCurrentPosition();
      
        console.log('Current position:', coordinates);
    };
}
