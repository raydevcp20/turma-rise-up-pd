import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() type: string = "";
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleClick() {
    this.clickEvent.emit();
  }
}
