import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import { NewsInterface } from '../../core/models/news'

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  constructor(private newsService: NewsService) {
  }

  news: NewsInterface[];

  updateNews() {
    this.news = this.newsService.getNews()
  }

  ngOnInit() {
    this.updateNews()
  }

}
