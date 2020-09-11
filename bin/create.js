#! /usr/bin/env node
var cmd=require('node-cmd');

cmd.get(
    `git clone https://github.com/GoodPig/wxreact.git`,
    function(err, data, stderr){
        if (err) {
            console.log(err)
        } else {
            console.log('欢迎使用曦哥的脚手架，你是一个很有品位的人。')
            console.log('cd wxreact')
            console.log('yarn start')
        }
    }
);

