window.addEventListener('load', function(){
    // loading particles js
    particlesJS.load("particles-js", "./js/particles.json", function () {
        console.log('particles loaded');
        })

    // setting width and height of canvas 
    function resizeCanvas(){
        let section_container = document.getElementById('head_landing');
        let nav_navigation_container = document.querySelector('.nav_navigation');
        let nav_navigation_height = nav_navigation_container.offsetHeight;
        let  h = document.documentElement.clientHeight;
        let w = document.documentElement.clientWidth;
        let wt = window.innerWidth;
        if( (wt >= 1280 && wt <= 1439) && (h >= 750 && h <= 800)){
            console.log('1')
            section_container.style.height = (750 - nav_navigation_height) + 'px';
            console.log(section_container.style.height)
        }
        else if( wt >= 1440 && h >= 801) {
            console.log('2')
            section_container.style.height = (770 - nav_navigation_height) + 'px'
            console.log(section_container.style.height)
        }
        else {
            section_container.style.height = (h - nav_navigation_height) + 'px';
        }

        aboutmeImage();
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

    // functions invoking
    resizeCanvas();
    aboutmeImage()
    headImage();

    // Event Listeners
     window.addEventListener('resize', resizeCanvas)
     window.addEventListener('resize', resizeImage)
})