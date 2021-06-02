document.body.style.backgroundImage = "url('bore2.jpg')";

var div = document.createElement('div');
var h1 = document.createElement('h1');
h1.innerHTML = "Are you Bored?????";
h1.style.position = 'absolute';
h1.style.top = '5%';
h1.style.left = '35%';
div.append(h1);
document.body.append(div);

function changeImage(){
    document.body.innerHTML = '';
    document.body.style.backgroundImage = "url('thanks.jpeg')";
    
}

fetch("https://www.boredapi.com/api/activity")
.then((result)=>{
    return result.json();
})
.then((data)=>{

    var button = document.createElement('button');
    button.setAttribute('class','btn btn-primary');
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#exampleModal');
    button.innerHTML = "Lets find Something to you to do";
    button.style.position = 'absolute';
    button.style.top = '15%';
    button.style.left = '37%';

    var msg = document.getElementsByClassName('modal-body');
    msg[0].innerHTML = data.activity;

    document.body.append(button);

})
.catch((error)=>{
    console.log(error);
})