import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { RouterLink, ɵEmptyOutletComponent } from '@angular/router';
import { LangTabComponent } from './lang-tab/lang-tab.component';
import { BulletlistComponent } from './bulletlist/bulletlist.component';
import { EncadreComponent } from './encadre/encadre.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { BackarrowComponent } from './backarrow/backarrow.component';
import { PopupComponent } from './popup/popup.component';
import { CharcardComponent } from './charcard/charcard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ImageComponent,
    LangTabComponent,
    BulletlistComponent,
    EncadreComponent,
    FlexboxComponent,
    BackarrowComponent,
    PopupComponent,
    CharcardComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ɵEmptyOutletComponent
],
  exports: [
    HeaderComponent,
    ImageComponent,
    LangTabComponent,
    BulletlistComponent,
    EncadreComponent,
    FlexboxComponent,
    BackarrowComponent,
    PopupComponent,
    CharcardComponent
  ]
})
export class CoreModule { }
