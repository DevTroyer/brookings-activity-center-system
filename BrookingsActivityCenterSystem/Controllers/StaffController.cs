using BrookingsActivityCenterSystem.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BrookingsActivityCenterSystem.Controllers
{
    [Authorize]
    [Route("api/staff")]
    [Produces("application/json")]
    public class StaffController : ControllerBase
    {
        private readonly IStaffRepository _staffRepository;

        public StaffController(IStaffRepository staffRepository)
        {
            _staffRepository = staffRepository;
        }

    }
}
