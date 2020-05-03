import { Injectable } from '@angular/core';
import { NewsInterface } from '../models/news'
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: NewsInterface[] = [{
    "title": "New cases in Noida",
    "description": "Found 20 more cases in sector-8. All were from the same society. Society sealed by the authority and all people samples has been taken for further testing.",
    "summary": "This make Nodia Red Zone."
  }, {
    "title": "Cases recovered in Meerut",
    "description": "All people in Meerut City Hospital are now healty and all of them got discharge.",
    "summary": "Meerut is now in Orange Zone."
  }];

  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  addNews(newsValue: NewsInterface) {
    this.news.unshift(newsValue)
    return this.http.post(this.BASE_URL + "/news", newsValue);
  }

  getNews() {
    return this.news
  }

}
