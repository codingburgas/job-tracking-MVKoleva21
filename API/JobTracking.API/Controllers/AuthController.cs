using Microsoft.AspNetCore.Mvc;
using JobTracking.Data;
using JobTracking.Data.Models;
using System.Threading.Tasks;

namespace JobTracking.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            user.Role = "Applicant"; // Default role
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
