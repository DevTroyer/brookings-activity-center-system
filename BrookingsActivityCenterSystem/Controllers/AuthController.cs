using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            var staff = _staffRepository.Authenticate(user.Username, user.Password);

            if(staff != null)
            {
                return Ok(staff);
            }

            return BadRequest(new { message = "Error - Username or password is incorrect." });
        }
    }
}
