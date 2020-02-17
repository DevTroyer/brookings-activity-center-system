using BrookingsActivityCenterSystem.Models;
using System.Collections.Generic;
using System.Linq;

namespace BrookingsActivityCenterSystem.Repositories
{
    public class StaffRepository : IStaffRepository
    {
        private UserContext _userContext;

        public StaffRepository(UserContext userContext)
        {
            _userContext = userContext;
        }

        public Staff GetById(int id)
        {

        }

        public List<Staff> GetAll()
        {

        }

        public void Delete(int id)
        {
            var user = _userContext.Staff.Where(x => x.Id == id).FirstOrDefault();
            if(user != null)
            {
                _userContext.Staff.Remove(user);
            }
        }

        public void Insert(Staff staff)
        {

        }

        public void Update(Staff staff)
        {

        }

        public Staff Authenticate(string username, string Password)
        {

        }
    }
}
