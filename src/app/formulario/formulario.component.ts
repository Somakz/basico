import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  protected flag = false

  mostrar(s: string){
    console.log(s)
    this.flag = true
  }
}
