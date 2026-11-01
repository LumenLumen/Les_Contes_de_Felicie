import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascheraComponent } from './maschera.component';

describe('MascheraComponent', () => {
  let component: MascheraComponent;
  let fixture: ComponentFixture<MascheraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascheraComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MascheraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
