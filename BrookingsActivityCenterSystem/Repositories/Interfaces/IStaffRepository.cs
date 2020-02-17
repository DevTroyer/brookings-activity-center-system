using System.Collections.Generic;
using BrookingsActivityCenterSystem.Models;

namespace BrookingsActivityCenterSystem.Repositories
{
    public interface IStaffRepository
    {
        Staff GetById(int id);
        List<Staff> GetAll();
        void Delete(int id);
        void Insert(Staff staff);
        void Update(Staff staff);
        Staff Authenticate(string username, string Password);
    }
}
