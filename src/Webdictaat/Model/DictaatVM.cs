using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Model
{
    public class DictaatVM
    {
        public DateTime LastEdit { get; set; }
        public string Name { get; set; }
        public string[] Entries { get; internal set; }
        public DictaatEntryVM RootEntry { get; internal set; }
    }
}
