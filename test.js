const fs = require('fs')
const path = require('path')
// let sidebarFile = './src/draw/js/sidebar'
// const filePath = path.resolve(__dirname, sidebarFile)
// const sideBars = fs.readdirSync(filePath)
// //sidebar子文件添加Sidebar
// sideBars.map(item => {
//   if (item !== 'Sidebar.js') {
//     let data = fs.readFileSync(sidebarFile + '/' + item, 'utf8')
//     fs.writeFileSync(sidebarFile + '/' + item, `import { Sidebar } from '@/grapheditor/js/Sidebar';\n` + data, 'utf8')
//   }
// })
// //sidebar添加子文件
// let arr = sideBars.filter(item => item !== 'Sidebar.js').map(item => `import './${item}'\n`)
// let data = fs.readFileSync(sidebarFile + '/SideBar.js', 'utf8')
// fs.writeFileSync(sidebarFile + '/SideBar.js', arr.join('') + data, 'utf8')

let shape = './src/draw/shapes'
const filePath = path.resolve(__dirname, shape)
const shapeBars = fs.readdirSync(filePath)
shapeBars.map(item => {
  if (item.indexOf('.js') > -1) {
    let data = fs.readFileSync(shape + '/' + item, 'utf8')
    fs.writeFileSync(shape + '/' + item, `import '@/grapheditor/js/Shapes';\nimport { Graph } from '@/grapheditor/js/Graph';\n` + data, 'utf8')
  }
})
// console.log(shapeBars)



