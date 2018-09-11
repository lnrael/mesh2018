using System.Runtime.Serialization;

namespace contact_app.Models 
{
    public class Contact
	{
		public int Id { get; set; }

		public string FirstName { get; set; }

		public string LastName { get; set; }

		public string PhoneNumber { get; set; }

		public string EmailAddress { get; set; }

		public string ContactImage { get; set; }
	}
}