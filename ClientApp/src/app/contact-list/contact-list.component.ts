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

  @Output()
  addContact = new EventEmitter<void>();
  @Output()
  editContact = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  delete(event: Event, contactId: number) {
    event.stopPropagation();
    this.deleteContact.emit(contactId);
  }

  add() {
    this.addContact.emit();
  }

  edit(contactId: number) {
    this.editContact.emit(contactId);
  }
}
