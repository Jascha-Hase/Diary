import { Component, OnInit, Input } from '@angular/core';
import { StoryInfo } from '../../addstory/body/story-info';
import { currentId } from 'async_hooks';
import { all } from 'q';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'diary-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  @Input() stories: StoryInfo[];

  delete(index){
    this.stories.splice(index,1);  
  }

  ngOnInit() {
    
  }



}

