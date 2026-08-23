import { Component } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { BoxComponent } from "../box/box.component";

@Component({
  imports: [CoreModule, BoxComponent],
  selector: 'app-main',
  styleUrl: './main.component.scss',
  templateUrl: './main.component.html',
})
export class MainComponent {
}
