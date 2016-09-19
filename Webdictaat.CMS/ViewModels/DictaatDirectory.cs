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
        public IEnumerable<DictaatFile> Files { get; private set; }

        public DictaatDirectory(DirectoryEntry entry)
        {
            this.Name = entry.Name;
            this.Location = entry.Location;
            Entries = entry.ChildDirectories.Select(e => new DictaatDirectory(e));
            Files = entry.ChildFiles.Select(f => new DictaatFile(f));
        }
    }
}
