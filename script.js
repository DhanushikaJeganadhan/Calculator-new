(function(){
    let screen= document.querySelector('.screen');
    let button=document.querySelectorAll('.Btn');
    let clear=document.querySelector('.green');
    let equal=document.querySelector('.red');
    
    button.forEach(function(buttons){
        buttons.addEventListener('click',function(event){
            let value=event.target.dataset.num;
            screen.value+=value;
        })
    })
    //dsf
    


})();