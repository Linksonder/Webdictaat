using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.CMS.ViewModels
{
    public class DictaatFile : DictaatEntry
    {
        public DictaatFile(Core.FileEntry file)
        {
            this.Location = file.Location;
            this.Name = file.Name;
            this.LastChange = file.LastChanged;
        }

        public DateTime LastChange { get; set; }
    }
}
