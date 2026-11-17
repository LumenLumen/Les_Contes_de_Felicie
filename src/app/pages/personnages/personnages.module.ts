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
import { MiloComponent } from './liste/milo/milo.component';
import { ThooComponent } from './liste/thoo/thoo.component';
import { HegalComponent } from './liste/hegal/hegal.component';
import { KaosaComponent } from './liste/kaosa/kaosa.component';
import { KermeComponent } from './liste/kerme/kerme.component';
import { MedienComponent } from './liste/medien/medien.component';
import { PigneComponent } from './liste/pigne/pigne.component';
import { GrimgrimComponent } from './liste/grimgrim/grimgrim.component';
import { HedychiumComponent } from './liste/hedychium/hedychium.component';
import { SebanComponent } from './liste/seban/seban.component';
import { VerveineComponent } from './liste/verveine/verveine.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'soleme', component: SolemeComponent },
  { path: 'txiki', component: TxikiComponent },
  { path: 'lueur', component: LueurComponent },
  { path: 'linja', component: LinjaComponent },
  { path: 'mielle', component: MielleComponent},
  { path: 'zorigaitza', component: ZorigaitzaComponent},
  { path: 'buster', component: BusterComponent},
  { path: 'milo', component: MiloComponent},
  { path: 'thoo', component: ThooComponent},
  { path: 'hegal', component: HegalComponent},
  { path: 'kaosa', component: KaosaComponent},
  { path: 'kerme', component: KermeComponent},
  { path: 'medien', component: MedienComponent},
  { path: 'pigne', component: PigneComponent},
  { path: 'grimgrim', component: GrimgrimComponent},
  { path: 'hedychium', component: HedychiumComponent},
  { path: 'seban', component: SebanComponent},
  { path: 'verveine', component: VerveineComponent}
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
    MiloComponent,
    ThooComponent,
    HegalComponent,
    KaosaComponent,
    KermeComponent,
    MedienComponent,
    PigneComponent,
    GrimgrimComponent,
    HedychiumComponent,
    SebanComponent,
    VerveineComponent
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
