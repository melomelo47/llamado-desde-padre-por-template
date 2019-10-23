import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})
export class SelectornumericoComponent implements OnInit {

  valorVariable:number;
  maximo:number;
  minimo:number;

  ngOnInit() {}

  public incrementar(){
      if(this.valorVariable >= this.maximo){
          this.valorVariable++;
      }
  }

  public decrementar(){
      if(this.valorVariable <= this.minimo){
          this.valorVariable--;
      }
  }

  public fijar(numeroFijo:number){
      this.valorVariable = numeroFijo;
  }

}