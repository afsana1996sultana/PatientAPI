using Microsoft.EntityFrameworkCore;
using PatientAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientAPI.Data
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        {
        }


        public DbSet<UserModel> userModels { get; set; }
        public DbSet<PatientModel> patientModels { get; set; }
        public DbSet<LoginModel> loginModels { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModel>().ToTable("tbl_user");
            modelBuilder.Entity<PatientModel>().ToTable("tbl_patient");
            modelBuilder.Entity<LoginModel>().ToTable("tbl_loginuser");
        }
    }
}

