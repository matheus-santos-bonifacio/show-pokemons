import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;

  constructor() {}

  ngOnInit() {
    fetch('./assets/data.json')
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
      });
  }
}
