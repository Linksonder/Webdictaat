using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.Core;

namespace Webdictaat.CMS.ViewModels
{
    public class File
    {
        private Core.File result;

        public File(Core.File result)
        {
            this.result = result;
        }

        public string Source { get; set; }
    }
}
