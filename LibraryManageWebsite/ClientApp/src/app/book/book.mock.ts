import { BookInfo } from "./book.model";

var bookInfos: Array<BookInfo> = [
    {
        ISBN: 9787020002207, name: "红楼梦", author: "[清] 曹雪芹 / 高鹗", publisher: "人民文学出版社", publishYear: 2017, version: 1, priority: "普通", count: 4, loanCount: 1, totalLoanCount: 16,
        intro: `《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线，以四大家族的荣辱兴衰为背景，描绘出18世纪中国封建社会的方方面面，以及封建专制下新兴资本主义民主思想的萌动。结构宏大、情节委婉、细节精致，人物形象栩栩如生，声口毕现，堪称中国古代小说中的经 典。
        由红楼梦研究所校注、人民文学出版社出版的《红楼梦》以庚辰（1760）本《脂砚斋重评石头记》为底本，以甲戌（1754）本、已卯（1759）本、蒙古王府本、戚蓼生序本、舒元炜序本、郑振铎藏本、红楼梦稿本、列宁格勒藏本（俄藏本）、程甲本、程乙本等众多版本为参校本，是一个博采众长、非常适合大众阅读的本子；同时，对底本的重要修改，皆出校记，读者可因以了解《红楼梦》的不同版本状况。
        红学所的校注本已印行二十五年，其间1994年曾做过一次修订，又十几年过去，2008年推出修订第三版，体现了新的校注成果和科研成果。
        关于《红楼梦》的作者，原本就有多种说法及推想，“前八十回曹雪芹著、后四十回高鹗续”的说法只是其中之一，这次修订中校注者改为“前八十回曹雪芹著；后四十回无名氏续，程伟元、高鹗整理”，应当是一种更科学的表述，体现了校注者对这一问题的新的认识。
        现在这个修订后的《红楼梦》是更加完善。`
    },
    { ISBN: 9787805200132, name: "三国演义", author: "罗贯中", publisher: "人民邮电出版社", publishYear: 1986, version: 30, priority: "普通", count: 7, loanCount: 1, totalLoanCount: 2 },
    { ISBN: 9787805200552, name: "西游记", author: "吴承恩", publisher: "人民邮电出版社", publishYear: 1994, version: 5, priority: "普通", count: 5, loanCount: 1, totalLoanCount: 3 },
    { ISBN: 9787544270878, name: "解忧杂货店", author: "[日] 东野圭吾", publisher: "机械工业出版社", publishYear: 2014, version: 1, priority: "普通", count: 2, loanCount: 0, totalLoanCount: 6 },
    { ISBN: 9787101067293, name: "水浒传", author: "罗贯中/施耐庵 ", publisher: "中华书局", publishYear: 2009, version: 1, priority: "普通", count: 5, loanCount: 0, totalLoanCount: 6 },
    { ISBN: 9787040205497, name: "高等数学（上册）", author: "同济大学数学系", publisher: "高等教育出版社", publishYear: 2007, version: 1, priority: "普通", count: 5, loanCount: 1, totalLoanCount: 7 },
    { ISBN: 9787540232863, name: "鲁迅学术经典全集", author: "鲁迅", publisher: "北京燕山出版社", publishYear: 2013, version: 1, priority: "普通", count: 3, loanCount: 1, totalLoanCount: 9 },
    { ISBN: 9787500129332, name: "日语入门:零起点图解一看就会", author: "川边成/张浩然", publisher: "中国对外翻译出版", publishYear: 2014, version: 1, priority: "普通", count: 4, loanCount: 1, totalLoanCount: 9 },
    { ISBN: 9787508052496, name: "世界文明史:东方的遗产", author: "[美] 威尔·杜兰特", publisher: "华夏出版社", publishYear: 2010, version: 1, priority: "普通", count: 1, loanCount: 0, totalLoanCount: 0 },
    { ISBN: 9787508052557, name: "世界文明史:理性开始的时代", author: "[美]威尔·杜兰特", publisher: "华夏出版社", publishYear: 2010, version: 1, priority: "普通", count: 2, loanCount: 0, totalLoanCount: 0 },
    { ISBN: 9787115275790, name: "JavaScript高级程序设计", author: "[美]Nicholas C·Zakas", publisher: "人民邮电出版社", publishYear: 2012, version: 1, priority: "普通", count: 2, loanCount: 0, totalLoanCount: 0 },
    { ISBN: 9787508476353, name: "深入浅出WPF", author: "刘铁猛", publisher: "中国水利水电出版社", publishYear: 2010, version: 1, priority: "普通", count: 2, loanCount: 0, totalLoanCount: 0 },
    { ISBN: 9787544253994, name: "百年孤独", author: "[哥]加西亚·马尔克斯", publisher: "南海出版公司", publishYear: 2011, version: 1, priority: "普通", count: 2, loanCount: 0, totalLoanCount: 5 }
];

export { bookInfos }