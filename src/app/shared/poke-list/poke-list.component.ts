import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public readonly imgError: string = "../../assets/error/error.png";
  public readonly pokemonImage: string = "../../../assets/pokemon/pokemon.png";
  public getAllPokemons: any;
  private _setAllPokemons: any;
  public apiError: boolean = false;

  constructor(
    private apiService: PokeApiService
  ) {

  };

  ngOnInit(): void {
    this.apiService.apiListAllPaokemons.subscribe(
      res => {
        this._setAllPokemons = res.results;
        this.getAllPokemons = this._setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  };

  public getSearch(value: string) {
    const filter = this._setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
    console.log(value);
  }
}
