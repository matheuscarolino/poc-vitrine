import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAplicacaoComponent } from './list-aplicacao.component';


describe('ListAplicacaoComponent', () => {
  let component: ListAplicacaoComponent;
  let fixture: ComponentFixture<ListAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
