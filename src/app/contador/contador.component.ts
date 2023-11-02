import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  protected numero: number = 0;

  public incrementar(){
    this.numero++
  }

  public decrementar(){
    this.numero--
  }
}
