import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  public readonly imgError: string = "../../assets/error/error.png";
  private _url: string = "https://pokeapi.co/api/v2/pokemon";
  private _urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private apiService: PokeApiService,
  ) { };

  ngOnInit(): void {
    this.getPokemon()
  };

  public getPokemon() {
    const id: string = this.activeRoute.snapshot.params['id'];
    const pokemon = this.apiService.apiGetPokemon(`${this._url}/${id}`);
    const name = this.apiService.apiGetPokemon(`${this._urlName}/${id}`);

    //Faz as duas chamadas de uma vez

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      },
      error => {
        this.apiError = true;
      }
    );
  }
}
