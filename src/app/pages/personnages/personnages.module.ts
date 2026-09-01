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
  declarations: [
    SolemeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
})
export class PersonnagesModule {
  currentLang: 'en' | 'fr' = 'fr';

  selectLang(lang: 'en' | 'fr', event?: Event): void {
    if (event) {
      event.preventDefault(); // Évite le comportement d'ancrage par défaut du lien
    }
    this.currentLang = lang;
  }
}
