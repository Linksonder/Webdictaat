using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.Domain;

namespace Webdictaat.Core
{
    public interface IDirectory
    {
        IEnumerable<DirectorySummary> GetDirectoriesSummary(string path);
        DirectoryDetails GetDirectoryDetails(string path);
        IEnumerable<FileSummary> GetFilesSummary(string path);
    }

    public class Directory : IDirectory
    {

        public IEnumerable<DirectorySummary> GetDirectoriesSummary(string directoryRoot)
        {
            string[] directories = System.IO.Directory.GetDirectories(directoryRoot);

            return directories.Select(d => new DirectorySummary()
            {
                Name = d.Split('\\').Last(),
                LastChange = System.IO.Directory.GetLastWriteTime(d),
            });
        }

        public DirectoryDetails GetDirectoryDetails(string path)
        {
            return new DirectoryDetails()
            {
                Name = path.Split('\\').Last(),
                RootEntry = GetDirectoryEntry(path)
            };
        }

        public IEnumerable<FileSummary> GetFilesSummary(string path)
        {
            return System.IO.Directory.GetFiles(path).Select(f => GetFileEntry(f));
        }

        /// <summary>
        /// Returns a object of DirectoryEntry containing details of a directory and a list of sub directories and files
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        private DirectoryEntry GetDirectoryEntry(string path)
        {
            return new DirectoryEntry()
            {
                Name = path.Split('\\').Last(),
                ChildDirectories = System.IO.Directory.GetDirectories(path).Select(p => GetDirectoryEntry(p)),
                ChildFiles = System.IO.Directory.GetFiles(path).Select(f => GetFileEntry(f))
            };
        }

        private FileSummary GetFileEntry(string path)
        {
            return new FileSummary()
            {
                Name = path.Split('\\').Last().Split('.').FirstOrDefault(),
                LastChanged = System.IO.Directory.GetLastWriteTime(path),
            };
        }
    }
}
