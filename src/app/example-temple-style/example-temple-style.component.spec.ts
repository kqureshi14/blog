import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTempleStyleComponent } from './example-temple-style.component';

describe('ExampleTempleStyleComponent', () => {
  let component: ExampleTempleStyleComponent;
  let fixture: ComponentFixture<ExampleTempleStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleTempleStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleTempleStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
