using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JobTracking.DataAccess.Data.Base;

namespace JobTracking.DataAccess.Data.Models
{
    public class Application : IApplication
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int PositionPostingId { get; set; }
        public PositionPosting PositionPosting { get; set; }

        public ApplicationStatus Status { get; set; }
    }
}
