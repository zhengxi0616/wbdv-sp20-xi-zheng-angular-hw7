import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseServiceClient } from './services/CourseServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CourseServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
