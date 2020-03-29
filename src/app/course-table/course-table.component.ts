import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  constructor(private service: CourseServiceClient) { }
  courses: [];
  ngOnInit(): void {
    this.service.findAllCourses().then(courses => this.courses = courses );
  }

}
