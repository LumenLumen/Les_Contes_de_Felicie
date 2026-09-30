import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone:false,
  selector: 'app-zorigaitza',
  styleUrl: './zorigaitza.component.scss',
  templateUrl: './zorigaitza.component.html',
})
export class ZorigaitzaComponent extends BasePersonnageComponent{
  themeColor = '#2e2a28';
}
