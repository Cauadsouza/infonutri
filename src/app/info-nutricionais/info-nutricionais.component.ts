import { Component, OnInit } from '@angular/core';
import { LA } from '../Serviços/lista-alimentos';
import { AlimentosService } from '../Serviços/alimentos.service';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-info-nutricionais',
  templateUrl: './info-nutricionais.component.html',
  styleUrls: ['./info-nutricionais.component.css']
})

export class InfoNutricionaisComponent implements OnInit {
  alimento = {} as LA;
  bebidas: LA[] = [];
  carnes: LA[] = [];
  doces: LA[] = [];
  frutas: LA[] = [];
  vegetais: LA[] = [];
  alimentos: LA[] = [];
  displayB = 'card-b'
  displayC = 'card-c'
  displayD = 'card-d'
  displayF = 'card-f'
  displayV = 'card-v'
  displayP ='card-p'
  displayAll = 'card-body'
  pesquisa = new FormControl("");
  
  constructor(private alimentosService:AlimentosService) {}
  
  /*API CONECTION*/

  ngOnInit() {
    this.getBebidas();
    this.getCarnes();
    this.getVariados();
    this.getFrutas();
    this.getVegetais();
    this.getAlimentos();
  }

  Pesquisa(){
    return this.pesquisa.value;
  }

  getBebidas() {
    this.alimentosService.getBebidas().subscribe((bebidas: LA[]) => {
      this.bebidas = bebidas;
    });
  }
  getCarnes() {
    this.alimentosService.getCarnes().subscribe((carnes: LA[]) => {
      this.carnes = carnes;
    });
  }

  getVariados() {
    this.alimentosService.getVariados().subscribe((doces: LA[]) => {
      this.doces = doces;
    });
  }

  getFrutas() {
    this.alimentosService.getFrutas().subscribe((frutas: LA[]) => {
      this.frutas = frutas;
    });
  }

  getVegetais() {
    this.alimentosService.getVegetais().subscribe((vegetais: LA[]) => {
      this.vegetais = vegetais;
    });
  }

  getAlimentos() {
    this.alimentosService.getAlimentos().subscribe((alimentos: LA[]) => {
      this.alimentos = alimentos;
    });
  }

  /*EXIBIR TABELA*/


  ExibirB(){
    this.displayB='flex';
    this.displayC='none';
    this.displayD='none';
    this.displayF='none';
    this.displayV='none';
  }

  ExibirC(){
    this.displayC='flex'
    this.displayB='none';
    this.displayD='none';
    this.displayF='none';
    this.displayV='none';
  }

  ExibirD(){
    this.displayD='flex'
    this.displayB='none';
    this.displayC='none';
    this.displayF='none';
    this.displayV='none';
  }

  ExibirF(){
    this.displayF='flex'
    this.displayC='none';
    this.displayB='none';
    this.displayD='none';
    this.displayV='none';
  }

  ExibirV(){
    this.displayV='flex'
    this.displayB='none';
    this.displayC='none';
    this.displayD='none';
    this.displayF='none';
  }


}
