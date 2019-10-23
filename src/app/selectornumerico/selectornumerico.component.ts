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

  ngOnInit() {
  }

  incrementar(){
      if(this.valorVariable >= this.maximo){
          this.valorVariable++;
      }
  }

  decrementar(){
      if(this.valorVariable <= this.minimo){
          this.valorVariable--;
      }
  }

  fijar(numeroFijo:number){
      this.valorVariable = numeroFijo;
  }

}