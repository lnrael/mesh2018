import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../../models/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  public contacts$: Observable<Contact[]>;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.refreshContacts();
  }

  refreshContacts() {
    this.contacts$ = this.contactService.getContacts();
  }

  deleteContact(contactId: number) {
    this.contactService.deleteContact(contactId).subscribe(() => this.refreshContacts());
  }
}
