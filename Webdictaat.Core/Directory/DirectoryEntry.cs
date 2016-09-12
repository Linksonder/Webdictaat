using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core
{
    public class DirectoryEntry
    {
        public string Name { get; set; }

        public string Location { get; set; }

        public IEnumerable<DirectoryEntry> ChildDirectories { get; set; }

        public IEnumerable<FileEntry> ChildFiles { get; set; }
    }
}
