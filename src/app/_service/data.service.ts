import { Injectable } from '@angular/core';
import { StoryInfo } from '../addstory/body/story-info';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  stories: StoryInfo[] = [];

  add(story: StoryInfo){
    this.stories.push(story);
    console.log(story);
  }
  get(){
    return this.stories;
  }

  delete(index){
    this.stories.splice(index,1);  
  }

  constructor() { }
}
