import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AplicacaoComponent } from './components/aplicacao/aplicacao.component';
import { AplicacaoService } from './service/aplicacao.service';
import { ListAplicacaoComponent } from './components/list-aplicacao/list-aplicacao.component';

@NgModule({
  declarations: [
    AppComponent,
    AplicacaoComponent,
    ListAplicacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AplicacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
