import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../../models/contact';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit, OnDestroy {
  public contact = new Contact();
  private contactId: number;
  private paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.contactId = +params['id'];
        this.getContact();
      }
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  getContact() {
    this.contactService.getContact(this.contactId).subscribe((contact: Contact) => {
      this.contact = contact;
    });
  }

  updateContact() {
    this.contactService.updateContact(this.contact).subscribe(() => {
      this.navigateToSearch();
    });
  }

  createContact() {
    this.contactService.createContact(this.contact).subscribe(() => {
      this.navigateToSearch();
    });
  }

  save() {
    if (this.contactId != null) {
      this.updateContact();
    } else {
      this.createContact();
    }
  }

  cancel() {
    this.navigateToSearch();
  }

  navigateToSearch() {
    this.router.navigate(['Contacts/Search']);
  }
}
