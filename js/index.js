window.addEventListener('load', () => {



    particlesJS.load("particles-js", "./js/particles.json", function () {
        console.log('particles loaded');
        })


    function resizeCanvas(){
        let section_container = document.getElementById('head_landing');
        let nav_navigation_container = document.querySelector('.nav_navigation');
        let nav_navigation_height = nav_navigation_container.offsetHeight;
        let  window_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        section_container.style.height = (window_height - nav_navigation_height) + 'px';
    }
    resizeCanvas();

    //adding EventListeners
    window.addEventListener('resize', resizeCanvas)


    // setting dynamic sizes
    function headImage(){
        let head_image_con = document.querySelector('.head_image_con')
        let head_image = document.querySelector('.head_image');
        head_image.style.height = head_image_con.offsetHeight + 25 +  'px';
        head_image.style.width = head_image_con.offsetWidth + + 25 + 'px';
    }

    function aboutmeImage(){
        let about_me_con = document.querySelector('.about_me_con')
        let about_me_image = document.querySelector('.about_me_image');
        about_me_image.style.height = about_me_con.offsetHeight + 25 +  'px';
        about_me_image.style.width = about_me_con.offsetWidth + + 25 + 'px';
    }
    aboutmeImage()
    headImage();


})