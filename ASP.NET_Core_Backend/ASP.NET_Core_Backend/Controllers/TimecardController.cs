using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP.NET_Core_Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NET_Core_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimecardController : ControllerBase
    {
        public TimeReporterContext db = new TimeReporterContext();
        [HttpGet]
        public IEnumerable<Models.Timecard> Get(int userId)
        {
            return db.Timecards.Where(timecard => timecard.UserId == userId);
        }
        [HttpPost]
        public void Post([FromBody] Models.Timecard timecard)
        {
            db.Timecards.Add(timecard);
            db.SaveChanges();
        }
    }
}