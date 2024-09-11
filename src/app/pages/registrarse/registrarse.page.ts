import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  //validad los campos de registrarse
  data:any={
    nombreUsuario:"",
    contrasena:"",
    conContrasena:"",
    correo:""
  };
  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }
  aceptar(){
    if(this.data.nombreUsuario !="" && this.data.contrasena !="" && this.data.conContrasena !="" && this.data.correo !=""){
      this.presentAlert("Felicitaciones", "¡Gracias por registrarse!");
    }else{
      this.presentAlert("Error","Por favor rellene todos los campos");
    }
  }
  async presentAlert(mensajeHeader:string,mensaje:string) {
    const alert = await this.alertController.create({
      header: mensajeHeader,
      message: mensaje,
      buttons: ['Action'],
    });

    await alert.present();
  }
}
