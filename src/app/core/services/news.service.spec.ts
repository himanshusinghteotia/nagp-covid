import { TestBed } from '@angular/core/testing';
import { NewsService } from './news.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsInterface } from './../models/news'

describe('LocalService', () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test getNews()', () => {
    let result = service.getNews()
    expect(result.length).toBeGreaterThanOrEqual(2)
  });
});