(function(){
    let screen= document.querySelector('.screen');
    let button=document.querySelectorAll('.Btn');
    let clear=document.querySelector('.green');
    let equal=document.querySelector('.red');
    
    button.forEach(function(buttons){
        buttons.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value +=value;
        })
    })

    equal.addEventListener('Click',function(e){
        if(screen.value ===''){
            screen.value=="";
        }else{
            let answer=eval(screen.value);
            screen.value=answer;
        }
    })
    clear.addEventListener('click',function(e){
        screen.value="";
    })
})();