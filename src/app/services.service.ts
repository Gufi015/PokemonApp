import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url:string = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
  constructor(private httpClient:HttpClient) { }

  servicioPokemon(){
    return new Promise( resolve => {
      this.httpClient.get(this.url).subscribe(data => {
        resolve(data);
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    });
  }
}
