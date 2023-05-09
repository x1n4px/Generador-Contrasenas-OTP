import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

  }
  email: string = '';
  codigo!: string;
  d1!: number;
  d2!: number;
  d3!: number;
  d4!: number;

  generador() {
    this.codigo = this.generarClave();
    console.log(this.email + ' ' + this.codigo);


  }

  generarClave(): string {
    const min = 1000; // El valor mínimo que puede tomar el número aleatorio
    const max = 9999; // El valor máximo que puede tomar el número aleatorio
    const codigo = Math.floor(Math.random() * (max - min + 1)) + min; // Genera un número aleatorio entre min y max
    return codigo.toString(); // Convierte el número a string y lo devuelve
  }

  comparador() {
    let code = (this.d1.toString())+(this.d2.toString())+(this.d3.toString())+(this.d4.toString());
    console.log(code);
    if(code === this.codigo){
      console.log('Codigo correcto!');
    }else{
      console.log('Codigo incorrecto!');
    }
   }

}
