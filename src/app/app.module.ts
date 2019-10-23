import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './header/template-header/template-header.component';
import { FormComponent } from './profile/form/form.component';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './addstory/body/body.component';
import { EntriesComponent } from './diary/entries/entries.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { DataService } from './_service/data.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    FormComponent,
    BodyComponent,
    EntriesComponent,
    routingComponents,
  ],
  providers: [DataService],
  bootstrap: [AppComponent,]
})
export class AppModule {
  
 }
