import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  lista:Tarefa[] = [];


  constructor() { 
    this.lista.push(new Tarefa("Escovar Cabelo", false));
    this.lista.push(new Tarefa("Arrumar a Cama", true));
    this.lista.push(new Tarefa("Lavar o Carro", true));
    
  }

  ngOnInit(): void {
  }

}
