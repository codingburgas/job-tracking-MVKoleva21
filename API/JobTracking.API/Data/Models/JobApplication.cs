using System;

namespace JobTracking.Data.Models
{
    public class JobApplication
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string JobTitle { get; set; }
        public string Company { get; set; }
        public string Status { get; set; }
        public DateTime DateApplied { get; set; }
    }
}
