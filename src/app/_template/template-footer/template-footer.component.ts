import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-template-footer',
  templateUrl: './template-footer.component.html',
  styleUrls: ['./template-footer.component.scss']
})
export class TemplateFooterComponent implements OnInit {
  
  @Output() showPage = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  sendMessage(page: string) {
    this.showPage.emit(page);
  }

}
