import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Task} from '../../Task'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  text !: string ; 
  day !: string ; 
  reminder : boolean  = false ; 
  showAddTask !:boolean ; 
  subscription : Subscription ; 

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();  ; 
  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showAddTask = value)); }

  ngOnInit(): void {
  }
  onSubmit(){
    if (!this.text){alert('please add a task')}
    const newTask = {
      text : this.text,
      day : this.day,
      reminder: this.reminder,
    };
    this.onAddTask.emit(newTask) ;

    this.text =''; 
    this.day =''; 
    this.reminder =false; 
  }

  

}
