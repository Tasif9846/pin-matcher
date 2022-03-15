function generatePin() {
    const val = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('displayPin').value = val;
}

document.getElementById('keyPad').addEventListener('click' ,function(event){
 const numbers=event.target.innerText;
 const calcInput=document.getElementById('typeNumbers');
 if (isNaN(numbers)) {
    if (numbers == 'C') {
        calcInput.value = '';
    }
    else if(numbers=='<'){
        calcInput.value = calcInput.value.slice(0,-1);
    }
}
else {
    const previousNumber = calcInput.value+=numbers;
}
});


function clickButtons(){
    const pin=document.getElementById('displayPin').value;
    const typeNumbers=document.getElementById('typeNumbers').value;
    const notifySuccess=document.getElementById('notifySuccess');
    const notifyFailed=document.getElementById('notifyFailed');
    const SubmitArea=document.getElementById('Submit_area').value;

    if(pin == typeNumbers){
        notifySuccess.style.display='block';
        notifyFailed.style.display='none';
    }
    else{
        notifySuccess.style.display='none';
        notifyFailed.style.display='block';
    }
    document.getElementById('typeNumbers').value="";
}