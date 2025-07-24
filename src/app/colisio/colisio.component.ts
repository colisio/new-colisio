import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-colisio',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './colisio.component.html',
  styleUrl: './colisio.component.css'
})
export class ColisioComponent {

}
