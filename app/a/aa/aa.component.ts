import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aa',
  templateUrl: './aa.component.html',
  styleUrls: ['./aa.component.css']
})
export class AaComponent implements OnInit {
  @Input() count!: number;
  @Output() addToContacts = new EventEmitter<number>();
  @Output() deleteContacts = new EventEmitter();
  @Output() resetContacts = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateCount(count : number){
    this.count = count;
  }

  EmitAddToContacts(){
    this.addToContacts.emit();
  }

  EmitDeleteContacts(){
    this.deleteContacts.emit();
  }

  EmitResetContacts(){
    this.resetContacts.emit();
  }
}
