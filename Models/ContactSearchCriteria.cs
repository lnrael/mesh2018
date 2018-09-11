namespace contact_app.Models 
{
    public class ContactSearchCriteria
    {
        public string SearchString { get; set; }

        public Filter Filters {get; set;}
    }
}