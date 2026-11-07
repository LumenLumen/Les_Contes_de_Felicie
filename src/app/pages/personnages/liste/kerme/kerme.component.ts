import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-kerme',
  styleUrl: './kerme.component.scss',
  templateUrl: './kerme.component.html',
})
export class KermeComponent  extends BasePersonnageComponent {
  themeColor = '#f5c871';
}
