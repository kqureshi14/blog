import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DummytempComponent } from './dummytemp/dummytemp.component';
import { ExampleTempleStyleComponent } from './example-temple-style/example-temple-style.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserDetailsComponent,DummytempComponent,ExampleTempleStyleComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
