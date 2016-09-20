using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.Core;

namespace Webdictaat.CMS.ViewModels
{
    public class File
    {
        public File(Core.File file)
        {
            this.Source = file.Source;
        }

        public string Source { get; set; }
    }
}
