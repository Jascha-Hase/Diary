import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {StoryInfo} from '../../addstory/body/story-info';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  @Input() page: string = 'profilePage';
  @Output() sendStory = new EventEmitter<StoryInfo>();
  @Input() stories: StoryInfo[];

  constructor() {
  }

  receiveStory($event: StoryInfo){
    this.sendStory.emit($event);
  }
  ngOnInit() {
  }
}
