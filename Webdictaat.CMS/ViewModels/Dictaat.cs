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
        public string Name { get; set; }

        public DictaatEntry RootEntry { get; set; }

        public Dictaat(DirectoryDetails details)
        {
            this.Name = details.Name;

            this.RootEntry = new DictaatDirectory(details.RootEntry);
        }

    }
}
