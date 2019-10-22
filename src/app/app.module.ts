import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateFooterComponent } from './_template/template-footer/template-footer.component';
import { TemplateFormComponent } from './_template/template-form/template-form.component';
import { FormComponent } from './profile/form/form.component';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './addstory/body/body.component';
import { EntriesComponent } from './diary/entries/entries.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    TemplateFooterComponent,
    TemplateFormComponent,
    FormComponent,
    BodyComponent,
    EntriesComponent,
    routingComponents,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule {
  
 }
