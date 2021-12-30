import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class phonePipe implements PipeTransform {
    transform(phoneNumber: number): string {
        let currectPhoneNumber = '0'+phoneNumber;
        currectPhoneNumber =  currectPhoneNumber.substring(0,3)+"-"+currectPhoneNumber.substring(3,currectPhoneNumber.length)
        return currectPhoneNumber ;
    }
}