import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TxikiComponent } from './txiki.component';

describe('TxikiComponent', () => {
  let component: TxikiComponent;
  let fixture: ComponentFixture<TxikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxikiComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TxikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
