// 官方文档 http://nodejs.cn/api/path.html#path_path_delimiter
const path = require('path')

// 关于路径
// windows风格是：C:\\temp\\myfile.html (`\\`是为了表示`\`)
// POSIX 系统使用：/tmp/myfile.html
// > POSIX，Portable Operating System Interface，
// > 是 UNIX 系统的一个设计标准，Linux、Mac OS等都兼容这个标准

// 所以要小心路径的兼容问题，一般使用join来拼接路径，它会根据操作系统自动转换 `/` or `\`。


// 下面演示一些常用方法

// 1.basename()
// 返回路径的basename

const a = path.basename('C:/temp/myfile.html')
console.log(a) // 'myfile'

// 2.parse()
// 解析路径，返回元信息对象
const b = path.parse('/home/user/dir/file.txt')
console.log(b);
/* 
{ root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file' }
*/

// 3.format()
// parse方法的反操作，根据元信息对象返回路径字符串
const c = path.format({
    root: '/',
    dir: '/home/user/dir',
    base: 'file.txt'
})
console.log(c);
// '/home/user/dir/file.txt'

// 4. normalize()
// 规范化路径
const d = path.normalize('/foo/bar//baz/asdf/quux/..')
console.log(d); // '/foo/bar/baz/asdf'

// 5. join([...paths])
// 将给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径
// 为了避免不同平台的差异，总是使用这个方法来拼接文件路径
const e = path.join('/目录1', '目录2', '目录3/目录4', '目录5', '..')
console.log(e);
// windows返回：'\目录1\目录2\目录3\目录4'
// POSIX返回：'/目录1/目录2/目录3/目录4'

// 在使用中经常会这样来拼接文件路径
// __dirname返回当前文件所在的绝对路径
path.join(__dirname, '/foo')

// 6.path.relative(from, to)
// 根据当前工作目录返回 from 到 to 的相对路径
// POSIX上
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'

// 在 Windows 上：
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// 返回: '..\\..\\impl\\bbb'

// 7.path.resolve([...paths])
// 将路径或路径片段的序列解析为绝对路径
// 该方法是从右到左处理的，直到构造出绝对路径

path.resolve('/目录1/目录2', './目录3');
// 返回: '/目录1/目录2/目录3'

path.resolve('/目录1/目录2', '/目录3/目录4/');
// 已经构造出绝对路径所以返回: '/目录3/目录4'

path.resolve('目录1', '目录2/目录3/', '../目录4/文件.gif');
// 到最后还没有构造出绝对路径，会根据当前工作区构造
// 假如当前工作目录是 /目录A/目录B，
// 则返回 '/目录A/目录B/目录1/目录2/目录4/文件.gif'



console.log(path.dirname('/home/bin/1.txt')) //返回 path 的目录名

console.log(path.extname('/home/bin/1.txt')) //返回 path 的扩展名

console.log(path.sep)// 这个方法返回平台的路径分割符 `/` 或 `\`
// 使用例子
// windows下
console.log('foo\\bar\\baz'.split(path.sep))// 返回: ['foo', 'bar', 'baz']
// POSIX 下
'foo/bar/baz'.split(path.sep) // 返回: ['foo', 'bar', 'baz']

// path.isAbsolute() 方法检测 path 是否为绝对路径。
// POSIX
path.isAbsolute('/foo/bar'); // true
path.isAbsolute('qux/');     // false
//  windows
path.isAbsolute('//server');    // true
path.isAbsolute('bar/baz');     // false
path.isAbsolute('bar\\baz');    // false


