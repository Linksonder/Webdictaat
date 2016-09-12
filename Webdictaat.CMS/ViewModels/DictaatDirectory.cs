using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.CMS.ViewModels
{
    public class DictaatDirectory : DictaatEntry
    {
        public IEnumerable<DictaatEntry> Entries { get; set; }
    }
}
