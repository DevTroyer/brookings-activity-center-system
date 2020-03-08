using Microsoft.AspNetCore.Mvc;
using BrookingsActivityCenterSystem.Repositories;
using BrookingsActivityCenterSystem.Models;

namespace BrookingsActivityCenterSystem.Controllers
{
    [Route("api/authenticate")]
    [Produces("application/json")]
    public class AuthController : ControllerBase
    {
        private readonly IStaffRepository _staffRepository;

        public AuthController(IStaffRepository staffRepository)
        {
            _staffRepository = staffRepository;
        }

        [HttpPost]
        public IActionResult Authenticate(UserAuthModel user)
        {
            var staff = _staffRepository.Authenticate(user.Email, user.Password);

            if(staff != null)
            {
                return Ok(staff);
            }

            return BadRequest(new { message = "Login failed. Email or password is incorrect." });
        }
    }
}
