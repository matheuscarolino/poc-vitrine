import { Component, OnInit, Input } from '@angular/core';
import { AplicacaoService } from 'src/app/service/aplicacao.service';
import { IAplicacao } from 'src/app/interfaces/Aplicacao';

@Component({
  selector: 'app-list-aplicacao',
  templateUrl: './list-aplicacao.component.html',
  styleUrls: ['./list-aplicacao.component.css']
})
export class ListAplicacaoComponent implements OnInit {

  @Input() data: Array<IAplicacao>;

  constructor() { }

  ngOnInit(): void {
  }

}
