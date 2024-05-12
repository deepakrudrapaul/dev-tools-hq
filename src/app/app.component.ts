import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Constants } from './shared/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  navlist = Constants.navList;
  title = 'dev-tools';
}
