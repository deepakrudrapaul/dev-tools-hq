import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDecodeComponent } from './image-decode.component';

describe('ImageDecodeComponent', () => {
  let component: ImageDecodeComponent;
  let fixture: ComponentFixture<ImageDecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageDecodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
