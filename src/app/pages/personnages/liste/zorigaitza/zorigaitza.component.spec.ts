import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZorigaitzaComponent } from './zorigaitza.component';

describe('ZorigaitzaComponent', () => {
  let component: ZorigaitzaComponent;
  let fixture: ComponentFixture<ZorigaitzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZorigaitzaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ZorigaitzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
