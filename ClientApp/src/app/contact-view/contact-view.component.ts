import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../../models/contact';
import { ContactService } from '../contact.service';
import { ContactSearchCriteria } from '../../models/contactSearchCriteria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  public contacts$: Observable<Contact[]>;

  private searchCriteria: ContactSearchCriteria;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {
    this.refreshContacts();
  }

  refreshContacts() {
    this.contacts$ = this.contactService.getContacts(this.searchCriteria);
  }

  deleteContact(contactId: number) {
    this.contactService.deleteContact(contactId).subscribe(() => this.refreshContacts());
  }

  searchCriteriaChanged(criteria: ContactSearchCriteria) {
    this.searchCriteria = criteria;
    this.refreshContacts();
  }
  addContact() {
    this.router.navigate(['ContactDetails']);
  }

  editContact(contactId: number) {
    this.router.navigate(['Contacts/Detail', contactId]);
  }
}
