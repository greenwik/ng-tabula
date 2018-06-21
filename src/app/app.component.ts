import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  panelOpenState: boolean = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/menu.svg'));

      iconRegistry.addSvgIcon(
          'multi_chart',
          sanitizer.bypassSecurityTrustResourceUrl('assets/multi_chart.svg'));

      iconRegistry.addSvgIcon(
              'home',
              sanitizer.bypassSecurityTrustResourceUrl('assets/home.svg'));

    }

}
