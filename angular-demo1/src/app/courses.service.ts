import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
    courses = ["Course1", "Course2", "Course3"];

    constructor() { }

    getCourses(): string[] {
        return this.courses;
    }
    
    addCourse(course) {
        this.courses.push(course);
    }
}
