import { Component } from '@angular/core';
import { OTPServiceService } from './service/otpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private OTPService: OTPServiceService) {

  }
  email: string = '';
  codigo!: string;
  d1!: number;
  d2!: number;
  d3!: number;
  d4!: number;
  mostrarAnimacion: boolean = false;

  generador() {
    this.codigo = this.generarClave();
 
    
    this.OTPService.changePassword(this.email, this.codigo).subscribe(
      data =>{
        console.log('Contraseña enviada correctamente');
      },
      (error) => {
        console.log('No se ha podido enviar');
      }
    );
    
  }

  generarClave(): string {
    const min = 1000; // El valor mínimo que puede tomar el número aleatorio
    const max = 9999; // El valor máximo que puede tomar el número aleatorio
    const codigo = Math.floor(Math.random() * (max - min + 1)) + min; // Genera un número aleatorio entre min y max
    return codigo.toString(); // Convierte el número a string y lo devuelve
  }

  comparador() {
    let code = (this.d1.toString())+(this.d2.toString())+(this.d3.toString())+(this.d4.toString());
    if(code === this.codigo){
      console.log('Codigo correcto!');
      this.mostrarAnimacion = true;
    }else{
      console.log('Codigo incorrecto!');
      this.mostrarAnimacion = false;
    }
   }

}
