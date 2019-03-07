using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ASP.NET_Core_Backend.Models
{
    public class TimeReporterContext : DbContext
    {
        public TimeReporterContext(DbContextOptions<TimeReporterContext> options)
            : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
    }
}
