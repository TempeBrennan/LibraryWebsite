using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManageWebsite.Model
{
    public class Student
    {
        public Student(string name, int age, string address, string hobby)
        {
            this.Name = name;
            this.Age = age;
            this.Address = address;
            this.Hobby = hobby;
        }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
        public string Hobby { get; set; }
    }
}
