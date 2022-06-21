import { Component, OnInit } from '@angular/core';
import { PageFlip } from 'page-flip';

@Component({
  selector: 'app-pageflip',
  templateUrl: './pageflip.component.html',
  styleUrls: ['./pageflip.component.scss']
})
export class PageflipComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {



    const pageFlip = new PageFlip(document.getElementById('book')!, {
      width: 600, 
      height: 800,
  });
  
  pageFlip.loadFromHTML(document.querySelectorAll('.my-page')) ;

document.addEventListener('DOMContentLoaded', function() {

  const pageFlip = new PageFlip(
      document.getElementById("Bbook")!,
      {
          width: 550, // base page width
          height: 733, // base page height

          //  size: "stretch",
          // set threshold values:
          minWidth: 315,
          maxWidth: 1000,
          minHeight: 420,
          maxHeight: 1350,

          maxShadowOpacity: 0.5, // Half shadow intensity
          showCover: true,
          mobileScrollSupport: false // disable content scrolling on mobile devices
      }
  );

  // load pages
  pageFlip.loadFromHTML(document.querySelectorAll(".page")) ;

  const box = document.querySelector(".page-total") as HTMLElement | null

  if(box != null){
    box.innerText = pageFlip.getPageCount().toString() ;
  }

  const box1 = document.querySelector(".page-orientation") as HTMLElement | null
  if(box1 != null){
    box1.innerText = pageFlip.getOrientation();
  }

   document.querySelector(".btn-prev")?.addEventListener("click", () => {
       pageFlip.flipPrev(); // Turn to the previous page (with animation)
   });


   document.querySelector(".btn-next")?.addEventListener("click", () => {
       pageFlip.flipNext(); // Turn to the next page (with animation)
   });

   // triggered by page turning


  //  pageFlip.on("flip", (e) => {
  //      document.querySelector(".page-current") as HTMLElement | null.innerText = e.data + 1;
  //  });
  const box3 = document.querySelector(".page-current") as HTMLElement | null
 
    if(box3 != null){
      pageFlip.on("flip", (e) => { 
      box3.innerText = e.data.toString() + 1;
    });
   }
  

  // // triggered when the state of the book changes
  // pageFlip.on("changeState", (e) => {
  //     document.querySelector(".page-state") as HTMLElement | null.innerText = e.data;
  // });

  // // triggered when page orientation changes
  // pageFlip.on("changeOrientation", (e) => {
  //     document.querySelector(".page-orientation") as HTMLElement | null.innerText = e.data;
  // });
});
}
}
