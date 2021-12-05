using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PatientAPI.Data;
using PatientAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly UserDbContext _context;
        public PatientController(UserDbContext userDbContext)
        {
            _context = userDbContext;
        }

        [HttpPost("add_patient")]
        public IActionResult AddPatient([FromBody] PatientModel patientObj)
        {
            if(patientObj == null)
            {
                return BadRequest();
            }
            else
            {
                _context.patientModels.Add(patientObj);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,

                });
            }
        }
        [HttpPut("update_patient")]
        public IActionResult UpdatePatient([FromBody] PatientModel patientObj)
        {
            if(patientObj == null)
            {
                return BadRequest();
            }
            var user = _context.patientModels.AsNoTracking().FirstOrDefault(x => x.Id == patientObj.Id);
            if(user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "User Not Found"
                });
            }
            else
            {
                _context.Entry(patientObj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message= "Patient Updated Successfully"
                });
            }
        }
        [HttpDelete("delete_patient/{id}")]
        public IActionResult DeletePatient(int id)
        {
            var user = _context.patientModels.Find(id);
            if(user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Patient Not Found"
                });
            }
            else
            {
                _context.Remove(user);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "PatientAPI Deleted"
                });
            }
        }
        [HttpGet("get_all_patient")]
        public IActionResult GetAllPatient()
        {
            var patient = _context.patientModels.AsQueryable();
            return Ok(new
            {
                StatusCode = 200,
                PatiendDetails = patient
            });
        }

        [HttpGet("get_patient/id")]
        public IActionResult Getpatient(int id)
        {
            var patient = _context.patientModels.Find(id);
            if(patient == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Patient Not Found"
                });
            }
            else
            {
                return Ok(new
                {
                    StatusCode = 200,
                    PatientDetail = patient

                });
            }
        }
    }
}
