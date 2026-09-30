import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-mielle',
  styleUrl: './mielle.component.scss',
  templateUrl: './mielle.component.html',
})
export class MielleComponent extends BasePersonnageComponent{
  themeColor = '#a4a8cd';
}
