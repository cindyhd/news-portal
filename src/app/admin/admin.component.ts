import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  newsArray: any [] = [];
  news: any = {
    postId: 0,
    title: '',
    content:  '',
    image: '',
    category: '',
    publishDate: Date
  }

  constructor() { }

  ngOnInit(): void {
  }

  onAddNews(){
    const notNull = document.getElementById('newsModel');
    if (notNull != null) {
      notNull.style.display = 'block';
    }
  }

  onCloseModel(){
    const notNull = document.getElementById('newsModel');
    if (notNull != null) {
      notNull.style.display = 'none';
    }
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
