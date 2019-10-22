import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { StoryInfo } from './story-info';
import { DataService } from '../../_service/data.service';


@Component({
  selector: 'addstory-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {


  private infostory: StoryInfo;

  constructor(private dataService: DataService) {
    this.infostory = new StoryInfo();
    console.log(this)
  }

  ngOnInit() {
  }

  enter() {
    console.log(this.infostory);
    this.dataService.add(this.infostory);
    this.infostory = new StoryInfo();
  }

}
