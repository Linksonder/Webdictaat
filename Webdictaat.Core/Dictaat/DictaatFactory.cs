using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.Domain;

namespace Webdictaat.Core
{
    public interface IDictaatFactory
    {
        Domain.Dictaat GetDictaat(string name);
    }

    public class DictaatFactory : IDictaatFactory
    {
        private string _directoryRoot;
        private string _pagesDirectory;

        private Core.IDirectory _directory;

        public DictaatFactory(string directoryRoot, string pagesDirectory, Core.IDirectory directory)
        {
            _directoryRoot = directoryRoot;
            _pagesDirectory = pagesDirectory;
            _directory = directory;
        }

        public Dictaat GetDictaat(string name)
        {
            string path = String.Format("{0}\\{1}\\{2}", _directoryRoot, name, _pagesDirectory);

            Dictaat dictaat = new Dictaat();

            dictaat.Name = name;
            dictaat.Pages = _directory.GetFilesSummary(path);

            return dictaat;
        }
    }
}
