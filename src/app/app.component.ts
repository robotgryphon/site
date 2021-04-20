import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cm-site';
  faGithub = faGithub;

  constructor(private icons: MatIconRegistry) {
    
  }
}
