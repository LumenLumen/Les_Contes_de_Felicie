import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { SolemeComponent } from './liste/soleme/soleme.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'soleme', component: SolemeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class PersonnagesModule { }
