import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VashayaComponent } from './vashaya.component';

describe('VashayaComponent', () => {
  let component: VashayaComponent;
  let fixture: ComponentFixture<VashayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VashayaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VashayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
