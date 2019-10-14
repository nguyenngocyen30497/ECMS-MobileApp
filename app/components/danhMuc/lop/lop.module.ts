import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LopPage } from './lop.page';

const routes: Routes = [
  {
    path: '',
    component: LopPage
  }
];
// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         path: '',
//         component: LopPage
//       },
//       {
//         path: 'lop/:maKhoa',
//         loadChildren: '../components/lop/lop.module#LopPageModule'
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LopPage]
})
export class LopPageModule {}
