import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private loadingControler:LoadingController) {}



  async pokemon(){

    const loading = await this.loadingControler.create({
      message: 'Cargando...',
      duration: 2000
    });
    this.router.navigate(['/pokemon']);
    await loading.present();
    await loading.dismiss();

  }

  async registro(){
    const loading = await this.loadingControler.create({
      message: 'Cargando...',
      duration: 2000
    });
    console.log('Loading dismissed!'); 
    this.router.navigate(['/registro']);
    await loading.present();

    await loading.dismiss();
  }
}
