import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { StoryInfo} from './story-info';


@Component({
  selector: 'addstory-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Output() sendStory = new EventEmitter<StoryInfo>();


  private infostory: StoryInfo;

  constructor() { 
    this.infostory = new StoryInfo();
    console.log(this)
  }

  ngOnInit() {
  }

  enter() {
    console.log(this.infostory);
    this.sendStory.emit(this.infostory);
    this.infostory = new StoryInfo();
}

}
