import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-pigne',
  styleUrl: './pigne.component.scss',
  templateUrl: './pigne.component.html',
})
export class PigneComponent extends BasePersonnageComponent{
  themeColor = '#e0dce5';
}
