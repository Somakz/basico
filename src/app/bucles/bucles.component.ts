import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas: Persona[] = [
    {name: "Soma",
  year: 28},
    {name: "Cruz",
  year: 40},
    {name: "Rafael",
  year: 30},
    {name: "Jesus",
  year: 33}
  ]
}
