import { Component } from '@angular/core';

@Component({
  selector: 'app-example-temple-style',
  standalone: true,
  imports: [],
  template: `
    <h2 class = "custom" >
      example-temple-style works!
</h2>
  `,
  styles: [
       '.custom{color:yellow}'
  ]
})
export class ExampleTempleStyleComponent {

}
