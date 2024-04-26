import { Component } from '@angular/core';
import { HeaderComponent } from  './header/header.component';

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.css'
})

export class PlatformComponent {
  
}
