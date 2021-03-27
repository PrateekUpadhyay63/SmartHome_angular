import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billinputmodal',
  templateUrl: './billinputmodal.page.html',
  styleUrls: ['./billinputmodal.page.scss'],
})
export class BillinputmodalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectDate() {
    console.log("Date selector has opened")
  }

  selectFrequency() {
    console.log("Frequency selector will come here")
  }

  setConsumptionRate() {
    console.log("Consumption rate will come here")
  }

  setExportRate() {
    console.log("Export rate will come here")
  }
}
