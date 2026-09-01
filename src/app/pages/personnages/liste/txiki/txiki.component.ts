import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone:false,
  selector: 'app-txiki',
  styleUrl: './txiki.component.scss',
  templateUrl: './txiki.component.html',
})
export class TxikiComponent extends BasePersonnageComponent{
  themeColor = '#eacb9f';
}
