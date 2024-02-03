import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AmogusService } from 'src/app/amogus.service';
import { Amogus } from 'src/app/models/amogus.model';

@Component({
  selector: 'app-amogus',
  templateUrl: './amogus.page.html',
  styleUrls: ['./amogus.page.scss'],
})
export class AmogusPage implements OnInit {

  modif: boolean = false;
  delete: boolean = false;
  amogus!: Amogus;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Amogus: AmogusService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Amogus.get(id).subscribe((value: any) => {
      this.amogus = value;
    });
  }

  async setDelete() {
    if(!this.delete) {
      const alert = await this.alertCtrl.create({
        header : 'Do you want to delete this amogus ?',
        subHeader: 'This action will permanently remove your amogus',
        buttons : [
          {
            text: 'Cancel',
            role: 'Cancel'
          }, {
            text: 'Delete',
            handler: () => {
              this.delete = !this.delete
              this.onDelete(this.amogus.id);
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.delete = !this.delete;
    }
  }

  onDelete(id: any) {
    this.Amogus.delete(id);
    this.presentToastDelete();
    this.router.navigate(['/amogus']);
  }

  async presentToastDelete() {
    const toast = this.toastCtrl.create({
      message: 'Amogus deleted !',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Amogus.update(this.amogus).subscribe(() => {
      this.presentToastUpdate();
      this.modif = false;
    });
  }

  async presentToastUpdate() {
    const toast = this.toastCtrl.create({
      message: 'Amogus updated !',
      duration: 2000
    });
    (await toast).present();
  }
}
