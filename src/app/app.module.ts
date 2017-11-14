import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ServiceCall } from './service-call/service-call.service';
import { SelectorsTemplateComponent } from './selectors-template/selectors-template.component';
import { SearchTemplateComponent } from './search-template/search-template.component';
import { MainTemplateComponent } from './main-template/main-template.component';

@NgModule({
  imports: [ 
  	BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule 
  ],
  declarations: [ 
  	AppComponent,
    MainTemplateComponent,
    SelectorsTemplateComponent,
    SearchTemplateComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ ServiceCall ]
})

export class AppModule { }
