import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';


const routes: Routes = [
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'table/courses/:courseId', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
