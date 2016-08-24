using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Model
{
    public class DictaatVM
    {
        public string Name { get; set; }

        public string[] Directories { get; set; }

        public string[] Files { get; set; }
    }
}
