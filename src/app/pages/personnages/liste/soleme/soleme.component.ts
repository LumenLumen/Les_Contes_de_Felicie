import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-soleme',
  styleUrl: './soleme.component.scss',
  templateUrl: './soleme.component.html',
})
export class SolemeComponent extends BasePersonnageComponent{
  themeColor = '#95ceca';
}
