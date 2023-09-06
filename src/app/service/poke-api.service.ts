import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(
    private http: HttpClient,
  ) { }

  get apiListAllPaokemons(): Observable<any> {
    return this.http.get<any>(this.url)
      .pipe(
        //ele possibilita fazer uma segunda requisição
        tap(
          res => res
        ),
        tap(
          res => {
            res.results.map((resPokemons: any) => {

            })
          }
        )
      )

  }
}
