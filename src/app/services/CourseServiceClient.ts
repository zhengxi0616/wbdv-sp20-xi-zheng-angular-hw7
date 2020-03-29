import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001493040/courses')
      .then(response => response.json())
  findCourseById = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001493040/courses/${courseId}`)
      .then(response => response.json())

  findLessonsForModule = (moduleId) =>
    fetch(`wbdv-generic-server.herokuapp.com/api/001493040/courses/${courseId}/modules`)
      .then(response => response.json())
}
