import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingNewsComponent } from './posting-news.component';

describe('PostingNewsComponent', () => {
  let component: PostingNewsComponent;
  let fixture: ComponentFixture<PostingNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostingNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostingNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
