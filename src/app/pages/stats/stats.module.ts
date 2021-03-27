import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatsPage } from './stats.page';
import { InfomodalPage } from '../modal/infomodal/infomodal.page';
import { BillinputmodalPage } from '../modal/billinputmodal/billinputmodal.page';

const routes: Routes = [
  {
    path: '',
    component: StatsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatsPage, InfomodalPage, BillinputmodalPage],
  entryComponents: [InfomodalPage, BillinputmodalPage]
})
export class StatsPageModule {}
