screen = document.querySelector('input[name="screen"]')
buttons = document.querySelectorAll('button');
screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.value;
        if(buttonText == 'C')
        {
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == 'AC')
        {
            screenValue = screenValue.substring(0,screenValue.length-1);
            screen.value = screenValue;
        }
        else if(buttonText == '=')
        {
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}