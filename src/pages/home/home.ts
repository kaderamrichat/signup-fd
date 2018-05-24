import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public formRegistration:any;
  formGroup: FormGroup;

  constructor(public navCtrl: NavController,public fb: FormBuilder,public alertCtrl: AlertController) {
    this.formRegistration = fb.group({
      "email" : ["", Validators.required],
      "password" : ["", Validators.required]
    })
  }

  
  validateForm(){
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: "Vous n'avez pas entré les même mots de passe",
      buttons: ['OK']
    });
    alert.present();
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
       ? null : {'mismatch': true};
 }
}
