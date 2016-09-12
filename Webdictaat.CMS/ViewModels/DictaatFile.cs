using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.CMS.ViewModels
{
    public class DictaatFile : DictaatEntry
    {
        public string Name { get; set; }

        public string Location { get; set; }

        public DateTime LastChange { get; set; }
    }
}
