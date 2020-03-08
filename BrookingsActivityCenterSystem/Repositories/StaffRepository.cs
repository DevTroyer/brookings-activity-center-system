using BrookingsActivityCenterSystem.Entities;
using BrookingsActivityCenterSystem.Models;
using System.Collections.Generic;
using System.Linq;

namespace BrookingsActivityCenterSystem.Repositories
{
    public class StaffRepository : IStaffRepository
    {
        private StaffContext _staffContext;

        public StaffRepository(StaffContext staffContext)
        {
            _staffContext = staffContext;
        }

        public Staff GetById(int id)
        {
            Staff staff = new Staff();
            return staff;
        }

        public List<Staff> GetAll()
        {
            List<Staff> newList = new List<Staff>();
            return newList;
        }

        public void Delete(int id)
        {
            var user = _staffContext.Staff.Where(x => x.Id == id).FirstOrDefault();
            if (user != null)
            {
                _staffContext.Staff.Remove(user);
            }
        }

        public void Insert(Staff staff)
        {

        }

        public void Update(Staff staff)
        {

        }

        public Staff Authenticate(string email, string password)
        {
            Staff staff = _staffContext.Staff.FirstOrDefault(x => x.Email == email && x.Password == password);
            
            if(staff == null)
            {
                return null;
            }

            return staff;
        }
    }
}
