using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.CMS.Models.Resources
{
    public class ConfigVariables 
    {
        public string DictaatRoot { get; set; }

        public string PagesDirectory { get; set; }
    }
}
