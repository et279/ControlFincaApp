import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }
  show: boolean = true; // property to know if the complete header is shown or not.

  contHeader: HTMLElement | null = null; // Declare as null initially
  contDashboard: HTMLElement | null = null; // Declare as null initially
  YNHeader(){
    this.contHeader = document.querySelector("#contHeader");
    this.contDashboard = document.querySelector("#contBodyDahsboard");
    if (this.contHeader && this.contHeader.classList.contains('peque') && this.contDashboard && this.contDashboard.classList.contains('peque')) {
      console.log(this.contDashboard.classList.contains('peque'),this.contHeader.classList.contains('peque'), this.show);
      this.contDashboard.classList.remove('peque');
      this.contHeader.classList.remove('peque');
    } else if(this.contHeader && !this.contHeader.classList.contains('peque') && this.contDashboard && !this.contDashboard.classList.contains('peque')){
      console.log(this.contDashboard.classList.contains('peque'),false, this.show); // Assuming no 'peque' class initially
      this.contHeader.classList.add('peque');
      this.contDashboard?.classList.add('peque');
    }
  };
  
  
  
  
  
}


