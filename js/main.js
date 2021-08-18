const buttonUp = document.querySelector('.conter-up');
const buttonDown = document.querySelector('.counter-down');
const homeItems = document.querySelectorAll('.home-item');
const counter = document.querySelector('.counter');
let homeFloor = [];
let changeFloor = counter.innerText;

function clearFloor (homeItems){
    homeItems.forEach(homeItem =>{
        homeItem.classList.remove('home-active');  });
}

function beautyCounter(changeFloor){
    if (changeFloor>=10){
        return counter.innerText=changeFloor;
    } else{
        return counter.innerText= '0'+changeFloor;
    };;
}

if (changeFloor[0]==0){
    changeFloor=changeFloor[1];
}
changeFloor=Number(changeFloor);

homeItems.forEach(homeItem =>{
    homeFloor.push(homeItem);
});
homeItems.forEach(homeItem =>{
    homeItem.addEventListener('click', ()=>{
        clearFloor (homeItems);
        for (let i=0; i<17; i++){              
        homeItem.classList.add('home-active');
            if (homeFloor[i]==homeItem){
                changeFloor = i+1;
                counter.innerText=beautyCounter(changeFloor);
            }     
        };
    
    });
});

buttonDown.addEventListener('click', ()=>{
    
    if (changeFloor>1){
        clearFloor (homeItems);
        changeFloor=changeFloor-1;
        counter.innerText=beautyCounter(changeFloor);
    
        homeItems.forEach(homeItem=>{
            if (homeItem==homeFloor[changeFloor-1]){
                homeItem.classList.add('home-active');
            }
        });      
    };
    
});

buttonUp.addEventListener('click',()=>{
    
    if (changeFloor<17){
        clearFloor (homeItems);
        changeFloor=changeFloor+1;
        counter.innerText=beautyCounter(changeFloor);

        homeItems.forEach(homeItem=>{
            if (homeItem==homeFloor[changeFloor-1]){
                homeItem.classList.add('home-active');
            };
        });

    };
});

homeItems.forEach(homeItem=>{
    homeItem.addEventListener('mouseover', ()=>{
        let countFloor = changeFloor;
        for (let i=0; i<17; i++){              
            if (homeFloor[i]==homeItem){
                countFloor = i+1;
                counter.innerText=beautyCounter(countFloor);
            }     
        };
    });
    homeItem.addEventListener('mouseout', ()=>{
                counter.innerText=beautyCounter(changeFloor);
    });
})