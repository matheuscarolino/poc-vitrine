import { Component, OnInit } from '@angular/core';
import { AplicacaoService } from 'src/app/service/aplicacao.service';
import { IAplicacao } from 'src/app/interfaces/Aplicacao';

@Component({
  selector: 'app-aplicacao',
  templateUrl: './aplicacao.component.html',
  styleUrls: ['./aplicacao.component.css']
})
export class AplicacaoComponent implements OnInit {

  aplicacoes: Array<IAplicacao>;
  
  constructor(private aplicacaoService: AplicacaoService) { }

  ngOnInit(): void {
    this.listar()
    
  }

  listar() {
    this.aplicacaoService.listar().subscribe(
      ap => {
        this.aplicacoes = ap
      }
    )
    
  }

}
