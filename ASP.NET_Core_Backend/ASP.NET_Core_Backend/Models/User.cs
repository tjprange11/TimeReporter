using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NET_Core_Backend.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey(name:"Company")]
        public int CompanyId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string MiddleInitial { get; set; }

        public string FullName { get; set; }
        
        public bool IsSupervisor { get; set; }

        public bool IsAdmin { get; set; }

        public bool Deleted { get; set; }

        public string Email { get; set; }
    }
}
