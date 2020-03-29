import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseTableComponent } from './course-table/course-table.component';


const routes: Routes = [
  {path: 'table/courses', component: CourseTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
