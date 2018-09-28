import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListareasComponent } from './listareas.component';
import { TareasSimpleComponent } from '../tareas-simple/tareas-simple.component';
import { FormsModule } from '@angular/forms';

describe('ListareasComponent', () => {
  let component: ListareasComponent;
  let fixture: ComponentFixture<ListareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListareasComponent,
        TareasSimpleComponent
       ],
       imports: [
         FormsModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
