using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP.NET_Core_Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NET_Core_Backend.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public TimeReporterContext db = new TimeReporterContext();

        [HttpGet]
        public IEnumerable<Models.User> Get()
        {
            return db.Users;
        }
        [HttpPost]
        public void Post([FromBody] Models.User user)
        {
            db.Users.Add(user);
            db.SaveChanges();
        }
    }
}