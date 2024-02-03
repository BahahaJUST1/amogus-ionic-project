import { Component, OnInit } from '@angular/core';
import { AmogusService } from '../amogus.service';
import { Amogus } from '../models/amogus.model';

@Component({
  selector: 'app-amogus-list',
  templateUrl: './amogus-list.page.html',
  styleUrls: ['./amogus-list.page.scss'],
})
export class AmogusListPage implements OnInit {

  amogusList!: Array<Amogus>;

  constructor(private Amogus: AmogusService) { }

  ngOnInit(): void
  {
    this.Amogus.getAll().subscribe((data: any) => {
      this.amogusList = data;
    });
  }

}
