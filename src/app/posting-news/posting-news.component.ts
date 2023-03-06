import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-posting-news',
  templateUrl: './posting-news.component.html',
  styleUrls: ['./posting-news.component.css']
})
export class PostingNewsComponent implements OnInit {
  postingNews = new FormGroup({
    title: new FormControl({ value: '', disabled: false },Validators.compose([Validators.required, Validators.maxLength(50)])),
    category: new FormControl({ value: '', disabled: false }, Validators.required),
    content: new FormControl({ value: '', disabled: false }, Validators.required),
  });
  mainParsedData: any;
  param = new Map();

  constructor() { this.mainParsedData = window.history.state; }

  ngOnInit(): void {
    this.param = this.mainParsedData.data;
  }

}
