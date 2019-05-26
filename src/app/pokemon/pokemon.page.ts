import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  datos:any;
  constructor(private servicio: ServicesService, private router: Router, private loadingController:LoadingController) {

   }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 2000
    });
    

    this.servicio.servicioPokemon().then(data =>{
      loading.present();
      this.datos = data['pokemon'];
      console.log('estos son los datos de pokemon ' + JSON.stringify(this.datos));
      loading.dismiss();
    },error =>{
      loading.dismiss();
      console.log(error);
    });
  }


  pokemonDetails(i){

    console.log('este es el dato que trae '+ JSON.stringify(i));
    
    const indice = i;
    console.log('datos con indice'+  JSON.stringify(i));
    console.log(indice)
    let navigationEx: NavigationExtras = {
      queryParams: {
        pokemonId: JSON.stringify(i)
      }
    };
    console.log('este es el que envia ' + JSON.stringify(navigationEx));
    this.router.navigate(['pokemon-details'], navigationEx); 
  }

}
