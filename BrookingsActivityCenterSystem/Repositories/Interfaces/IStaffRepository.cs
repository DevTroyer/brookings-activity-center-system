using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BrookingsActivityCenterSystem.Models;

namespace BrookingsActivityCenterSystem.Repositories
{
    public class IStaffRepository
    {
        Staff GetById(int id);
        List<Staff> GetAll();
        void Delete(int id);
        void Insert(Staff staff);
        void Update(Staff staff);
        Staff Authenticate(string username, string Password);
    }
}
