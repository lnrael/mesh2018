import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactSearchCriteria } from '../../models/contactSearchCriteria';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.css']
})
export class ContactFilterComponent implements OnInit {
  public searchString: string;
  public imageRequired: boolean;
  public emailRequired: boolean;
  public indeterminate: boolean;
  public requiredAll: boolean;

  @Output()
  searchCriteriaChange = new EventEmitter<ContactSearchCriteria>();

  constructor() {}

  ngOnInit() {}

  searchStringChanged() {
    this.parentUpdate();
  }

  determineRequired() {
    this.indeterminate = false;

    if (!!this.imageRequired && !!this.emailRequired) {
      this.requiredAll = true;
    } else if (!!this.imageRequired || !!this.emailRequired) {
      this.requiredAll = false;
      this.indeterminate = true;
    } else {
      this.requiredAll = false;
    }

    this.parentUpdate();
  }

  changeAllFilters() {
    if (!!this.indeterminate || !!this.requiredAll) {
      this.indeterminate = false;
      this.requiredAll = true;
      this.imageRequired = true;
      this.emailRequired = true;
    } else {
      this.imageRequired = false;
      this.emailRequired = false;
    }

    this.parentUpdate();
  }

  parentUpdate() {
    const criteria: ContactSearchCriteria = {
      searchString: this.searchString || '',
      Filters: {
        emailRequired: this.emailRequired,
        imageRequired: this.imageRequired
      }
    };

    this.searchCriteriaChange.emit(criteria);
  }
}
