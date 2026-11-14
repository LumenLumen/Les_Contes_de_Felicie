import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../../core/core.module';
import { MainComponent } from './main/main.component';
import { RelationComponent } from './relation/relation.component';

const routes: Routes = [
  { path: '', component: MainComponent },
];

@NgModule({
  declarations: [
    MainComponent,
    RelationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    RouterModule.forChild(routes),
  ],
})
export class RelationsModule {}