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

        public IEnumerable<DirectorySummary> GetDirectoriesSummary(string directoryRoot)
        {
            string[] directories = System.IO.Directory.GetDirectories(directoryRoot);

            return directories.Select(d => new DirectorySummary()
            {
                LastChange = System.IO.Directory.GetLastWriteTime(d),
                Location = d.Split(new string[] { directoryRoot }, StringSplitOptions.None).Last(),
                Name = d.Split('\\').Last()
            });
        }

        public DirectoryDetails GetDirectoryDetails(string directoryRoot, string name)
        {
            string path = String.Format("{0}\\{1}", directoryRoot, name);

            return new DirectoryDetails()
            {
                Name = name,
                RootEntry = GetDirectoryEntry(directoryRoot, path)
            };
        }

        private DirectoryEntry GetDirectoryEntry(string directoryRoot, string path)
        {
            return new DirectoryEntry()
            {
                Name = path.Split('\\').Last(),
                Location = path.Split(new string[] { directoryRoot }, StringSplitOptions.None).Last(),
                ChildDirectories = System.IO.Directory.GetDirectories(path).Select(p => GetDirectoryEntry(directoryRoot, p)),
                ChildFiles = System.IO.Directory.GetFiles(path).Select(f => GetFileEntry(directoryRoot, f))
            };

        }

        private FileEntry GetFileEntry(string directoryRoot, string path)
        {
            return new FileEntry()
            {
                Name = path.Split('\\').Last(),
                Location = path.Split(new string[] { directoryRoot }, StringSplitOptions.None).Last(),
                LastChanged = System.IO.Directory.GetLastWriteTime(path),
            };
        }
    }
}
