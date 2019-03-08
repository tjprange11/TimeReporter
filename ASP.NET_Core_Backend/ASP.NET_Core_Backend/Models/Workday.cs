using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NET_Core_Backend.Models
{
    public class Workday
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Timecard")]
        public int TimecardId { get; set; }

        [ForeignKey("Task")]
        public int TaskId { get; set; }

        public DateTime Date { get; set; }

        public int HoursWorked { get; set; }
    }
}
