using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoAssemblies.Domain
{
    public class Student
    {
        private string name;

        public void Talk()
        {
            Console.WriteLine("Hi, my name is " + name);
        }

        
    }
}
