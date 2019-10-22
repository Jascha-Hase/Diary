import { Component } from '@angular/core';
import { StoryInfo } from './addstory/body/story-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstApp';
  page: string = 'profilePage';

  stories: StoryInfo[]=[];

  receiveStory($event: StoryInfo){
    this.stories.push($event);
    console.log(this.stories);
  }

  receiveMessage($event: string) {
    this.page = $event;
  }

}
