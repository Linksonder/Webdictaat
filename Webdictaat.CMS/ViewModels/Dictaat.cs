using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat;

namespace Webdictaat.CMS.ViewModels
{
    public class Dictaat
    {
        public Dictaat(Core.IDirectory directory, string path)
        {
            var summary = directory.GetDirectorySummary(path);

            this.LastChange = summary.LastChange;
            this.Location = summary.Location;
            this.Name = summary.Name;

        }

        public string Name { get; set; }

        public string Location { get; set; }

        public DateTime LastChange { get; set; }
    }
}
