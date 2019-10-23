import { Component, ViewChild } from '@angular/core';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    @ViewChild('selector1' , null) selector1:SelectornumericoComponent;
    @ViewChild('selector2' , null) selector2:SelectornumericoComponent;

    public fijarSelector1(valor:number){
        this.selector1.fijar(valor);
    }

    public fijarSelector2(valor:number){
        this.selector2.fijar(valor);
    }

}
