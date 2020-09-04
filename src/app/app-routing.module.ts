import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'lead-details/:id',
    loadChildren: () => import('./lead-details/lead-details.module').then( m => m.LeadDetailsPageModule)
  },
  {
    path: 'lead-form/:id',
    loadChildren: () => import('./lead-form/lead-form.module').then( m => m.LeadFormPageModule)
  },
  {
    path: 'crm',
    loadChildren: () => import('./crm-page/crm-page.module').then( m => m.CrmPagePageModule)
  },
  {
    path: 'interventi',
    loadChildren: () => import('./interventi-page/interventi-page.module').then( m => m.InterventiPagePageModule)
  },
  {
    path: 'descrizione/:id',
    loadChildren: () => import('./descrizione-offerta/descrizione-offerta.module').then( m => m.DescrizioneOffertaPageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
  },
  {
    path: 'fornitori',
    loadChildren: () => import('./fornitori/fornitori.module').then( m => m.FornitoriPageModule)
  },
  {
    path: 'opportunita',
    loadChildren: () => import('./opportunita/opportunita.module').then( m => m.OpportunitaPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
