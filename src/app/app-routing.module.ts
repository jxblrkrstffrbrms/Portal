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
  },
  {
    path: 'announcement',
    loadChildren: () => import('./announcement/announcement.module').then( m => m.AnnouncementPageModule)
  },
  {
    path: 'attend',
    loadChildren: () => import('./attend/attend.module').then( m => m.AttendPageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
  },
  {
    path: 'update-task',
    loadChildren: () => import('./update-task/update-task.module').then( m => m.UpdateTaskPageModule)
  },
  {
    path: 'firstsem',
    loadChildren: () => import('./acad-calendar/firstsem/firstsem.module').then( m => m.FirstsemPageModule)
  },
  {
    path: 'secondsem',
    loadChildren: () => import('./acad-calendar/secondsem/secondsem.module').then( m => m.SecondsemPageModule)
  },
  {
    path: 'midterm',
    loadChildren: () => import('./acad-calendar/midterm/midterm.module').then( m => m.MidtermPageModule)
  },
  {
    path: 'aboutactivity',
    loadChildren: () => import('./about/aboutactivity/aboutactivity.module').then( m => m.AboutactivityPageModule)
  },
  {
    path: 'abtattendance',
    loadChildren: () => import('./about/abtattendance/abtattendance.module').then( m => m.AbtattendancePageModule)
  },
  {
    path: 'abtgrades',
    loadChildren: () => import('./about/abtgrades/abtgrades.module').then( m => m.AbtgradesPageModule)
  },
  {
    path: 'abtprofile',
    loadChildren: () => import('./about/abtprofile/abtprofile.module').then( m => m.AbtprofilePageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./about/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'admin1',
    loadChildren: () => import('./admin1/admin1.module').then( m => m.Admin1PageModule)
  },
  {
    path: 'admin2',
    loadChildren: () => import('./admin2/admin2.module').then( m => m.Admin2PageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
