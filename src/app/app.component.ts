import { Component, OnDestroy, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit,AfterViewInit{
  
  showWelcomeBox=true;
   @ViewChild('loadEmployee') loadEmployee:ElementRef;
   ngOnInit(){
   }
  
   ngAfterViewInit(): void {
    fromEvent(this.loadEmployee.nativeElement,'click').subscribe(res=>{
      this.showWelcomeBox=false;
    })
  }

}
