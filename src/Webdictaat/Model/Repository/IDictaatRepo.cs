using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Model.Repository
{
    public interface IDictaatRepo
    {
        string[] GetDictaten();
        void CreateDictaat(string name);
        void DeleteDictaat(string name);
        object GetDictaat(string name);
    }
}
