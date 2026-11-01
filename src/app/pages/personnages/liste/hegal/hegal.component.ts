import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-hegal',
  styleUrl: './hegal.component.scss',
  templateUrl: './hegal.component.html',
})
export class HegalComponent extends BasePersonnageComponent {
  themeColor = '#e1d7d3';
}
