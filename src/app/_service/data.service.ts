import { Injectable, Inject } from '@angular/core';
import { StoryInfo } from '../addstory/body/story-info';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  stories: StoryInfo[] = [];

  constructor(){ 
    let stories = this.get();
  }

  add(story: StoryInfo){
    this.stories.push(story);
    this.setLocalStorageStories(this.stories);

  }
  get(){
    let localStorageItem = JSON.parse(localStorage.getItem('stories'));
    return localStorageItem == null ? [] : localStorageItem.stories;
  }

  delete(i: number){
    let localStorageItem = JSON.parse(localStorage.getItem('stories'));
    localStorageItem.stories.splice(i,1);
    localStorage.setItem('stories', JSON.stringify({stories: localStorageItem.stories}));

    console.log(JSON.parse(localStorage.getItem('stories')));
  }

  private setLocalStorageStories(stories: StoryInfo[]):void {
    localStorage.setItem('stories', JSON.stringify({stories: this.stories}));
  }
}