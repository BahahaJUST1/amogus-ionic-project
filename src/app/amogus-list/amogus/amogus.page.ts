import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amogus',
  templateUrl: './amogus.page.html',
  styleUrls: ['./amogus.page.scss'],
})
export class AmogusPage implements OnInit {

  modif: boolean = false;
  amogus = [
    {
      id: 1,
      name: "Bob",
      color: "#ff0000",
      img: "/assets/img/amogus.png"
    },
    {
      id: 2,
      name: "Enguerrand",
      color: "#ffff00",
      img: "/assets/img/amogus.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
