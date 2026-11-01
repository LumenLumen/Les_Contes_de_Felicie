import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErredolaComponent } from './erredola.component';

describe('ErredolaComponent', () => {
  let component: ErredolaComponent;
  let fixture: ComponentFixture<ErredolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErredolaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ErredolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
