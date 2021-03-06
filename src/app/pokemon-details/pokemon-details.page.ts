import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  arg:any;

  constructor(private activedRoter: ActivatedRoute, private router: Router, private loadingControler:LoadingController ) {
    this.activedRoter.queryParams.subscribe(params =>{
      if(params && params.pokemonId){
        this.arg = JSON.parse(params.pokemonId);
        console.log(this.arg);
      }
    });
   }

  ngOnInit() {
   
  }

}
