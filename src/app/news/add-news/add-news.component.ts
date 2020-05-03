import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsInterface } from '../../core/models/news';
import { Router } from "@angular/router";
import { NewsService } from '../../core/services/news.service'
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  addNewsForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private addNewsService: NewsService,private router: Router) { }

  ngOnInit() {
    this.addNewsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(25)]],
      summary: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addNewsForm.controls; }

  onSubmit(frm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addNewsForm.invalid) {
      return;
    }
    var news: NewsInterface = {
      title: frm.value.title,
      description: frm.value.description,
      summary: frm.value.summary
    };
    this.addNewsService.addNews(news).subscribe((event: any) => {
      if (event != null) {
        swal.fire("Sucess!", "News Uploaded.", "success");
        this.router.navigate(["/viewnews"])
      }
      else {
        swal.fire("Error!", "Incorrect Credentials.", "error");
      }
    })
  }
}