import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  providers: [],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'casa-de-cambio';
}
