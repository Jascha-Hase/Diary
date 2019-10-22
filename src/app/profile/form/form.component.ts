import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileInfo } from './profile-info';
import { Url } from 'url';

@Component({
  selector: 'profile-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private info: ProfileInfo;
  private saved: boolean = false;
  url: string | ArrayBuffer;
  
  constructor() {
    this.info = new ProfileInfo();
    console.log(this)
  }

  ngOnInit() {
  }

  log() {
    this.saved = true;
  }

  reset() {
    this.saved = false;
    this.info = new ProfileInfo();
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 

      reader.onload = (event) => { 
        this.url = event.target.result;
      }
    }
  }

}
