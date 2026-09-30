import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { SolemeComponent } from './liste/soleme/soleme.component';
import { TxikiComponent } from './liste/txiki/txiki.component';
import { LueurComponent } from './liste/lueur/lueur.component';
import { LinjaComponent } from './liste/linja/linja.component';
import { MielleComponent } from './liste/mielle/mielle.component';
import { ZorigaitzaComponent } from './liste/zorigaitza/zorigaitza.component';
import { BusterComponent } from './liste/buster/buster.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'soleme', component: SolemeComponent },
  { path: 'txiki', component: TxikiComponent },
  { path: 'lueur', component: LueurComponent },
  { path: 'linja', component: LinjaComponent },
  { path: 'mielle', component: MielleComponent},
  { path: 'zorigaitza', component: ZorigaitzaComponent},
  { path: 'buster', component: BusterComponent},
];

@NgModule({
  declarations: [
    SolemeComponent,
    TxikiComponent,
    LueurComponent,
    LinjaComponent,
    MielleComponent,
    ZorigaitzaComponent,
    BusterComponent,
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
