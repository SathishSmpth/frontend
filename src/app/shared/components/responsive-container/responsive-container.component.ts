import { Component, Input } from '@angular/core';

@Component({
  selector: 'responsive-container',
  templateUrl: './responsive-container.component.html',
  styleUrls: ['./responsive-container.component.scss'],
})
export class ResponsiveContainerComponent {
  @Input() bgImageUrl!:string;
}
