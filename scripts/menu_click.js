let menuState = "CLOSED", lastScrollPos;

const handleMenuClick = () => {
    
    let bars = document.getElementById("menu_bars").getElementsByTagName("div"), i,
        main = document.getElementsByTagName("main")[0],
        footer = document.getElementsByTagName("footer")[0],
        menu_info = document.getElementsByClassName("menu_info")[0],
        header = document.getElementsByTagName("header"), menuInfoHeight;

    if(menuState === "CLOSED"){
        for(i=1; i<bars.length; i++){
            bars[i].style.width = "100%";
        }
        
        lastScrollPos = window.scrollY;
        window.scrollTo(0,0);
        menuInfoHeight = menu_info.getBoundingClientRect().height;

        console.log(menuInfoHeight);
        main.style.height = menuInfoHeight + "px";
        menu_info.style.width = "100%";
        footer.style.display = "none";

        menuState = "OPEN";
    
    } else if( menuState === "OPEN"){
        for (i=1; i<bars.length; i++){
            if(i === 1)
                bars[i].style.width = "50%";
            else
                bars[i].style.width = "25%";
        }

        main.style.height = "auto";
        menu_info.style.width = "0%";
        footer.style.display = "block";
        if(lastScrollPos !== undefined)
            window.scrollTo(0, lastScrollPos);
        menuState = "CLOSED";
    }
    
    return null;

}

