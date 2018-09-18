import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input()
  contacts: Contact[];
  @Output()
  deleteContact = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  delete(event: Event, contactId: number) {
    event.stopPropagation();
    this.deleteContact.emit(contactId);
  }
}
