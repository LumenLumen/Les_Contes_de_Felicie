import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-kaosa',
  styleUrl: './kaosa.component.scss',
  templateUrl: './kaosa.component.html',
})
export class KaosaComponent extends BasePersonnageComponent {
  themeColor = '#b5b35c';
}
