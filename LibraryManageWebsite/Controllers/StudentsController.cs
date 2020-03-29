using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManageWebsite.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManageWebsite.Controllers
{
    public class StudentsController : Controller
    {
        // GET: Students
        public List<Student> Index()
        {
            var stus = new List<Student>()
            {
                new Student("钟代群", 23, "山西省大同市三观正街","打篮球，打羽毛球，听音乐，唱歌"),
                new Student("杨融", 23, "陕西省西安市惠民小路","踢毽子，打羽毛球，打乒乓球，唱歌"),
                new Student("郑新立", 23, "北京市朝阳区","跳高，打羽毛球，听音乐，唱歌"),
                new Student("赵飞南", 23, "浙江省杭州市西湖","跑步，听音乐，唱歌"),
                new Student("张馨晨", 23, "山西省大同市三观正街","看书，听音乐，唱歌"),
                new Student("王伟", 23, "山西省大同市三观正街","唱歌"),
                new Student("李兰群", 23, "山西省大同市三观正街","游泳"),
            };
            return stus;
        }

        // GET: Students/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Students/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Students/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Students/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Students/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Students/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Students/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}