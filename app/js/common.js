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


})();