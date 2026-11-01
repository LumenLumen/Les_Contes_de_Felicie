import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AzurComponent } from './azur.component';

describe('AzurComponent', () => {
  let component: AzurComponent;
  let fixture: ComponentFixture<AzurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzurComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AzurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
