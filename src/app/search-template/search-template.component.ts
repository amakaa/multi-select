import { Component, OnChanges, Input, NgModule, Output } from '@angular/core';
import { NgForm, FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'search-template',
  templateUrl: './search-template.component.html'
})

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
   ]
})

export class SearchTemplateComponent implements OnChanges {
  @Output('myData') outgoingData = [];
  @Input() incomingData: any;

  ngOnChanges() {
    this.outgoingData = this.incomingData;
  }

	onChange(value) {
		 const data = this.incomingData;
     const newDataArray = data.filter(d => {
        return d.toLowerCase().search(
        value.toLowerCase()) !== -1;
      });
      this.outgoingData = newDataArray;
	}
}
