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

  onDelete(id: any) {
    this.Amogus.delete(id);
    this.router.navigate(['/amogus']);
  }
}
