import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AmogusService } from '../amogus.service';
import { Amogus } from '../models/amogus.model';

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

  add() {
    this.Amogus.saveNewAmogus(this.amogus).subscribe(() => {
      this.amogus = new Amogus();
      this.presentToast();
    });
  }
}
