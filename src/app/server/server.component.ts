import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server', //element, id #, class .
  // template: '<div>Hello world!</div>',
  templateUrl: './server.component.html', //seperate template file
  //preference of template if both exists
  styleUrls: [],
  styles: [],
  encapsulation: ViewEncapsulation.None, //None, Emulated, Nativ
})
export class ServerComponent {}
