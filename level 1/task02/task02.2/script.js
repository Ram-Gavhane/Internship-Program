function greet(){

    const container = document.getElementById("container");
    container.innerHTML="";
    const newDiv = document.createElement('div');
    let currtime = new Date();
    const time = currtime.getHours();
    if(time<12){
        newDiv.innerHTML = "Hello! Good Morning" ;
    }else if(time>12 && time < 17){
        newDiv.innerHTML = "Hello! Good Afternoon" ;
    }else if(time>=17 && time < 20){
        newDiv.innerHTML = "Hello! Good Evening" ;
    }else{
        newDiv.innerHTML = "Hello! Good Night" ;
    }
    
    newDiv.style.fontSize="24px";
    container.appendChild(newDiv);
}