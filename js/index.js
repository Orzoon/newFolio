
window.addEventListener('load', function(){
    /* ------------------------*/
    /*----------ELEMENTS AND VARIABLES-----------*/
    const contents = document.querySelectorAll(".content");
    const contentsContainer = document.querySelectorAll(".container")
    const contentsContainerLength = contentsContainer.length;
    const contentsLength = contents.length;
    let aboutImage = document.querySelector(".about_me_con")
    let aboutImageContainer = document.querySelector(".about_me_image")
    let buttonAboutme = document.getElementById('button_aboutme');
    let navMenu = document.getElementById("navMenu");
    let navContainer = document.getElementById("navContainer");
    let navUl = document.getElementById("navUl");
    let closeMenu = document.getElementById('closeMenu');
    let closeIcon = document.getElementById('closeIcon');
    let navLink = document.querySelectorAll(".navLink");
    let taskLink = document.getElementById("taskApp");
    const links = [
                    "https://task-app-heroku.herokuapp.com/",
                    "https://codepen.io/orzoon/pen/gdYLow",
                    "https://codepen.io/orzoon/pen/NERoRG"
                ]
    let scrollEnd = false;
    const projectCodepenElements = document.querySelectorAll(".img_con_title h1");
    const loader = document.querySelector(".loader");
    let formButton = document.getElementById("formButton");
   
   
    /*----------------------------------------------*/
    /*------------------------------------*/
    //--------------------------------->
    /*---------FUNCTIONS--------------*/
    function execution(){
        initialDom();
        clearLoader();
        settingLayout();
        eventListeners();
        particles();
    }
    /*--------initialDOM ------*/
    function initialDom(){
        /*------Setting-Initial-DOM-styles------------ */
        for(let i = 0; i < contentsLength; i++){
            contents[i].childNodes.forEach(childNode =>  {
                childNode.style.marginTop = -50 + '%';
                childNode.style.opacity = 0;
            });
        }
        for(let i = 0; i < contentsContainerLength; i++){
            if(i === 0){
                contentsContainer[i].style.marginTop = -10 + '%';
                contentsContainer[i].style.opacity = 0;
            }else {
                contentsContainer[i].style.marginTop = -10 + '%';
                contentsContainer[i].style.opacity = 0;
            }
        }
    }
    /*--------Particles ------*/
    function particles(){
        particlesJS.load("particles-js", "./js/particles.json", function () {
        })
    }
    /*--------layoutsetting ------*/
    function settingLayout(){
        resizeCanvas();
        landingEffect();
        headImage();
        aboutmeImage();
    }
    /*--------attaching event listeners ------*/
    function eventListeners(){
        // Event Listeners
        /*--window-events--*/
        window.addEventListener('resize', debounce(resizeCanvas,200),false)
        window.addEventListener('resize', debounce(resizeImage,200),false)
        window.addEventListener('resize', debounce(aboutmeImage,200),false)
        window.addEventListener('scroll', debounce(pageScroll,50), false)
        /* elementEvents */
        //buttonAboutme.addEventListener('click', toggle)
        navMenu.addEventListener('click', toggle,false);
        closeMenu.addEventListener('click', toggle,false);
        closeIcon.addEventListener('click', toggle,false);
        buttonAboutme.addEventListener('click', scroll,false);
        formButton.addEventListener('click', formHandler, false);
        for(z= 0; z <navLink.length; z ++){
            navLink[z].addEventListener('click', scroll, false )
        }
        taskLink.addEventListener('click', function(e){
            openProjectLink(e,links[0]);
        })
        for(let s=0; s < projectCodepenElements.length; s++){
            projectCodepenElements[s].addEventListener("click", function(e){
                openProjectLink(e,links[s+1]);
            })
        }
    }
    /*--------clearing loader ------*/
    function clearLoader(){
        setTimeout(function(){
            loader.style.display = "none";
            document.body.style.overflowY = "scroll";
        }, 1500)
       
    }
    /*--------DEBOUNCE ------*/
    function debounce(func,delay){
        let timeID;

        return function(){
            if(timeID){
                clearTimeout(timeID)
            }
            timeID = setTimeout(function(){
                func.apply(this, [...arguments])
            }, delay)
        }
    }
    /*--------first landing ------*/
    function landingEffect(){
        let landingElements = document.querySelectorAll(".head_title h1, .head_button button, .head_image_con");
        let wt = window.innerWidth;
        landingElements[0].style.opacity = 0;
        landingElements[1].style.opacity = 0;
        aboutImage.style.opacity = 0;
        aboutImageContainer.opacity = 0;
        //abt_me_con.style.opacity = 0;

        if(wt <= 300 ){
            landingElements[0].style.animation = 'head_title_sm .8s 1.5s ease-in-out forwards';
            landingElements[1].style.animation = 'head_button_sm .8s .5s ease-in-out forwards';
            //animation: head_title_sm 1s ease-in-out forwards;
            //animation: head_button_sm 1s .5s ease-in-out forwards;
        }
        else if(wt > 300 && wt <=767){
            landingElements[0].style.animation = 'head_title_m 1s 1.5s ease-in-out forwards';
            landingElements[1].style.animation = 'head_button_m 1s 2s ease-in-out forwards';
        }
        else if(wt >= 768 && wt <=899){
            landingElements[0].style.animation = 'head_title_m 1s 1.5s ease-in-out forwards';
            landingElements[1].style.animation = 'head_button_m 1s 2s ease-in-out forwards';
        }
        else if(wt >= 900 && wt <= 1023){
            landingElements[0].style.animation = 'head_title_mm 1s 1.5s ease-in-out forwards';
            landingElements[1].style.animation = 'head_button_mm 1s 2s ease-in-out forwards';
        }
        else if(wt >= 1024){
            landingElements[0].style.animation = 'head_title_lg 1s 1.5s ease-in-out forwards';
            landingElements[1].style.animation = 'head_button_lg 1s 2s ease-in-out forwards';
        }
        else {
            landingElements[0].style.animation = 'head_title_llg 1s 1.5s ease-in-out forwards';
            landingElements[1].style.animation = 'head_button_llg 1s 2s ease-in-out forwards';
        }

    }
    function pageScroll(){
        // optimising
        if(scrollEnd){
            return
        }
        let screenWidth = document.documentElement.clientWidth;
        let sw = window.innerWidth;
        let screenHeight = window.innerHeight;
        /* sections Scroll */
       for(let j = 0; j < contentsLength; j++){
           let nodeElem = contents[j].childNodes;
           let nodeLength = nodeElem.length;
           if(j ===  1){
            for(let i =0; i < nodeLength; i++){
                if(nodeElem[i].getBoundingClientRect().top < (screenHeight-(screenHeight/2))){
                    nodeElem[i].style.removeProperty('margin-top');
                    nodeElem[i].style.opacity = 1;
                    if(nodeElem[i].tagName === 'P'){
                      nodeElem[i].style.transition = 'margin 2s ease-in-out, opacity 1.8s ease-in-out';
                    }
                    else{
                      nodeElem[i].style.transition = 'margin 2s  ease-in-out, opacity 1.8s ease-in-out';
                    }
                }
             }
           }
           else{
                for(let i =0; i < nodeLength; i++){
                    if(nodeElem[i].getBoundingClientRect().top < (screenHeight-(screenHeight/3))){
                        nodeElem[i].style.removeProperty('margin-top');
                        nodeElem[i].style.opacity = 1;
                        if(nodeElem[i].tagName === 'P'){
                        nodeElem[i].style.transition = 'margin 2s ease-in-out, opacity 1.8s ease-in-out';
                        }
                        else{
                        nodeElem[i].style.transition = 'margin 2s  ease-in-out, opacity 1.8s ease-in-out';
                        }
                    }
                }
           }

       }
       for(let i = 0; i < contentsContainerLength; i++){
           if(i === 0){
                if(contentsContainer[i].getBoundingClientRect().top < (screenHeight/2)){
                    contentsContainer[i].style.removeProperty('margin-top');
                    contentsContainer[i].style.opacity = 1;
                    contentsContainer[i].style.transition = 'margin 1s ease-in-out, opacity 1.8s ease-in-out'; 
                    aboutImageContainer.style.animation= 'about_me_image 1s 1.5s ease-in-out forwards';
                    if(sw <= 499){
                        console.log('hi')
                        aboutImage.style.animation = "about_me_con 1s 1.2s ease-in-out forwards";
                        //animation: about_me_con 1s 2.2s ease-in-out forwards;
                    }
                    else if(sw >= 500 && sw <= 767){
                        aboutImage.style.animation = "about_me_con_lvl_1 1.2s ease-in-out forwards";
                    }
                    else if(sw >= 768 && sw <=1023){
                        aboutImage.style.animation = "about_me_con 1s 1.2s ease-in-out forwards";
                    }
                    else if(sw >1024){
                        aboutImage.style.animation = "about_me_con_lvl_3 1s 1.2s ease-in-out forwards";
                    }
                }
           }
            else if(i === 1 && contentsContainer[i].getBoundingClientRect().top < (screenHeight-(screenHeight/2) - 60)){
                contentsContainer[i].style.removeProperty('margin-top');
                contentsContainer[i].style.opacity = 1;
                contentsContainer[i].style.transition = 'margin 2s 1s ease-in-out, opacity 1.8s 1s ease-in-out';  
            }
            else if( i === 3 || i === 4){
                if(contentsContainer[i].getBoundingClientRect().top < (screenHeight/2)){
                    contentsContainer[i].style.removeProperty('margin-top');
                    contentsContainer[i].style.opacity = 1;
                    contentsContainer[i].style.transition = 'margin 1s ease-in-out, opacity 1.8s ease-in-out';  
                }
            }
            
            else{
                if(contentsContainer[i].getBoundingClientRect().top < (screenHeight/2)){
                    contentsContainer[i].style.removeProperty('margin-top');
                    contentsContainer[i].style.opacity = 1;
                    contentsContainer[i].style.transition = 'margin 2s ease-in-out, opacity 1.8s ease-in-out'; 
                }
                if(contentsContainer[6].getBoundingClientRect().top < (screenHeight/2)){
                    scrollEnd = true;
                }        
            }
        }
    }
    function formHandler(e){
        e.preventDefault();
        let elem = document.querySelectorAll(".input");
        const data = {};
        let validated = true;
        // name check
        if(elem[0].value.match(/^[A-Za-z]+$/)){
          data[elem[0].getAttribute('name')] = elem[0].value
          elem[0].style.borderColor = 'green';
        }
        else{
            elem[0].style.borderColor = 'red';
            validated = false;
        }
        // last name check
        if(elem[1].value !== "" || elem[1].value.match(/^[A-Za-z]+$/)){
            data[elem[1].getAttribute('name')] = elem[1].value;
            elem[1].style.borderColor = 'green';
        }
        else{  
            elem[1].style.borderColor = 'red';
            validated = false;
        }
        // email check
        if(elem[2].value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            data[elem[2].getAttribute('name')] = elem[2].value;
            elem[2].style.borderColor = 'green';
        }
        else{
            elem[2].style.borderColor = 'red';
            validated = false;
        }
        // textarea
        if(elem[3].value !==""){
            data[elem[3].getAttribute('name')] = elem[3].value;
            elem[3].style.borderColor = 'green';
        }
        else {
            elem[3].style.borderColor = 'red';
            validated = false;
        }
        if(validated){}
        
    }
    // setting width and height of canvas 
    function resizeCanvas(){
        let section_container = document.getElementById('head_landing');
        let nav_navigation_container = document.querySelector('.nav_navigation');
        let nav_navigation_height = nav_navigation_container.offsetHeight;
        let  h = document.documentElement.clientHeight;
        let w = document.documentElement.clientWidth;
        let wt = window.innerWidth;
        if( (wt >= 1280 && wt <= 1439) && (h >= 750 && h <= 800)){
            section_container.style.height = (750 - nav_navigation_height) + 'px';
            console.log(section_container.style.height)
        }
        else if( wt >= 1440 && h >= 801) {
            section_container.style.height = (770 - nav_navigation_height) + 'px'
            console.log(section_container.style.height)
        }
        else{
            section_container.style.height = (h - nav_navigation_height) + 'px';
        }
    }
    // setting dynamic sizes
    function headImage(){
        let w = document.documentElement.clientWidth;
        let head_image_con = document.querySelector('.head_image_con')
        let head_image = document.querySelector('.head_image');
        if(w >= 100 && w <= 399){
            head_image_con.style.width = (w - 30)+ 'px';
            head_image.style.height = head_image_con.offsetHeight +  'px';
            head_image.style.width = head_image_con.offsetWidth + 'px';
        }
        else if(w >= 400 && w <= 499) {
            head_image_con.style.width = (w - 60)+ 'px';
            head_image.style.height = head_image_con.offsetHeight +  'px';
            head_image.style.width = head_image_con.offsetWidth + 'px';
        }
        else if(w >= 500 && w <=549){
            // head_image.style.height = head_image_con.offsetHeight + 25 +  'px';
            // head_image.style.width = head_image_con.offsetWidth + + 25 + 'px';
            head_image_con.style.width = (w - 80)+ 'px';
            head_image.style.height = head_image_con.offsetHeight +  'px';
            head_image.style.width = head_image_con.offsetWidth + 'px';
        }
        else if(w >= 550) {
            head_image.style.height = head_image_con.offsetHeight + 13 +  'px';
            head_image.style.width = head_image_con.offsetWidth + + 13 + 'px';
        }

    }
    function aboutmeImage(){
        let wt = window.innerWidth;
        let w = document.documentElement.clientWidth;
        let about_me_con = document.querySelector('.about_me_con')
        let about_me_image = document.querySelector('.about_me_image');
        if(wt >= 250 && wt <=500){
            about_me_con.style.width = (w -60) + 'px';
            about_me_image.style.width = about_me_con.offsetWidth + 'px';
            about_me_image.style.height = about_me_con.offsetHeight  +  'px';
        }
        else if(wt >=786 && wt <=899){
            about_me_image.style.height = about_me_con.offsetHeight + 15 +  'px';
            about_me_image.style.width = about_me_con.offsetWidth + 15 + 'px';
        }else {
            about_me_image.style.height = about_me_con.offsetHeight + 15 +  'px';
            about_me_image.style.width = about_me_con.offsetWidth + + 15 + 'px';
        }
        
    }
    function resizeImage(){
        let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let head_image_con = document.querySelector('.head_image_con')
        let head_image = document.querySelector('.head_image');
        if(w >= 300 && w <= 399){
            head_image_con.style.width = (w - 40)+ 'px';
            head_image.style.height = head_image_con.offsetHeight +  'px';
            head_image.style.width = head_image_con.offsetWidth + 'px';
        }
        else if(w >= 400 && w <= 499) {
            head_image_con.style.width = (w - 60)+ 'px';
            head_image.style.height = head_image_con.offsetHeight +  'px';
            head_image.style.width = head_image_con.offsetWidth + 'px';
        }
        else if(w >= 500 && w <=550){
            head_image_con.style.width = (w - 90)+ 'px';
            head_image.style.height = head_image_con.offsetHeight + 10 +   'px';
            head_image.style.width = head_image_con.offsetWidth + + 10 + 'px';
        }
        else if(w >= 550) {
            head_image.style.height = head_image_con.offsetHeight + 13 +  'px';
            head_image.style.width = head_image_con.offsetWidth + + 13 + 'px';
        }
    }
    function checkOutsideClick(e){
        //toggle(e);
        if(e.target.contains(navContainer) ){
           toggle(e);
        }
    }
    function scroll(e){
        e.preventDefault();
        if(e.target.contains(buttonAboutme)){
            let elem = document.querySelector("#about-me");
            elem.scrollIntoView(true);
        }
        else {
            toggle(e);
            let attr = e.target.getAttribute("href").trim();
            let elem = document.querySelector(attr);
            elem.scrollIntoView(true);
        }
    }
    function toggle(e){
        e.preventDefault();
        //navContainer.style.right = 0;
        if(window.getComputedStyle(navContainer).getPropertyValue('right') ===  '0px'){
            navContainer.classList.remove("showNavCon")
            navUl.classList.remove("showMblMenu")
            window.removeEventListener('click', checkOutsideClick,false)
        }
        else{
            navContainer.classList.add("showNavCon")
            navUl.classList.add("showMblMenu")
            window.addEventListener('click', checkOutsideClick,false)
        }
        //navUl.classList.add("showMblMenu")
        //navUl.classList.add('showMblMenu')
    }
    function openProjectLink(e,projectLink){
        e.preventDefault();
        window.open(projectLink, "_blank").focus();
    }
    /*-----------------------------*/
    execution();
    /*-----------------------------*/
})