1.

2. updateUi
3. EditorUi.cacheUrl = (urlParams['dev'] == '1') ? '/cache'
4. // this.editor.graph.model.clear();
   // this.editor.undoManager.clear();报错

5) App.main() 去除 mxUtils 加载资源，直接改成 js 获取
6) 图片资源改成 require()
