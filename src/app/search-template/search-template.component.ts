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
  @Output('myData') outgoingSearchInputData = [];
  @Input() incomingData: Array;

  ngOnChanges() {
    this.outgoingSearchInputData = this.incomingData;
  }

	onChange(value) {
		 const data = this.incomingData;
     const newDataArray = data.filter(d => {
        return d.toLowerCase().search(
        value.toLowerCase()) !== -1;
      });
      this.outgoingSearchInputData = newDataArray;
	}
}
