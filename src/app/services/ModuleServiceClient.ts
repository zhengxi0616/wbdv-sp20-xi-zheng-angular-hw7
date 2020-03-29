import {Injectable} from '@angular/core';

@Injectable()

export class ModuleServiceClient {
  findModulesForCourse = (courseId) =>
    fetch(`wbdv-generic-server.herokuapp.com/api/001493040/courses/${courseId}/modules`)
      .then(response => response.json())
}
