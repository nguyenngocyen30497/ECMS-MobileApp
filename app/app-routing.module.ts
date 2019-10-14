import { AuthGuard } from './components/Login_JWT/auth/guards/auth.guards';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'lop/:maKhoa', loadChildren: './components/lop/lop.module#LopPageModule' },
  // { path: 'detail-lop', loadChildren: './components/detail-lop/detail-lop.module#DetailLopPageModule' },
  // { path: 'register', loadChildren: './components/Session_Login/register/register.module#RegisterPageModule' },
  // { path: 'landing', loadChildren: './components/AuthenticationJWT/pages/landing/landing.module#LandingPageModule' },
  // { path: 'login', loadChildren: './components/AuthenticationJWT/pages/auth/login/login.module#LoginPageModule' },
  // { path: 'dashboard', loadChildren: './components/AuthenticationJWT/pages/dashboard/dashboard.module#DashboardPageModule' },
  // { path: 'register-auth', loadChildren: './components/AuthenticationJWT/pages/auth/register-auth/register-auth.module#RegisterAuthPageModule' },
  { path: '', loadChildren: './menu-tabs/menu-tabs.module#MenuTabsPageModule' },
  // { path: 'segment', loadChildren: './components/hocTap/segment/segment.module#SegmentPageModule' },
  // { path: 'trang-chu', loadChildren: './trang-chu/trang-chu.module#TrangChuPageModule' },
  // { path: 'danh-muc', loadChildren: './danh-muc/danh-muc.module#DanhMucPageModule' },
  // { path: 'hoc-tap', loadChildren: './hoc-tap/hoc-tap.module#HocTapPageModule' },
  // { path: 'khuyen-mai', loadChildren: './khuyen-mai/khuyen-mai.module#KhuyenMaiPageModule' },
  // { path: 'tai-khoan', loadChildren: './tai-khoan/tai-khoan.module#TaiKhoanPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
