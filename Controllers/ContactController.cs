using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using contact_app.Models;
using Microsoft.AspNetCore.Mvc;

namespace contact_app.Controllers
{
    [Route("api/contact")]
    public class ContactController : Controller
    {
        static List<Contact> Contacts;

		public ContactController() {
			if (Contacts == null) {
				Contacts = getMockContacts();
			}
		}

		[HttpPost("search")]
		public IActionResult Search([FromBody]ContactSearchCriteria searchCriteria)
		{
			// Selects all the contacts based on the search criteria
			// If the search text contains any part of the contact's First or Last name, it will return that contact
			var contactsToReturn = Contacts.Where(x => string.Concat(x.FirstName, " ", x.LastName).Contains(searchCriteria.SearchString) &&
			((!searchCriteria.Filters.EmailRequired || (searchCriteria.Filters.EmailRequired && !string.IsNullOrEmpty(x.EmailAddress))) &&
			(!searchCriteria.Filters.ImageRequired || (searchCriteria.Filters.ImageRequired && !string.IsNullOrEmpty(x.ContactImage))))).ToList();
			return Ok(contactsToReturn);
		}

		[HttpPost]
		public IActionResult Add([FromBody]Contact contact)
		{
			contact.Id = Contacts.Count + 1;
			Contacts.Add(contact);

			return Ok(contact);
		}

		[HttpPut]
		public IActionResult Update([FromBody]Contact contact)
		{
			var oldContact = Contacts.FirstOrDefault(x => x.Id == contact.Id);
			if(oldContact != null)
			{
				oldContact.ContactImage = contact.ContactImage;
				oldContact.EmailAddress = contact.EmailAddress;
				oldContact.FirstName = contact.FirstName;
				oldContact.LastName = contact.LastName;
				oldContact.PhoneNumber = contact.PhoneNumber;
			}

			return Ok(oldContact);
		}

		[HttpDelete("{contactId}")]
		public IActionResult Delete(int contactId)
		{
			Contacts.RemoveAll(x => x.Id == contactId);

			return Ok();
		}

		[HttpGet("{contactId}")]
		public IActionResult GetContact(int contactId)
		{
			// returns a single contact for the edit page based on the contact Id from the route params passed in from the angular service
			return Ok(Contacts.Where(x => x.Id == contactId).FirstOrDefault());
		}

        [HttpGet("test")]
        public IActionResult Test() 
        {
            return Ok("Success");
        }

		private List<Contact> getMockContacts() {
			return new List<Contact> {
				new Contact {
					Id = 0,
					FirstName = "Cory",
					LastName = "Carter",
					EmailAddress = "cory.carter@tylertech.com",
					PhoneNumber = "",
					ContactImage = "assets/test.jpg"
				},
				new Contact {
					Id = 1,
					FirstName = "George",
					LastName = "Gilbert",
					EmailAddress = "george.gilbert@tylertech.com",
					PhoneNumber = "",
					ContactImage = ""
				},
				new Contact {
					Id = 2,
					FirstName = "Allie",
					LastName = "Guo",
					EmailAddress = "allie.guo@tylertech.com",
					PhoneNumber = "",
					ContactImage = ""
				},
				new Contact {
					Id = 3,
					FirstName = "Michael",
					LastName = "Matuszak",
					EmailAddress = "michael.matuszak@tylertech.com",
					PhoneNumber = "",
					ContactImage = ""
				},
				new Contact {
					Id = 4,
					FirstName = "John",
					LastName = "Doe",
					EmailAddress = "",
					PhoneNumber = "",
					ContactImage = ""
				},
			};
		}
    }
}
