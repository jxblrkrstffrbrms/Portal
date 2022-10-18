import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },  {
    path: 'regcert',
    loadChildren: () => import('./profile/regcert/regcert.module').then( m => m.RegcertPageModule)
  },
  {
    path: 'studentid',
    loadChildren: () => import('./profile/studentid/studentid.module').then( m => m.StudentidPageModule)
  },
  {
    path: 'subjects',
    loadChildren: () => import('./profile/subjects/subjects.module').then( m => m.SubjectsPageModule)
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./profile/curriculum/curriculum.module').then( m => m.CurriculumPageModule)
  },
  {
    path: 'scholarship',
    loadChildren: () => import('./profile/scholarship/scholarship.module').then( m => m.ScholarshipPageModule)
  },
  {
    path: 'liabilities',
    loadChildren: () => import('./profile/liabilities/liabilities.module').then( m => m.LiabilitiesPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./profile/qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'news2',
    loadChildren: () => import('./news/news2/news2.module').then( m => m.News2PageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
