using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PatientAPI.Models
{
    public class PatientModel
    {
        [Key]
        public int Id { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string CountryTravelingTo { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Nationality { get; set; }
        public string EmailId { get; set; }
        public string PhoneNo { get; set; }
        public string Gender { get; set; }
        public string MaritalStatus { get; set; }
        public string PassportNo { get; set; }
        public string ConfirmPassportNo { get; set; }
        public DateTime PassportIssueDate { get; set; }
        public string PassportIssuePlace { get; set; }
        public DateTime PassportExpiryDate { get; set; }
        public string VisaType { get; set; }
        public string NationalId { get; set; }
        public string PositionAppliedFor { get; set; }
        public string Other { get; set; }

    }
}
