var readInput= function(){
  var input=document.getElementById('input1');
  console.log(input.value);


}
var btn2 = document.createElement('button');
 btn2.innerHTML = "버튼2";
 btn2.onclick = readInput;
var test= document.getElementById('test');
test.appendChild(btn2);
