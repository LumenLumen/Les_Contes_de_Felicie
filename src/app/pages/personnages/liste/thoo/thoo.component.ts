import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-thoo',
  styleUrl: './thoo.component.scss',
  templateUrl: './thoo.component.html',
})
export class ThooComponent extends BasePersonnageComponent {
  themeColor = '#a1b472';
}
