using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core
{
    public interface IFileReader
    {
        bool TryReadFile(string path, out File file);
    }

    public class FileReader : IFileReader
    {
        public bool TryReadFile(string path, out File file)
        {
            if (!System.IO.File.Exists(path))
            {
                file = null;
                return false;
            }

            file = new Core.File()
            {
                Source = System.IO.File.ReadAllText(path)
            };
            return true;
        }
    }
}
