import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})
export class SelectornumericoComponent implements OnInit {

  valorVariable:number;
  @Input() maximo:number;
  @Input() minimo:number;

  ngOnInit() {
    this.valorVariable = this.minimo;
  }

  public incrementar(){
      if(this.valorVariable < this.maximo){
          this.valorVariable++;
      }
  }

  public decrementar(){
      if(this.valorVariable > this.minimo){
          this.valorVariable--;
      }
  }

  public fijar(numeroFijo:number){
      this.valorVariable = numeroFijo;
  }

}