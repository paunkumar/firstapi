import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.css']
})
export class DashboardChildComponent {
 @Input() msgFromParent:string= '';
 @Output() changes= new EventEmitter();
 msgToParent(value:any){
  this.changes.emit(value);
 }
}
