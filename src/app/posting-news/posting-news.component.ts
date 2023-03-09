import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  newsArr: any[] = [];
  mainParsedData: any;
  param = new Map();

  row: any = {
    newsId: 0,
    title: '',
    category: '',
    content: '',
  };

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
  ) {
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
    console.log('ini edit?',this.param);
    if (this.param.get('mode') == 'edit'){
      // let id: number
      // const currentRec =  this.newsArr.find(m=>m.newsId == id);
      // if (currentRec !== undefined) {
      //   this.newsForm = new FormGroup({
      //     newsId: new FormControl(currentRec.newsId),
      //     title: new FormControl(currentRec.title),
      //     category: new FormControl(currentRec.category),
      //     content: new FormControl(currentRec.content),
      //   });
      // }
      // let row: any
      // this.row = { ...row };
    }  
    this.loadData();
  }

  loadData(){
    const localData = localStorage.getItem('newsData');
    if (localData != null) {
      this.newsArr = JSON.parse(localData);
    }
  }

  save() {
    if(this.newsForm.controls['newsId'].value == 0) {
      const studObj = this.newsForm.value;
      studObj.newsId = this.newsArr.length + 1;
      this.newsArr.push(studObj);
    } else {
      const currentRec =  this.newsArr.find(m=>m.newsId == this.newsForm.controls['newsId'].value);
      if (currentRec !== undefined) {
        currentRec.title = this.newsForm.controls['title'].value;
        currentRec.category = this.newsForm.controls['category'].value;
        currentRec.content = this.newsForm.controls['content'].value;
      }
    }
    localStorage.setItem('newsData', JSON.stringify(this.newsArr));
    this.navigateTo('admin', {});
  }

  cancel(){
    if (this.param.get('mode') == 'edit'){
      let selectedData = this.param.get('selectedData')
      this.newsForm.patchValue({
        title: selectedData.judul,
        category: selectedData.kategori,
        content: selectedData.isi
      });
    } else {
      this.newsForm.patchValue({
        title: '',
        category: '',
        content: ''
      });
    }
  }

  exit(){
    this.navigateTo('admin', {})
  }

  navigateTo(url: string, data: any) {
    this.router.navigateByUrl(url, { state: { data } });
  }

}
