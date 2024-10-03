import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.css']
})
export class TaskListingComponent {

      @Input() listing!:any[];
}
