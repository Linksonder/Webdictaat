using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core
{
    public interface IFile
    {
        bool TryReadFile(string path, out string content);
        bool TryCreateFile(string path);
        bool TryDeleteFile(string path);
        bool TryEditFile(string path, string source);
    }

    public class File : IFile
    {
        public bool TryCreateFile(string path)
        {
            if (System.IO.File.Exists(path))
            {
                return false;
            }

            //We moeten de file meteen vrij geven!
            System.IO.File.Create(path).Dispose();
            return true;
        }

        public bool TryDeleteFile(string path)
        {
            if (!System.IO.File.Exists(path))
            {
                return false;
            }

            System.IO.File.Delete(path);
            return true;

        }

        public bool TryEditFile(string path, string source)
        {
            if (!System.IO.File.Exists(path))
            {
                return false;
            }

            System.IO.File.WriteAllText(path, source);
            return true;
        }

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
