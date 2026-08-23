import { Component } from '@angular/core';
import { CoreModule } from '../../../core/core.module';

@Component({
  imports: [CoreModule],
  selector: 'app-main',
  styleUrl: './main.component.scss',
  templateUrl: './main.component.html',
})
export class MainComponent {
}
