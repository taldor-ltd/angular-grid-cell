import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tld-test-me',
  templateUrl: './test-me.component.html',
  styleUrls: ['./test-me.component.css']
})
export class TestMeComponent implements OnInit {

  @Input() year: any;

  constructor() { }

  ngOnInit() {
    console.log(this.year);
  }

}
