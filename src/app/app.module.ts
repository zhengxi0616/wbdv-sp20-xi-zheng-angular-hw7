import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseServiceClient } from './services/CourseServiceClient';
import { LessonServiceClient} from './services/LessonServiceClient';
import { ModuleServiceClient} from './services/ModuleServiceClient';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CourseServiceClient, LessonServiceClient, ModuleServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
