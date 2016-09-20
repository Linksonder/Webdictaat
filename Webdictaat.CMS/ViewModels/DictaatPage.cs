using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.CMS.ViewModels
{
    public class DictaatPage
    {
        public string Dictaat { get; set; }

        public string Name { get; set; }

        public DateTime LastChanged { get; set; }

        public string Source { get; set; }
    }
}
