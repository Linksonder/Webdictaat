using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.Model.Repository;

namespace Webdictaat.Model.Factory
{
    public class DictaatFactory : IDictaatFactory
    {
        public DictaatVM FillDictaat(string name)
        {
            string location = DictaatRepo.ROOT + name;
            var vm = new DictaatVM();
            vm.LastEdit = Directory.GetLastWriteTime(location);
            vm.Name = name;
            vm.RootEntry = GetSubEntries(location);
            return vm;
        }

        private DictaatEntryVM GetSubEntries(string location)
        {
            var entryVM = new DictaatEntryVM();
            entryVM.Files = Directory.GetFiles(location).Select(f => Path.GetFileName(f)).ToArray();
            entryVM.Name = Path.GetFileName(location);
            entryVM.Location = location;
            entryVM.Entries = Directory.GetDirectories(location).Select(d => GetSubEntries(d)).ToArray();
            return entryVM;
        }
    }
}
