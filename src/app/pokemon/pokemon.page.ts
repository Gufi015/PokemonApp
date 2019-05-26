import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  datos:any;
  constructor(private servicio: ServicesService, private router: Router) {

   }

  ngOnInit() {

    this.servicio.servicioPokemon().then(data =>{
      this.datos = data['pokemon'];
      console.log('estos son los datos de pokemon ' + JSON.stringify(this.datos));
    },error =>{
      console.log(error);
    });
  }


  pokemonDetails(i){

    console.log('este es el dato que trae '+ JSON.stringify(i));
    console.log(this.datos[i]);
    let navigationEx: NavigationExtras = {
      queryParams: {
        pokemonId: JSON.stringify(this.datos[i])
      }
    };
    console.log(navigationEx);
    this.router.navigate(['pokemon-details'], navigationEx); 
  }

}
