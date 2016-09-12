using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core
{
    public class DirectorySummary
    {
        public DateTime LastChange { get; set; }
        public string Location { get; internal set; }
        public string Name { get; internal set; }
    }
}
