import { Component, OnInit, Input } from '@angular/core';
import { StoryInfo } from '../../addstory/body/story-info';
import { DataService } from 'src/app/_service/data.service';

@Component({
  selector: 'diary-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  stories: StoryInfo[];

  constructor(private dataService: DataService){

  }

  getStorys(): void {
    this.stories = this.dataService.get();
  }

  remove(i: number){
    this.dataService.delete(i);
    let localStorageItem = JSON.parse(localStorage.getItem('stories'));
    this.stories = localStorageItem.stories as StoryInfo[];
  }

  ngOnInit() {
    this.getStorys();
  }

}

