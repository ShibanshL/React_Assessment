export function pop(){
    var popup = document.querySelector('.Main .Popup')

    if(window.screen.width>500){
        popup.style.display='flex'
    }
    else{
        popup.style.display='none'
    }
}