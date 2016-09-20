using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core
{
    public interface IFileReader
    {
        bool TryReadFile(string path, out string content);
    }

    public class FileReader : IFileReader
    {
        public bool TryReadFile(string path, out string content)
        {
            if (!System.IO.File.Exists(path))
            {
                content = null;
                return false;
            }

            content = System.IO.File.ReadAllText(path);
            return true;
        }
    }
}
