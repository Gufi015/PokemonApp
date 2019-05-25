import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  datos:any;
  constructor(private servicio: ServicesService) { }

  ngOnInit() {

    this.servicio.servicioPokemon().then(data =>{
      this.datos = data['pokemon'];
      console.log('estos son los datos de pokemon ' + JSON.stringify(this.datos));
    },error =>{
      console.log(error);
    });
  }

}
