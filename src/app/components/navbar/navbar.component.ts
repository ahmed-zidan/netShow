import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navBg:any;
  @HostListener("window:scroll") scrollover(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ){
      this.navBg = {
        "background-color": "#000000"
      }
    }else{
      this.navBg = {}
    }
  }
}
