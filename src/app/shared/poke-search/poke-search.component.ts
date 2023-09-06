import { Component } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {

  public readonly searchIcon: string = "../../../assets/icons/search.svg";

  constructor() {

  }
}
