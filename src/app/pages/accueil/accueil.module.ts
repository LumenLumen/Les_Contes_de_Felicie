import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent } // <-- Définir MainComponent comme route par défaut
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class AccueilModule { }
