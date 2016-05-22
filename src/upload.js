class Uploader {
    constructor(_vscode) {        //构造函数，传入vscode对象
        this.vscode = _vscode;
        this.init();
    }
 
    init() {                      //初始化
        var vscode = this.vscode;
        var StatusBarAlignment = vscode.StatusBarAlignment;
        var window = this.vscode.window;
        var qiniu = require("qiniu");
        //statusBar，是需要手动释放的
        this.statusBar = window.createStatusBarItem(StatusBarAlignment.Left);
        this.inputBox = window.showInputBox({prompt: 'What is your picture path?'})
            .then(val => {
                //需要填写你的 Access Key 和 Secret Key
                qiniu.conf.ACCESS_KEY = '';
                qiniu.conf.SECRET_KEY = '';

                //要上传的空间
                var bucket = '';

                //上传到七牛后保存的文件名
                var key = (new Date()).getTime().toString();
                console.log(key);

                //构建上传策略函数
                function uptoken(bucket, key) {
                var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
                    return putPolicy.token();
                }

                //生成上传 Token
                var token = uptoken(bucket, key);

                //要上传文件的本地路径
                var filePath = val;

                //构造上传函数
                function uploadFile(uptoken, key, localFile) {
                    var extra = new qiniu.io.PutExtra();
                        qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
                        if(!err) {
                            // 上传成功， 处理返回值
                            console.log(ret.hash, ret.key);
                            window.showInformationMessage('上传成功! URL: http://xxxxxx.com/' + ret.key);
                        } else {
                            // 上传失败， 处理返回代码
                            console.log(err);
                            window.showInformationMessage('上传失败!');
                        }
                    });
                }

                //调用uploadFile上传
                uploadFile(token, key, filePath);
                
                console.log(val)});
                
        //跟注册事件相配合的数组，事件的注册，也是需要释放的
        var disposable = [];
        //事件在注册的时候，会自动填充一个回调的dispose到数组
        // window.onDidChangeTextEditorSelection(this.updateSuccess, this, disposable);
 
        //保存需要释放的资源
        // this.disposable = vscode.Disposable.from(disposable);
 
        // this.updateText();
        // this.statusBar.show();
    }
 
    // uloadSuccess() {
    //     var window = this.vscode.window;
    //     this.editor = window.activeTextEditor;
    //     var content = this.editor.document.getText();
    //     this.statusBar.text = `上传成功`;
    // }
    
    // uploadFailure() {
    //     var window = this.vscode.window;
    //     this.editor = window.activeTextEditor;
    //     var content = this.editor.document.getText();
    //     this.statusBar.text = `上传失败，`;
    // }
 
    dispose() {  //实现dispose方法
        // this.disposable.dispose();
        // this.statusBar.dispose();
    }
}
 
module.exports = Uploader;