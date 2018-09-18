import { Injectable } from '@angular/core';
import { ContactSearchCriteria } from '../models/contactSearchCriteria';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ContactService {
  private url = 'http://localhost:5000/api/contact/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  getContacts(contactSearchCriteria?: ContactSearchCriteria): Observable<Contact[]> {
    if (!contactSearchCriteria) {
      contactSearchCriteria = {
        searchString: '',
        Filters: {
          emailRequired: false,
          imageRequired: false
        }
      };
    }

    return this.http.post<Contact[]>(this.url + 'search', contactSearchCriteria, this.httpOptions);
  }

  deleteContact(contactId: number): Observable<boolean> {
    return this.http.delete(this.url + contactId).pipe(map(() => true));
  }
}
