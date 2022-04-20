/*
  - 取得class.img
  - 點擊圖片函數
    - 宣告：取得圖片路徑
    - 如果圖片路徑 = Ａ那就顯示B，不然就顯示A
 */
import imgA from "../img/example/test4.jpeg";
import imgB from "../img/example/test5.jpeg";
var myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === './img/test4.jpeg') {
    myImage.setAttribute ('src','./img/test5.jpeg');
  } else {
    myImage.setAttribute ('src','./img/test4.jpeg');
  }
}

/* *
* 選擇html button myButton
* 選擇html h1 myHeading
* */

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*
* 函數：設定使用者的名稱setUserName
  * 宣告：myName為彈跳文字視窗prompt ，請輸入您的名字
  * 設定瀏覽器固定儲存的localStorage的name 為myName
  * myHeading放入html文字為 您的名稱為輸入的名稱
*/

function setUserName(){
  let myName = prompt('請輸入您的名稱');
  localStorage.setItem('name',myName);
  myHeading.innerHTML(myName);
}

/*
* if 如果名稱不存在，執行設定名稱setUserName，如果存在，顯示名稱
*/

if(!localStorage.getItem('name')){
  setUserName();
}else{
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML(storedName)
}