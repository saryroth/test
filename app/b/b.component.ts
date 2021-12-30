import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor() { }

  @Input() process: any;
  @Input() contactPersons: any = 0;

  @Output() addInsured = new EventEmitter<number>();

  count : number = 0;

  ngOnInit(): void {
    this.count = this.contactPersons.length;
  }

  isCompanyEmployer() {
    if (!this.process || !this.process.insured || !this.process.insured.companyEmployer) {
      return '';
    } else {
      return 'עובד חברה - ' + this.process.insured.position;
    }
  };

  updateCount(count: number) {
    this.count = count;
  }
}
