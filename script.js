var add = document.getElementById('add');

add.addEventListener('click',function(){
    var input = document.getElementById('input').value;
    var randomtext = document.createTextNode(input);
    var element = document.createElement('li');
    element.appendChild(randomtext);
    var ol = document.getElementById('OlItem');
    ol.appendChild(element);
})