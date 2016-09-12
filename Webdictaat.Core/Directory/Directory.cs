using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core
{
    public interface IDirectory
    {
        string[] GetDirectories(string path);

        DirectorySummary GetDirectorySummary(string path);
    }

    public class DirectorySummary
    {
        public DateTime LastChange { get; set; }
        public string Location { get; internal set; }
        public string Name { get; internal set; }
    }

    public class Directory : IDirectory
    {
        public string[] GetDirectories(string path)
        {
            return System.IO.Directory.GetDirectories(path);
        }

        public DirectorySummary GetDirectorySummary(string path)
        {
            return new DirectorySummary()
            {
                LastChange = System.IO.Directory.GetLastWriteTime(path),
                Name = path.Split('/').Last(),
                Location = path,
            };
        }
            
    }
}
