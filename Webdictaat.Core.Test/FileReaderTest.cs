using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core.Test
{
    public class FileReaderTest
    {

        private Webdictaat.Core.FileReader _fileReader;

        public FileReaderTest()
        {
            _fileReader = new Webdictaat.Core.FileReader();
        }

        [Test]
        public void DirectoryTest_TryReadFile_Success()
        {
            //1. 
            File resultFile = null;

            //2. act
            bool result = _fileReader.TryReadFile("C:/Webdictaat/Prog5/helloworld.txt", out resultFile);

            //3. assert
            Assert.IsTrue(result);
            Assert.AreEqual("abcdefg", resultFile.Source);
        }

        [Test]
        public void DirectoryTest_TryReadFile_Fail()
        {
            //1. 
            File resultFile = null;

            //2. act
            //Wrong file name!
            bool result = _fileReader.TryReadFile("C:/Webdictaat/Prog5/helloworldd.txt", out resultFile);

            //3. assert
            Assert.IsFalse(result);
            Assert.IsNull(resultFile);
        }
    }
}
