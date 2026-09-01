import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-bulletlist',
  styleUrl: './bulletlist.component.scss',
  templateUrl: './bulletlist.component.html',
})
export class BulletlistComponent {

  @Input() titre !: String ;
  @Input() items !: Array<String> ;
}
