using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Model
{
    public class DictaatEntryVM
    {
        public string Name { get; set; }

        public DictaatEntryVM[] Entries { get; set; }

        public string[] Files { get; set; }

        public string Location { get; set; }
    }
}
