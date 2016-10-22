# MDHelper
A vscode  extension for inserting pictures in markdown
## About
This extension privodes a much easier way to insert pictures in your Markdown articles.
When we wirte Markdown articles, we will use pictures to help express ourselves more or less.
But we need to put the pictures to the right place so that our articles can find the pictures.
Many people will put the pictures with the [.md] files and upload them to [Github] toegther.
And many smart people will put the pictures to [cloud]. My idea is also uplaoding the pictures
to [cloud], and I make this extension to help you upload pictures and wirte articles both in your editor-VSCode.
VSCode is a wonderful editor to build [Font-end] project. Also, it's very convenient to wirte Markdown.
## Prerequisites
 1. Install VSCode   
 2. Have the git and node.js environment
 3. Have the Qiniu account.(Qiniu is a cloud platform to manage your resources)
  
## Install
 1. Downlaod this extension in <a>https://github.com/jimxiang/MDHelper</a>   
 Or clone it:
 ```
 git clone https://github.com/jimxiang/MDHelper.git
 ```    
 2. Add the extension manually.   
 
  . Extract the package if you download the extension.   
  
  . Right click the extracted directory and choose <b>git bash here</b>  
   
  . Run the command in your git bash
  ```
  npm install
  ```
  . Enter your VSCode installation directory.   
  
  . Enter into directory: <b>resources/app/extensions</b>   
  
  . Copy the project into the directory.   
  
  . Restart your VSCode   

## Configuration
 1. Open the <b>src/upload.js</b>, and add your Qiniu's Access Key, Secret Key and Bucket name:

 ![example-3](http://o7bp9e1ec.bkt.clouddn.com/1463891004008)

 2. Add your bucket url: 

 ![example-4](http://o7bp9e1ec.bkt.clouddn.com/1463891071614)
 
## VSCode Configuration
Open the 'keybindings.json', add a piece of shortcut key. Eg: 

```
keybindings.json

[{
    "key": "ctrl+alt+u",
    "command": "extension.upload",
    "when": "editorTextFocus"
}...]
```
###Attention: The shortcut key should be same with the package.json! 
. keybindings.json
![config-example2](http://o7bp9e1ec.bkt.clouddn.com/1477123609597)

. package.json
![config-example3](http://o7bp9e1ec.bkt.clouddn.com/1477123646492)

## Usage
In your [.md] files, if your want to insert a picture, press
```
Ctrl + Alt + U
```
Then you can see a input box:

![example-1](http://o7bp9e1ec.bkt.clouddn.com/1463890106303)

Put the picture's full path in your computer and press [Enter].   

Next you will see the uploading result. If it is successful, you will get the picture's URL and use it to add the picture.

![example-2](http://o7bp9e1ec.bkt.clouddn.com/1463890443176)

That's all. Nice work, isn't it? :smiley:

## Defect
Because this is my first time to create a vscode extension, this is some thing wrong with it that you can only upload one picture at one time, if you want to uplaod more you need restart the editor. I'll fix this bug later.

##License
MIT License
