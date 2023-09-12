import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputed-tag',
  templateUrl: './inputed-tag.component.html',
  styleUrls: ['./inputed-tag.component.scss'],
  standalone: true,
})
export class InputedTagComponent {
  @Input() label: string = '';
}
