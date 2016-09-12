using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat;
using Webdictaat.Core;

namespace Webdictaat.CMS.ViewModels
{
    public class DictaatSummary
    {
        public string Name { get; set; }

        public string Location { get; set; }

        public DateTime LastChange { get; set; }

        public DictaatSummary(DirectorySummary directorySummary)
        {
            this.LastChange = directorySummary.LastChange;
            this.Location = directorySummary.Location;
            this.Name = directorySummary.Name;
        }
    }
}
