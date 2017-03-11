/*Practica 04 Autores: Francisco Javier Sosa  y alejandro rivas Hdz

import { Component } from '@angular/core';
import {FormControl,Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   public no1: any="";
   public no2: any="";
   public Resultado: any= {text: "0"}
   public tmp: number=0;
   public estado: any ={text: ""}
  private Formulario : FormGroup;
  constructor(public navCtrl:NavController,private formBuilder: FormBuilder) {
  
  this.Formulario = this.formBuilder.group({

      no1: ['', Validators.required],
      no2: ['', Validators.required],
      estado: ['',]

  });
  this.no1 = this.Formulario.controls['no1'];
  
  this.no2 = this.Formulario.controls['no2'];
  this.estado= this.Formulario.controls['estado.value'];
  
  }


suma(){
  console.log(this.estado.value);
this.tmp= parseInt(this.no1.value) + parseInt(this.no2.value);
 this.Resultado.text= this.tmp.toString();
 
}
resta(){
this.tmp= parseInt(this.no1.value) - parseInt(this.no2.value);
 this.Resultado.text= this.tmp.toString();
}
division(){
this.tmp= parseInt(this.no1.value) / parseInt(this.no2.value);
 this.Resultado.text= this.tmp.toString();
}
multiplicacion(){
this.tmp= parseInt(this.no1.value) * parseInt(this.no2.value);
 this.Resultado.text= this.tmp.toString();
}
modulo(){
this.tmp= parseInt(this.no1.value) % parseInt(this.no2.value);
 this.Resultado.text= this.tmp.toString();
}
}
