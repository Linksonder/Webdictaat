using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core
{
    public interface IDirectory
    {
        IEnumerable<DirectorySummary> GetDirectoriesSummary(string _directoryRoot);
        DirectoryDetails GetDirectoryDetails(string _directoryRoot, string name);
    }

    public class Directory : IDirectory
    {

        public IEnumerable<DirectorySummary> GetDirectoriesSummary(string _directoryRoot)
        {
            string[] directories = System.IO.Directory.GetDirectories(_directoryRoot);

            return directories.Select(d => new DirectorySummary()
            {
                LastChange = System.IO.Directory.GetLastWriteTime(d),
                Location = d.Split(new string[] { _directoryRoot }, StringSplitOptions.None).Last(),
                Name = d.Split('\\').Last()
            });
        }

        public DirectoryDetails GetDirectoryDetails(string _directoryRoot, string name)
        {
            string path = _directoryRoot + name;

            return new DirectoryDetails()
            {
                Name = name,
                RootEntry = GetDirectoryEntry(path)
            };
        }

        private DirectoryEntry GetDirectoryEntry(string path)
        {
            return new DirectoryEntry()
            {
                Name = path.Split('\\').Last(),
                ChildDirectories = System.IO.Directory.GetDirectories(path).Select(p => GetDirectoryEntry(p)),
                ChildFiles = System.IO.Directory.GetFiles(path),
            };

        }
    }
}
