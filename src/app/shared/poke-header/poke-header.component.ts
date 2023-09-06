import { Component } from '@angular/core';

@Component({
  selector: 'app-poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent {

  public readonly logo:string = "assets/logo/logo.svg";
  
}
