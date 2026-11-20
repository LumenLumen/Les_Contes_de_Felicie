import { Component, Input } from '@angular/core';
import { CoreModule } from '../core.module';
import { CharCard } from './charcard.model';
import { CARDS } from './charcard-mock';

@Component({
  standalone: false,
  selector: 'app-charcard',
  styleUrl: './charcard.component.scss',
  templateUrl: './charcard.component.html',
})
export class CharcardComponent {

  @Input() image_path!: string;
  @Input() artist!: string;
  @Input() id!: string;

  char: CharCard | undefined; 

  ngOnInit(): void {
    if (this.artist) {
      this.char = CARDS.find(a => a.id.toLowerCase() === this.id.toLowerCase())
    }
  }

}
