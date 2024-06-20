import { Component, OnInit } from '@angular/core';
import { NewPageService } from '@core/newPage.service';
import { AlertService } from '@core/alert.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-claim-products.component',
  templateUrl: './claim-products.component.html',
  styleUrls: ['./claim-products.component.css'],
})
export class ClaimProducts implements OnInit {
  selectProducts: any[] = [
    {
      text: "Onesite",
      value: "onesite"
    },
    {
      text: "Green",
      value: "green"
    },
    {
      text: "Blue",
      value: "blue"
    },
  ];

  claimForm!: FormGroup;
  selectedValue!: string;
  isloginLoading: boolean = false;

  constructor(private newPageService: NewPageService, private alertSvc: AlertService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.newPageService.setNewPage({
      pageName: 'Some New Page',
      helpQuery: 'pg=ul-userlist&vr=40&scrver=350',
    });

    this.alertSvc.createAlert({
      alertClass: 'success',
      alertMessage: 'Wow this is cool stuff!!!',
      alertHeading: "You're doing great!",
    });



    this.claimForm = this._fb.group({
      PRODUCT: this._fb.array([this.addProductLogin()])
    });


  }

  addProductLogin() {
    return this._fb.group({
      productType: [''],
      productUsername: [''],
      productPassword: ['']
    });
  }

  addMorePhase() {
    this.phaseArray.push(this.addProductLogin());
  }
 

  onChange(val:any, index: number) {

  }

  
  get phaseArray() {
    const control = <FormArray>this.claimForm.get('PRODUCT');
    return control;
  }

  onSubmit() {
    console.log(this.claimForm.value);
  }

  validateProduct(i:number){
    console.log(event, i);
    this.isloginLoading = true;
  }

  

}
