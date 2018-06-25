(function (){
    $("#tabs-container .tab-content").hide();
    $("#tabs-container .tab-content:first").show();
    /* if in tab mode */
    $("#tabs-container ul.tabs-menu li").click(function() {

        $("#tabs-container .tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();

        $("#tabs-container ul.tabs-menu li").removeClass("current");
        $(this).addClass("current");
        $("#tabs-container .tab_drawer_heading").removeClass("d_active");
        $("#tabs-container .tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

    });
    /* if in drawer mode */
    $("#tabs-container .tab_drawer_heading").click(function() {

        $("#tabs-container .tab-content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#"+d_activeTab).fadeIn();

        $("#tabs-container .tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("#tabs-container ul.tabs-menu li").removeClass("active");
        $("#tabs-container ul.tabs-menu li[rel^='"+d_activeTab+"']").addClass("active");
    });
    /* Extra class "tab_last"
       to add border to right side
       of last tab */
    $('#tabs-container ul.tabs li').last().addClass("tab_last");


    /**********************************************************/


    $("#tabs-container2 .tab-content").hide();
    $("#tabs-container2 .tab-content:first").show();
    /* if in tab mode */
    $("#tabs-container2 ul.tabs-menu li").click(function() {

        $("#tabs-container2 .tab-content").hide();
        var activeTab2 = $(this).attr("rel");
        $("#"+activeTab2).fadeIn();

        $("#tabs-container2 ul.tabs-menu li").removeClass("current2");
        $(this).addClass("current2");
        $("#tabs-container2 .tab_drawer_heading").removeClass("d_active2");
        $("#tabs-container .tab_drawer_heading[rel^='"+activeTab2+"']").addClass("d_active2");

    });
    /* if in drawer mode */
    $("#tabs-container2 .tab_drawer_heading").click(function() {

        $("#tabs-container2 .tab-content").hide();
        var d_activeTab2 = $(this).attr("rel");
        $("#"+d_activeTab2).fadeIn();

        $("#tabs-container2 .tab_drawer_heading").removeClass("d_active2");
        $(this).addClass("d_active2");

        // $("#tabs-container2 ul.tabs-menu li").removeClass("active2");
        // $("#tabs-container2 ul.tabs-menu li[rel^='"+d_activeTab2+"']").addClass("active2");
    });
    /* Extra class "tab_last"
       to add border to right side
       of last tab */
    $('#tabs-container2 ul.tabs li').last().addClass("tab_last2");

    /**********************************************************/

    $('.more__link').on("click", function(e) {
        e.preventDefault();
        $(this).fadeOut();
        $(this).parents('.more ').prev().find('.gallery__images-more').css("opacity", "1").css("display", "flex");
    });

    /*menu*/
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.adaptive-nav');

    window.addEventListener('click', function(e){
        if (burger.contains(e.target)){
            // Clicked in box
            burger.classList.add('active');
            burger.querySelector('.glyphicon').classList.remove('glyphicon-align-justify');
            burger.querySelector('.glyphicon').classList.add('glyphicon-remove');
            burger.nextElementSibling.classList.add('adaptive-nav__open');
            document.querySelector('.header__container').style.zIndex = 12;
            document.body.style.overflowY = 'hidden';
        } else{
            // Clicked outside the box
            burger.classList.remove('active');
            burger.querySelector('.glyphicon').classList.remove('glyphicon-remove');
            burger.querySelector('.glyphicon').classList.add('glyphicon-align-justify');
            burger.nextElementSibling.classList.remove('adaptive-nav__open');
            document.body.style.overflowY = 'scroll';
        }
    });
    /*menu*/

    // nav's anchor
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
    // nav's anchor

})();