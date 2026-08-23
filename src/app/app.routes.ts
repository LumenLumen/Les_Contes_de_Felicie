import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'accueil', 
        loadComponent: () => import('./pages/accueil/main/main.component').then(m => m.MainComponent) 
    },
    { 
        path: 'personnages', 
        loadComponent: () => import('./pages/personnages/main/main.component').then(m => m.MainComponent) 
    },
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: '**', redirectTo: 'accueil' }
];