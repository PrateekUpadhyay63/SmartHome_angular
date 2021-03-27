import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ModalController } from '@ionic/angular';
import { InfomodalPage } from "./../modal/infomodal/infomodal.page";
import { BillinputmodalPage } from '../modal/billinputmodal/billinputmodal.page';
import { HttpService } from "./../../services/https.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  @ViewChild('barChart') barChart;
  // @ViewChild('linesChart') linesChart;
  // @ViewChild('linesChart2') linesChart2;


  bars: any;
  colorArray: any;

  constructor(
    public modalController: ModalController,
    private httpService:HttpService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createBarChart();
    // this.createLinesChart();
    // this.createLinesChart2();

    this.httpService.getBillProjection().subscribe(data => {
      console.log(data);
    });
  }

  async openInfoModal() {
    const modal = await this.modalController.create({
      component: InfomodalPage
    });
    return await modal.present();
  }

  async openBillInputModal() {
    const modal = await this.modalController.create({
      component: BillinputmodalPage
    });
    return await modal.present();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Living Room', 'Kitchen', 'Bathroom'],
        datasets: [{
          label: 'Kwh',
          data: [2.5, 3.8, 5, 6.9,],
          backgroundColor: '#40BFCF', // array should have same number of elements as number of dataset
          borderColor: '#40BFCF',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  // createLinesChart() {
  //   this.bars = new Chart(this.linesChart.nativeElement, {
  //     type: 'line',
  //     backgroundColor: "rgba(255, 0, 255, 0)",
  //     data: {
  //       labels: ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00"],
  //       datasets: [{
  //         backgroundColor: "#40BFCF",
  //         pointBackgroundColor: "#40BFCF",
  //         pointBorderColor: "#40BFCF",
  //         borderColor: "#ffffff",
  //         data: [27.9, 24.3, 26, 29.3, 24.2, 27, 23.3],
  //         fill: false,
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       legend: {
  //         display: false
  //       },
  //       tooltips: {
  //         enabled: false
  //       },
  //       scales: {
  //         xAxes: [{
  //           gridLines: {
  //             display: false
  //           }
  //         }],
  //         yAxes: [{
  //           gridLines: {
  //             display: false
  //           },
  //           ticks: {
  //             display: false
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

  // createLinesChart2() {
  //   this.bars = new Chart(this.linesChart2.nativeElement, {
  //     type: 'line',
  //     backgroundColor: "rgba(255, 0, 255, 0)",
  //     data: {
  //       labels: ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00"],
  //       datasets: [{
  //         backgroundColor: "#40BFCF",
  //         pointBackgroundColor: "#40BFCF",
  //         pointBorderColor: "#40BFCF",
  //         borderColor: "#40BFCF",
  //         data: [23.9, 24.3, 26, 29.3, 26.2, 27, 23.3],
  //         fill: false,
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       legend: {
  //         display: false
  //       },
  //       tooltips: {
  //         enabled: false
  //       },
  //       scales: {
  //         xAxes: [{
  //           gridLines: {
  //             display: false
  //           }
  //         }],
  //         yAxes: [{
  //           gridLines: {
  //             display: false
  //           },
  //           ticks: {
  //             display: false
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

}
