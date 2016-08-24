using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;


namespace Webdictaat.Model.Repository
{
    public class DictaatRepo : IDictaatRepo
    {
        public string ROOT = "C:/webdictaat/";

        public void CreateDictaat(string name)
        {
            Directory.CreateDirectory(ROOT + name);
        }

        public void DeleteDictaat(string name)
        {
            Directory.Delete(ROOT + name);
        }

        public DictaatVM GetDictaat(string name)
        {
            var vm = new Model.DictaatVM();
            vm.Files = Directory.GetFiles(name);
            vm.Directories = Directory.GetDirectories(name);
            vm.Name = name;
            return vm;
        }

        public string[] GetDictaten()
        {
            string[] dictaten = Directory.GetDirectories(ROOT);
            dictaten = dictaten.Select(d => d.Split('/').Last()).ToArray();
            return dictaten;
        }
    }
}
