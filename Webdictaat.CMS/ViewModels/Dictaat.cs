using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.CMS.Models;
using Webdictaat.Core;

namespace Webdictaat.CMS.ViewModels
{
    public class Dictaat
    {
        private DirectoryDetails directoryDetails;
        private DirectoryDetails directoryDetails1;

        public Dictaat(DirectoryDetails directoryDetails1)
        {
            this.directoryDetails1 = directoryDetails1;
        }

        public IEnumerable<DictaatEntry> DictaatEntries { get; set; }
    }
}
