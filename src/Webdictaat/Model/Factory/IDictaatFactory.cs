using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Model.Factory
{
    public interface IDictaatFactory
    {
        DictaatVM FillDictaat(string name);

    }
}
