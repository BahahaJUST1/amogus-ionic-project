import { Component, OnInit } from '@angular/core';
import { AmogusService } from '../amogus.service';

@Component({
  selector: 'app-amogus-list',
  templateUrl: './amogus-list.page.html',
  styleUrls: ['./amogus-list.page.scss'],
})
export class AmogusListPage implements OnInit {

  // amogusList = [
  //   {
  //     id: 1,
  //     name: "Bob",
  //     color: "#ff0000"
  //   },
  //   {
  //     id: 2,
  //     name: "Enguerrand",
  //     color: "#ffff00"
  //   },
  //   {
  //     id: 3,
  //     name: "Mickael",
  //     color: "#0000ff"
  //   },
  //   {
  //     id: 4,
  //     name: "Douglas",
  //     color: "#ffffff"
  //   }
  // ]

  amogusList!: any;

  constructor(private Amogus: AmogusService) { }

  ngOnInit(): void
  {
    this.Amogus.getAll().subscribe((data: any) => {
      this.amogusList = data;
    });
  }

}
