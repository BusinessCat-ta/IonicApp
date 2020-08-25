import { NavPagePageModule } from './interventi-page/nav-page/nav-page.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'lead-details/:id',
    loadChildren: () => import('./lead-details/lead-details.module').then( m => m.LeadDetailsPageModule)
  },
  {
    path: 'lead-form/:id',
    loadChildren: () => import('./lead-form/lead-form.module').then( m => m.LeadFormPageModule)
  },
  {
    path: 'crm-page',
    loadChildren: () => import('./crm-page/crm-page.module').then( m => m.CrmPagePageModule)
  },
  {
    path: 'interventi',
    loadChildren: () => import('./interventi-page/interventi-page.module').then( m => m.InterventiPagePageModule)
  },
  {
    path: 'NavPage',
    loadChildren: () => import('./interventi-page/nav-page/nav-page.module').then( m => m.NavPagePageModule)
  },
  {
    path: 'descrizione/:id',
    loadChildren: () => import('./descrizione-offerta/descrizione-offerta.module').then( m => m.DescrizioneOffertaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
