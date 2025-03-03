import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActivityPage } from './activity.page';
import { AddusermodalPage } from '../modal/addusermodal/addusermodal.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActivityPage, AddusermodalPage],
  entryComponents: [AddusermodalPage]
})
export class ActivityPageModule {}
