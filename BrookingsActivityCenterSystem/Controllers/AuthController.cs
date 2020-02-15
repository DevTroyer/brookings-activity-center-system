using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BrookingsActivityCenterSystem.Repositories;

namespace BrookingsActivityCenterSystem.Controllers
{
    public class AuthController : ControllerBase
    {
        private readonly IStaffRepository _staffRepository;

        public AuthController(IStaffRepository staffRepository)
        {
            _staffRepository = staffRepository;
        }
    }
}
