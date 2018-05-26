import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Pipe, PipeTransform } from '@angular/core';

import { LandingPage } from '../landing/landing';
import { BtnRegisterComponent } from '../../components/btn-register/btn-register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  textEmail = "Create your email";
  ErrorTitle:string = "The field email is required";
  formRegistration:FormGroup;
  email:string = "";
  password:string = "";
  passwordConfirm:string = "";
  //emailRegex:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/$";


  constructor(public navCtrl: NavController,public fb: FormBuilder,public alertCtrl: AlertController, public navParams:NavParams) {
    this.formRegistration = fb.group({
      "email" : ["", [Validators.required,Validators.email]],
      // "email" : ["", Validators.compose([Validators.required,Validators.pattern('this.emailRegex')])],
      "password" : ["123456",  Validators.compose([Validators.required,Validators.minLength(6)])],
      "passwordConfirm" : ["123456", Validators.compose([Validators.required,Validators.minLength(6)])]
    })
  }

  validateForm(post){
    // this.email    = post.email;
    this.password = post.password;
    this.passwordConfirm = post.passwordConfirm;
     if(this.passwordConfirm === this.password){
      //console.log(this.formRegistration)
      this.navCtrl.push(LandingPage, {
        email    : post.email,
        password : post.password
      });
    } else {
      this.ErrorMessage("Passwords must be the identical");
    }
  }
  
  ErrorMessage(msg){
    let alert = this.alertCtrl.create({
      title: "Flitdesk",
      subTitle: msg,
      buttons: ["OK"]
    });
    alert.present();
  }

 ngOnInit(){
 }
}
