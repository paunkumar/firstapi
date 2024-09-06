import { Component } from '@angular/core';
import { APICommon } from 'src/app/interface/commonapi.interface';
import { CourseListService } from 'src/app/service/course-list.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {
  constructor(private course:CourseListService){

  }
  ngOnInit(){
    this.getCourseList();
  }
  getCourseList(){
    this.course.getCourse().subscribe({
      next:(response:APICommon)=>{
        console.log(response)
      }
    })
  }
}
