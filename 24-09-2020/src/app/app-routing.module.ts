import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'basicalert',
    loadChildren: () => import('./basicalert/basicalert.module').then( m => m.BasicalertPageModule)
  },
  {
    path: 'promptalert',
    loadChildren: () => import('./promptalert/promptalert.module').then( m => m.PromptalertPageModule)
  },
  {
    path: 'checkboxalert',
    loadChildren: () => import('./checkboxalert/checkboxalert.module').then( m => m.CheckboxalertPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'button-icons',
    loadChildren: () => import('./button-icons/button-icons.module').then( m => m.ButtonIconsPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'ionfabbutton',
    loadChildren: () => import('./ionfabbutton/ionfabbutton.module').then( m => m.IonfabbuttonPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
