import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {

  //Enviando para fora do módulo
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  public readonly searchIcon: string = "../../../assets/icons/search.svg";

  constructor() {}

  public search(value: string): void {
    this.emmitSearch.emit(value)    
  }
}
