import { Component, Input } from '@angular/core';

/**
 * Generated class for the BtnRegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'btn-register',
  templateUrl: 'btn-register.html'
})
export class BtnRegisterComponent {

@Input('titleBtn') titleBtn:string;
@Input('disabled') disabled:boolean = false;

  constructor() {
  }
  
  ngOnInit(){
    console.log("AQW >",this.disabled);
  }

}
