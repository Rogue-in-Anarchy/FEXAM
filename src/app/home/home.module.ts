import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { WebcamModule } from 'ngx-webcam';
import { ExaminerComponent } from './examiner/examiner.component';
import { PermissionsComponent } from './permissions/permissions.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    WebcamModule
  ],
  declarations: [
    HomePage,
    PermissionsComponent,
    ExaminerComponent
  ]
  
})
export class HomePageModule {}
