import { Component, OnChanges, Input, NgModule } from '@angular/core';
import { NgForm, FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'selectors-template',
  templateUrl: './selectors-template.component.html'
})

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
   ]
})

export class SelectorsTemplateComponent implements OnChanges {
  @Input() incomingSearchData: Array;

  storedData = { buttonTitle: 'Toepassen', itemsList: [], excludedItems: [] };

	ngOnChanges() {
    this.getItems();
  }

  onSelect (e, isExcluded, index) {
    if (isExcluded) {
      this.storedData.excludedItems.push(e.target.value);
    } else {
      this.storedData.excludedItems.splice(index, 1);
    }
  }

	getItems () {
    const excludedItems = this.storedData.excludedItems;

    if (excludedItems.length) {}
    this.storedData.itemsList = excludedItems.length ? excludedItems.concat(this.incomingSearchData.filter(item => {
      return excludedItems.indexOf(item) === -1;
    })) : this.incomingSearchData;
	}
}
