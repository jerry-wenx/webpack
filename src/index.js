import aaa from './index.css';
import iless from './index.less';
import catimg from './cat.jpg';
import sass from './index.scss';
document.body.style.backgroundColor = "pink";
var img = document.createElement("img");
img.src = catimg;
document.body.appendChild(img);


var arr=[10,20,30];
    arr.forEach((i,v)=>{
        console.log(i,v);
    });