using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.CMS.Models
{
    public interface IDictaatRepository
    {
        IEnumerable<ViewModels.Dictaat> GetDictaten();
    }
}
