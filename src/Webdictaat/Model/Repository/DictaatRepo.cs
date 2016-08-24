using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.Model.Factory;

namespace Webdictaat.Model.Repository
{
    public class DictaatRepo : IDictaatRepo
    {
        public static string ROOT = "C:/webdictaat/";
        private IDictaatFactory _dictaatFactory;

        public DictaatRepo(IDictaatFactory dictaatFactory)
        {
            _dictaatFactory = dictaatFactory;
        }

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
            var vm = _dictaatFactory.FillDictaat(name);
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
