import { AfterViewInit, Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AutoGrowDirective } from '../auto-grow.directive';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CoursesService],
  directives: [AutoGrowDirective]
})
export class CoursesComponent implements OnInit {
  
  title = "The title of the course page";
  courses;

  constructor(private elementRef:ElementRef, public coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('button').addEventListener('click', this.onAddCourse.bind(this));
  }

  ngOnInit() {
  }
  
  onAddCourse() {
    this.coursesService.addCourse(this.elementRef.nativeElement.querySelector('input').value);
    this.elementRef.nativeElement.querySelector('input').value = "";
  }

}
