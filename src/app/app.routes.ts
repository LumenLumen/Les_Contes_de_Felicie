import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'accueil', 
        loadComponent: () => import('./pages/accueil/main/main.component').then(m => m.MainComponent) 
    },
    { 
        path: 'personnages', 
        loadChildren: () => import('./pages/personnages/personnages.module').then(m => m.PersonnagesModule) // <-- Remplacer par loadChildren ici
    },
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: '**', redirectTo: 'accueil' }
];