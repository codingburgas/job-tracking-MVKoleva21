using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JobTracking.DataAccess.Data.Base;
using static System.Net.Mime.MediaTypeNames;

namespace JobTracking.DataAccess.Data.Models
{
    public class PositionPosting : IPositionPosting
    {
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Title { get; set; }

        [Required, MaxLength(100)]
        public string CompanyName { get; set; }

        [Required, MaxLength(1000)]
        public string Description { get; set; }

        public DateTime DatePosted { get; set; }

        public PositionStatus Status { get; set; }
        
        public ICollection<Application> Applications { get; set; }
    }
}
