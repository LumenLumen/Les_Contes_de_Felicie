import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CotyledonComponent } from './cotyledon.component';

describe('CotyledonComponent', () => {
  let component: CotyledonComponent;
  let fixture: ComponentFixture<CotyledonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotyledonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CotyledonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
