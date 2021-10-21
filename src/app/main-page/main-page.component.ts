import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent  {

  // stars: number[] = [1, 2, 3, 4, 5];
  // selectedValue: number = 0;
  
  // countStar(star: any) {
  //     this.selectedValue = star;
  //   }
  
  // addClass(star: any) {
  //    console.log("star", star); 
  //    console.log("selectedvalue", this.selectedValue);
  //    let ab = "";
  //    for (let i = 0; i < star; i++) {
  //      console.log("star i", star);
  //      ab = "starId" + i;
  //      document.getElementById(ab)!.classList.add("selected");
  //    }
  // }
  // removeClass(star: any) {
  //    console.log("removestar", star);
  //    let ab = "";
  //   for (let i = star-1; i >= this.selectedValue; i--) {
  //      console.log("star i", star);
  //      ab = "starId" + i;
  //      document.getElementById(ab)!.classList.remove("selected");
  //    }
  // }
}
