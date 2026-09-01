import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncadreComponent } from './encadre.component';

describe('EncadreComponent', () => {
  let component: EncadreComponent;
  let fixture: ComponentFixture<EncadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncadreComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EncadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
