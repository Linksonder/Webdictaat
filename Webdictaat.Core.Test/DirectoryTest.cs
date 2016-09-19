using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core.Test
{
    
    public class DirectoryTest
    {

        private Webdictaat.Core.Directory _dir;

        public DirectoryTest()
        {
            _dir = new Webdictaat.Core.Directory();
        }

        [Test]
        public void DirectoryTest_GetDirectoryDetails_Success()
        {
            //1. 2. arrange and act
            DirectoryDetails result = _dir.GetDirectoryDetails("C:/Webdictaat/", "Prog5");

            //3. assert
            Assert.AreEqual("Prog5", result.Name);
            Assert.AreEqual(2, result.RootEntry.ChildDirectories.Count());
            Assert.AreEqual(2, result.RootEntry.ChildDirectories.Last().ChildDirectories.Count());
            Assert.AreEqual(1, result.RootEntry.ChildFiles.Count());

        }

    }
}
