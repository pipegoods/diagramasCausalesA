import { Component } from '@angular/core';
import palabrasR from 'src/assets/palabrasR.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cadenaDePalabras = [];
  palabras: any = palabrasR;
  enunciadoText = '';
  procesarBAN = true;
  crearVariables = true;
  palabraFormada = "";
  listaVariables = [];
  matrizA = [];
  removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
 
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
  }

  procesarT () {
    this.enunciadoText = this.enunciadoText.toLocaleLowerCase();
    this.enunciadoText = this.enunciadoText.replace(/[.*,+?^${}():\n|[\]\\]/g, '');
    this.cadenaDePalabras = this.enunciadoText.split(" ");
    console.log(this.cadenaDePalabras);
    for (let index = 0; index < 2; index++) {
      this.cadenaDePalabras.forEach(element => { 
        this.palabras.palabras.forEach(p => { 
          if (element == p) { 
            this.removeItemFromArr( this.cadenaDePalabras, p );
            return; 
          } 
        });
      });
    }
        
    console.log(this.cadenaDePalabras);
    this.procesarBAN = false;
  }

  agregarPalabra (p) {
    this.palabraFormada = this.palabraFormada + " " + p;
  }

  agregarVariable() {
    this.listaVariables.push(this.palabraFormada);
    this.palabraFormada = "";
  }

  crearMatrizA () {
    this
    this.listaVariables.forEach(element => {
      console.log(element);
      
      this.matrizA[element] = [];
    });
    this.listaVariables.forEach(element => {
      this.listaVariables.forEach(e => {
        this.matrizA[element].push({
          var: e,
          inc: "+"
        })
      });
    });
    console.log(this.matrizA);
    
    this.crearVariables = false;
  }


}
