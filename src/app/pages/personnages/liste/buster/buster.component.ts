import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone:false,
  selector: 'app-buster',
  styleUrl: './buster.component.scss',
  templateUrl: './buster.component.html',
})
export class BusterComponent extends BasePersonnageComponent{
  themeColor = '#d1bc81';
}
