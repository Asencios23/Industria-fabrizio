import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./trupanes/trupanes').then(m => m.Trupanes)
  },
  {
    path: 'abrasaderas',
    loadComponent: () => import('./abrasaderas/abrasaderas').then(m => m.Abrasaderas)
  },
  {
    path: 'unistru',
    loadComponent: () => import('./unistru/unistru').then(m => m.Unistru)
  },
  {
    path: 'angulos',
    loadComponent: () => import('./angulos/angulos').then(m => m.Angulos)
  },
  {
    path: 'angulos-cama',
    loadComponent: () => import('./angulos-cama/angulos-cama').then(m => m.AngulosCama)
  }
  ,
  // Fallback route
  {
    path: '**',
    redirectTo: ''
  }
];