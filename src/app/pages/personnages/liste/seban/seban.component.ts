import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-seban',
  styleUrl: './seban.component.scss',
  templateUrl: './seban.component.html',
})
export class SebanComponent extends BasePersonnageComponent {
  themeColor = '#d9ceb5';
}