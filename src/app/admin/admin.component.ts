import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  newsArr: any [] = [];
  // news: any = {
  //   postId: 0,
  //   title: '',
  //   content:  '',
  //   image: '',
  //   category: '',
  //   publishDate: Date
  // }

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const localData = localStorage.getItem('newsData');
    if (localData != null) {
      this.newsArr = JSON.parse(localData);
    }
  }

  onAddNews(){
    // const notNull = document.getElementById('newsModel');
    // if (notNull != null) {
    //   notNull.style.display = 'block';
    // }
    const formParams = new Map();
    formParams.set('mode', 'add')
    this.navigateTo('posting-news', formParams);
  }

  navigateTo(url: string, data: any) {
    this.router.navigateByUrl(url, { state: { data } });
  }

  edit(id: number) {

  }

  delete(id: number) {

  }

  incomingfile(files: FileList) {
    // this.fileToUpload = files.item(0);
    // if (
    //   this.fileToUpload.size > 500000 ||
    //   (!this.fileToUpload.name.endsWith('.png') &&
    //     !this.fileToUpload.name.endsWith('.jpg') &&
    //     !this.fileToUpload.name.endsWith('.jpeg') &&
    //     !this.fileToUpload.name.endsWith('.bmp'))
    // ) {
    //   this.isValidForm = false;
    //   this.fileToUpload = null;
    //   this.errorImage = true;
    //   this.errorImageMessage= 'File harus berjenis gambar png/jpg/jpeg/bmp dengan ukuran maksimal 500kb';
    // } else {
    //   this.errorImage = false;
    //   this.errorImageMessage=null;
    //   const reader = new FileReader();
    //   reader.readAsDataURL(this.fileToUpload);
    //   reader.onload = async () => {
    //     let encoded = reader.result.toString().replace(/^data:(.*;base64,)?/, '');
    //     if (encoded.length % 4 > 0) {
    //       encoded += '='.repeat(4 - (encoded.length % 4));
    //     }
    //     this.selectedImage = encoded;
    //   };
    // }
  }

}
