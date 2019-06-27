const fs = require('fs')
const path = require('path')
let file = './src/draw/js/sidebar'
const filePath = path.resolve(__dirname, file)
const sideBars = fs.readdirSync(filePath)
//sidebar子文件添加Sidebar
sideBars.map(item => {
  if (item !== 'Sidebar.js') {
    let data = fs.readFileSync(file + '/' + item, 'utf8')
    fs.writeFileSync(file + '/' + item, `import { Sidebar } from '@/grapheditor/js/Sidebar';\n` + data, 'utf8')
  }
})
//sidebar添加子文件
let arr = sideBars.filter(item => item !== 'Sidebar.js').map(item => `import './${item}'\n`)
let data = fs.readFileSync(file + '/SideBar.js', 'utf8')
fs.writeFileSync(file + '/SideBar.js', arr.join('') + data, 'utf8')



