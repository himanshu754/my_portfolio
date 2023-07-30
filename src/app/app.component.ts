import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Abhishek-Kumar';
  selectedTab = 1;
  isNavbarOpen:boolean = false
  showSpinner : boolean = true
  selectedSection: string = 'home';

   ngOnInit() {
    AOS.init();
    AOS.refresh();
    setTimeout(()=>{
      this.showSpinner = false
    },1000)
  }

  redirectToUrl(url:any){
    window.open(url, '_blank');
  }

  toggleNavbar(){
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  
  scrollToSection(sectionId: string): void {
    this.selectedSection = sectionId
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openMail(){
    window.location.href = 'mailto:hmishra8840@gmail.com';
  }
}
