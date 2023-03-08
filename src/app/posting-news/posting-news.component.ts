import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-posting-news',
  templateUrl: './posting-news.component.html',
  styleUrls: ['./posting-news.component.css']
})
export class PostingNewsComponent implements OnInit {
  // newsForm = new FormGroup({
  //   id: new FormControl({ value: '', disabled: false }, Validators.required),
  //   title: new FormControl({ value: '', disabled: false },Validators.compose([Validators.required, Validators.maxLength(50)])),
  //   category: new FormControl({ value: '', disabled: false }, Validators.required),
  //   content: new FormControl({ value: '', disabled: false }, Validators.required),
  //   publishDate: new FormControl({ value: new Date(), disabled: false }, Validators.required),
  // });
  newsForm: FormGroup;
  mainParsedData: any;
  param = new Map();

  constructor() {
    this.newsForm = new FormGroup({
      newsId: new FormControl(0),
      title: new FormControl(""),
      category: new FormControl(""),
      content: new FormControl(""),
    });
    this.mainParsedData = window.history.state; 
  }

  ngOnInit(): void {
    this.param = this.mainParsedData.data;
    
  }

  save() {

  }

}
