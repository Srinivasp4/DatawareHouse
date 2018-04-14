import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  //panelOpenState: boolean = false;

  constructor() {   
    
  }

  ngOnInit() {
  }
  setheight(){
    document.getElementById('parametersPanel').style.height= '48px !important';
  }

}
