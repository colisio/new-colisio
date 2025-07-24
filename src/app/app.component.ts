import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColisioComponent } from './colisio/colisio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColisioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'colisio';
}
