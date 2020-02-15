using BrookingsActivityCenterSystem.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrookingsActivityCenterSystem.Entities
{
    public class StaffContext : DbContext
    {
        public StaffContext(DbContextOptions<StaffContext> options) : base(options)
        {
            Database.Migrate();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Staff>().ToTable("Staff");

            #region StaffDataSeed

            var administrator = new Staff
            {
                Id = 1,
                FirstName = "Tucker",
                LastName = "Troyer",
                Email = "tucker.troyer@bac.com",
                PhoneNumber = "605-234-5678",
                Role = "Admin",
                Password = "alanturing"
            };

            modelBuilder.Entity<Staff>().HasData(administrator);

            var kitchenManager = new Staff
            {
                Id = 2,
                FirstName = "Gordon",
                LastName = "Ramsay",
                Email = "gordon.ramsay@bac.com",
                PhoneNumber = "605-234-5678",
                Role = "KitchenManager",
                Password = "hellskitchen"
            };

            modelBuilder.Entity<Staff>().HasData(kitchenManager);

            var equipmentManager = new Staff
            {
                Id = 3,
                FirstName = "Marques",
                LastName = "Brownlee",
                Email = "marques.brownlee@bac.com",
                PhoneNumber = "605-234-5678",
                Role = "EquipmentManager",
                Password = "americanpodcaster"
            };

            modelBuilder.Entity<Staff>().HasData(equipmentManager);

            var server1 = new Staff
            {
                Id = 4,
                FirstName = "Roma",
                LastName = "Deacon",
                Email = "roma.deacon@bac.com",
                PhoneNumber = "605-234-5678",
                Role = "Server",
                Password = "iheartserving"
            };

            modelBuilder.Entity<Staff>().HasData(server1);

            var server2 = new Staff
            {
                Id = 5,
                FirstName = "Carter",
                LastName = "Irvine",
                Email = "carter.irvine@bac.com",
                PhoneNumber = "605-234-5678",
                Role = "Server",
                Password = "iheartserving2"
            };

            modelBuilder.Entity<Staff>().HasData(server2);

            #endregion
        }

        public DbSet<Staff> Staff { get; set; }
    }
}
