using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.Core;

namespace Webdictaat.CMS.ViewModels
{
    public class DictaatDirectory : DictaatEntry
    {
        public IEnumerable<DictaatEntry> Entries { get; set; }

        public DictaatDirectory(DirectoryEntry entry)
        {
            this.Name = entry.Name;
            this.Location = entry.Location;
            Entries = entry.ChildDirectories.Select(e => new DictaatDirectory(e));
            Entries =  Entries.Concat(entry.ChildFiles.Select(f => new DictaatFile(f)));
        }
    }
}
