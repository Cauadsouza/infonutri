import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GastoCalorico } from './gasto-calorico';

@Component({
  selector: 'app-contagem-calorica',
  templateUrl: './contagem-calorica.component.html',
  styleUrls: ['./contagem-calorica.component.css']
})
export class ContagemCaloricaComponent implements OnInit {
  GCform: FormGroup;
  resultado: number;
  resultadoPI: string;
  resultadoIMC: number;
  resultadoID: string;
  displayC = 'displayC';
  displayPI = 'displayP';
  displayN = 'displayN';

  constructor(private fb: FormBuilder) { 
    this.resultado = 0;
    this.resultadoPI = "";
    this.resultadoIMC = 0;
    this.resultadoID = "";
    this.GCform = this.fb.group({
      peso: [0, [Validators.required, Validators.min(1), Validators.max(400)]],
      idade: [0, [Validators.required,Validators.min(1), Validators.max(120)]],
      genero: [0, [Validators.required,Validators.min(1), Validators.max(2)]],
      fator: [0, [Validators.required,Validators.min(1), Validators.max(3)]],
      altura: [0, [Validators.required,Validators.min(15), Validators.max(250)]]
    });
  }

  ngOnInit() {}

  Calcular() {
    let infos = this.GCform.value;
    let bol = new GastoCalorico(infos.peso, infos.genero, infos.idade, infos.fator, infos.altura);
    this.resultado = bol.calcular();
    this.displayC = 'flex';
    this.displayN = 'none';
    this.displayPI = 'none';
  }

  CalcularPI(){
    let infos = this.GCform.value;
    let bol = new GastoCalorico(infos.peso, infos.genero, infos.idade, infos.fator, infos.altura)
    this.resultadoIMC = bol.calcularPI();
    if(this.resultadoIMC == 2){
      this.resultadoPI = `Baseado no seu atual IMC, seu índice de massa corporal está adequado, portanto, é recomendado continuar com o atual consumo de calorias diarias.`
    }
    else if(this.resultadoIMC == 3){
      this.resultadoPI = `Baseado no seu atual IMC, seu índice de massa corporal está acima do adequado, portanto, é recomendado diminuir o consumo e aumentar o gasto de calorias diarias.`
    }
    else if(this.resultadoIMC == 1){
      this.resultadoPI = `Baseado no seu atual IMC, seu índice de massa corporal está abaixo do adequado, portanto, é recomendado aumentar o consumo e diminuir o gasto de calorias diarias.`
    }
    else{
      this.resultadoPI = ''
    }
    this.displayPI = 'flex';
    this.displayC = 'none';
    this.displayN = 'none';
  }

  CalcularID(){
    let infos = this.GCform.value;
    let bol = new GastoCalorico(infos.peso, infos.genero, infos.idade, infos.fator, infos.altura)
    this.resultadoIMC = bol.calcularPI();
    this.resultado = bol.calcular();
    this.displayN = 'flex';
    this.displayPI = 'none';
    this.displayC = 'none';
  }
  
}
