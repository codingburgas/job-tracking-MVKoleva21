using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using JobTracking.Data;
using JobTracking.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobTracking.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobApplicationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JobApplicationController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobApplication>>> GetJobApplications()
        {
            return await _context.JobApplications.ToListAsync();
        }

        [HttpPost]
        [Authorize(Roles = "Applicant")]
        public async Task<ActionResult<JobApplication>> PostJobApplication(JobApplication jobApplication)
        {
            _context.JobApplications.Add(jobApplication);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetJobApplications), new { id = jobApplication.Id }, jobApplication);
        }
    }
}
