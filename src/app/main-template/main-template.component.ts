import { Component, OnInit, NgModule, Output } from '@angular/core';
import { ServiceCall } from '../service-call/service-call.service';

@Component({
  selector: 'main-template',
  templateUrl: './main-template.component.html'
})

export class MainTemplateComponent implements OnInit {
  @Output('myData') outgoingData = [];

  constructor(private serviceCall: ServiceCall) { this.serviceCall = serviceCall }

	mainTitle = { title: 'Productgroep' };

	ngOnInit() {
    this.getItems();
  }

	getItems () {
		this.serviceCall.getItems()
    .subscribe((items) => {
      this.outgoingData = items.data;
    });
	}
}
