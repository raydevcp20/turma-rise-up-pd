import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { ListComponent } from './components/list/list.component';
import { ChipComponent } from './components/chip/chip.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, ListComponent, ChipComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components-lib';

  itens = ['item 1', 'item 2', 'item 3'];
  users = ['user 1', 'user 2', 'user 3'];

  sendData() {
    alert('Dados enviados');
  }
}
