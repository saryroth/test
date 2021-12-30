import { Component, Input, OnInit } from '@angular/core';
import { TestserviceService } from '../shared/testservice.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  constructor(private testserviceService: TestserviceService) { }

  @Input() process: any;
  canceledClaimStatus = 2;
  show = false;

  ngOnInit(): void {
  }

  claimRemarks() {
    var text = "";
    if (this.process.superClaim && this.process.superClaim.inquiryPorcessFlag) {
        text += "בירור";
        if (this.process.superClaim.pensionFollowUpForInsuredType) {
            text += ", ";
        }
    }   
    return text;
  }

  getClaims() {
    if (!this.process.superClaim || !this.process.superClaim.operativeClaims) { return ''; }
    var ParticipatingClaims = this.getParticipatingClaims(this.process.superClaim.operativeClaims)
    return ParticipatingClaims ? ParticipatingClaims.map((x: any) => { return x.company + "-" + x.operativeClaimNum; }).join(",") : "אין תביעות משתתפות";
  }

  getParticipatingClaims(operativeClaims: any): any {
    return operativeClaims.filter((x: any) => { return x.claimStatus.code !== this.canceledClaimStatus && this.testserviceService.checkIfParticipatingClaim(x); })
  }

  hasIrragularMark(){
    return this.process && this.process.superClaim && this.process.superClaim.irregularSuperClaimFlag === false;      
  }
}
