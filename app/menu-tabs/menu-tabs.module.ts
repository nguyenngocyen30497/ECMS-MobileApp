import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuTabsPage } from './menu-tabs.page';

const routes: Routes = [
  {
    path: 'menu-tabs',
    component: MenuTabsPage,
    children: [
      { 
        path: 'trang-chu',
        children: [
          {
            path: '',
            loadChildren: '../trang-chu/trang-chu.module#TrangChuPageModule'
          }
        ]
      }, 
      {
        path: 'danh-muc',
        children: [
          {
            path: '',
            loadChildren: '../danh-muc/danh-muc.module#DanhMucPageModule'
          },
          {
            path: 'lop/:maKhoa',
            children:[ 
              {
                path:'',
                loadChildren:'../components/danhMuc/lop/lop.module#LopPageModule'
              }
            ]
          }
        ] 
      },
      { 
        path: 'hoc-tap',
        children: [
          {
            path: '', 
            loadChildren: '../hoc-tap/hoc-tap.module#HocTapPageModule'
          },
          {
            path: 'segment/:maLop', 
            children:[
              {
                path:'',
                loadChildren:'../components/hocTap/segment/segment.module#SegmentPageModule'
              }
            ]
          }
        ]
      },
      {
        path: 'khuyen-mai',
        children: [
          {
            path: '',
            loadChildren: '../khuyen-mai/khuyen-mai.module#KhuyenMaiPageModule'
          }
        ]
      },
      {
        path: 'tai-khoan',
        children: [
          {
            path: '',
            loadChildren: '../tai-khoan/tai-khoan.module#TaiKhoanPageModule'
          }
        ]
      }

    ]
  },
  {
    path:'',
    redirectTo: 'menu-tabs/trang-chu',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuTabsPage]
})
export class MenuTabsPageModule {}
