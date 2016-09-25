using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core.Test
{
    public class FileReaderTest
    {

        private Webdictaat.Core.File _fileReader;

        public FileReaderTest()
        {
            _fileReader = new Webdictaat.Core.File();
        }

        [Test]
        public void DirectoryTest_TryReadFile_Success()
        {
            //1. 
            string content = null;

            //2. act
            bool result = _fileReader.TryReadFile("C:/Webdictaat.test/Prog5/index.html", out content);

            //3. assert
            Assert.IsTrue(result);
            Assert.AreEqual("abcdefg", content);
        }

        [Test]
        public void DirectoryTest_TryReadFile_Fail()
        {
            //1. 
            string content = null;

            //2. act
            //Wrong file name!
            bool result = _fileReader.TryReadFile("C:/Webdictaat/Prog5/helloworldd.txt", out content);

            //3. assert
            Assert.IsFalse(result);
            Assert.IsNull(content);
        }
    }
}
