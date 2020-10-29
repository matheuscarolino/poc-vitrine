import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const root = environment.apiUrl;

@Injectable()
export class AplicacaoService {

  constructor(private http: HttpClient) {
  }

  listar() {
        return this.http.get<any[]>(`${root}aplicacoes`)
  }

}
