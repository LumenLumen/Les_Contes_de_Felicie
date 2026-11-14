import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-hedychium',
  styleUrl: './hedychium.component.scss',
  templateUrl: './hedychium.component.html',
})
export class HedychiumComponent extends BasePersonnageComponent {
  themeColor = '#242f24';
}
