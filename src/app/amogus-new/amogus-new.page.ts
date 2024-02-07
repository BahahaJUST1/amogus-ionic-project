import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AmogusService } from '../amogus.service';
import { Amogus } from '../models/amogus.model';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-amogus-new',
  templateUrl: './amogus-new.page.html',
  styleUrls: ['./amogus-new.page.scss'],
})
export class AmogusNewPage implements OnInit {

  amogus!: any;

  constructor(
    private Amogus: AmogusService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.amogus = new Amogus();
  }

  async getCurrentPosition() {

    const coordinates = await Geolocation.getCurrentPosition();

    return [coordinates.coords.latitude, coordinates.coords.longitude];
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouvel Amogus enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/amogus']);
      }, 2000);
    });
  }

  async add() {
    // Récupération de la position de l'utilisateur
    try {
      const coordinates = await this.getCurrentPosition();
      this.amogus.latitude = coordinates[0];
      this.amogus.longitude = coordinates[1];
  
      // Enregistrement du nouvel Amogus
      await this.Amogus.saveNewAmogus(this.amogus).toPromise();
      this.amogus = new Amogus();
      this.presentToast();
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'un Amogus:', error);
    }
  }
}
