import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactPersonType } from '../shared/Enum/PersonTypEnum';
import { contactPersonModel } from '../shared/models/contactPerson.model';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor() { }
  @Output() updateCount = new EventEmitter<number>();
  @Input() process: any;


  ngOnInit(){
    this.contactPersons = [
      {
        id: 1,
        deliveryFlag: true,
        type: {
          code: 1,
          value: "מבוטח"
        },
        firstName: "ניקיטה",
        lastName: "ג'יין",
        identity: 278545412,
        address: {
          homeNumber: 9,
          cityName: "רחובות",
          streetName: "אופנהיימר"
        },
        cellPhone: 525816206,
        email: "NIKITA_JAIN@AMAT.COM"
      },
      {
        id: 2,
        deliveryFlag: false,
        type: {
          code: 21,
          value: "סוכן"
        },
        firstName: "טוביה",
        lastName: "בצקי",
        identity: 433974846,
        address: {
          homeNumber : 0,
          cityName: "מחנה תל נוף",
          streetName: ""
        },
        cellPhone: 525452206,
        email:""
      }]
  }
  processType: any;
  contactPersons! : contactPersonModel[];

  isInsuredInHealthClaim(contactPerson: any) {
    return this.isAmbulatoryProcess() && this.contactIsInsured(contactPerson);
  };

  isAmbulatoryProcess() {
    return this.processType === "AMBULATORY_HEALTH_CLAIM" || this.processType === "AMBULATORY_HEALTH_CLAIM_CONT";
  };

  contactIsInsured(contactPerson: any) {
    return contactPerson.type.code === ContactPersonType.INSURED;
  };

  addContactPerson() {
    this.contactPersons.push({
      id: this.contactPersons.length,
      deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
      type: {
        code: 5,
        value: "שאר"
      },
      firstName: "ישראל",
      lastName: "ישראלי",
      identity: 278545412,
      address: {
        homeNumber: 9,
        cityName: "רחובות",
        streetName: "אופנהיימר"
      },
      cellPhone: 525816206,
      email: "NIKITA_JAIN@AMAT.COM"
    });
    this.updateCount.emit(this.contactPersons.length)
  }

  addProcessPerson(){
    debugger
    let a = new contactPersonModel;
    a.address = this.process.insured.address;
    a.cellPhone = 

    this.contactPersons.push(this.process.insured);
    this.updateCount.emit(this.contactPersons.length);
  }

  resetContacts() {
    debugger
    var contacts = [];
    contacts.push(this.contactPersons[0]);
    this.contactPersons = contacts;
    this.updateCount.emit(this.contactPersons.length)
  }

  deleteContacts() {
    this.contactPersons = [];
    this.updateCount.emit(this.contactPersons.length)
  }

  addInsuredToContacts(event: any, params: any) {
    var newContact = this.createContact(params);
    this.contactPersons.push(newContact);
    this.updateCount.emit(this.contactPersons.length)
  }

  createContact(contact: any): contactPersonModel{
    return {
      id: this.contactPersons.length,
      deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
      type: {
        code: 1,
        value: "מבוטח"
      },
      firstName: contact.firstName,
      lastName: contact.lastName,
      identity: contact.identity,
      address: {
        cityName: contact.address.cityName,
        streetName: contact.address.streetName,
        homeNumber:contact.contact.homeNumber
      },
      cellPhone: contact.cellPhone,
      email: contact.email
    }
  }
}
