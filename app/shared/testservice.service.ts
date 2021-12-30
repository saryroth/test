import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor() { }
  checkIfParticipatingClaim(claim: any) {
    return  claim.coverages.find((x: any) => { return x.claimParticipating });    
  }
}
