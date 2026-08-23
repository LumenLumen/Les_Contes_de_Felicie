import { Component } from '@angular/core';
import { CoreModule } from "../../../core/core.module";


@Component({
  selector: 'app-main',
  styleUrl: './main.component.scss',
  templateUrl: './main.component.html',
  imports: [CoreModule],
})
export class MainComponent {
}
