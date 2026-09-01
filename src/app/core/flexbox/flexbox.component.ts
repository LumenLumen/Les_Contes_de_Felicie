import { Component, Input } from '@angular/core';

@Component({
  standalone: false, // ou standalone: true selon ta configuration
  selector: 'app-flexbox',
  styleUrl: './flexbox.component.scss',
  templateUrl: './flexbox.component.html',
})
export class FlexboxComponent {
  @Input() sidePosition: 'left' | 'right' = 'left';
}