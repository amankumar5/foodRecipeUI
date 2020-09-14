import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marko',
  templateUrl: './marko.component.html',
  styleUrls: ['./marko.component.css']
})
export class MarkoComponent implements OnInit {
  @Input('value') processing:Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
