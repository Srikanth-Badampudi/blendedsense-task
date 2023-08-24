import { Component, OnInit } from '@angular/core';
import { BusinessServiceService } from '../business_service/business-service.service';

@Component({
  selector: 'business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {
  products: any = [];
  businessTypes: any = [];
  constructor(private businessService: BusinessServiceService) {}

  getBusinesses() {
    this.businessService.getAllBusiness().subscribe((res: any) => {
      this.products = res.businesses;
    });
  }

  getBusinessTypes() {
    this.businessService.getBusinessTypes().subscribe((res: any) => {
      this.businessTypes = res.businessTypes;
    });
  }

  ngOnInit(): void {
    this.getBusinesses();
    this.getBusinessTypes();
  }

  getBusinessNameWithId(business: any) {
    for (let item of this.businessTypes) {
      if (item.id == business.businessTypeId) {
        return item.name;
      }
    }
  }
}
