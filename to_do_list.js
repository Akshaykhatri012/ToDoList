let lists = document.getElementById('lists');
let primary = Array.from(document.getElementsByClassName('bttn'));
let field = document.getElementById('field');

primary.map(bttn => {
 bttn.addEventListener('click', function(){
     var paragraph = document.createElement('p');
     paragraph.classList.add('list-container');
     paragraph.innerText = field.value;
     lists.appendChild(paragraph);
     field.value = " "
     
     paragraph.addEventListener('click', function(){
         paragraph.style.textDecoration = 'line-through';
     })

     paragraph.addEventListener('dblclick', function(){
          lists.removeChild(paragraph);
         
     })
 })
})
    