$($(window).scroll(function (){

    if($(".book-toc").offset().top - $(window).scrollTop() < 120){
        $(".book-toc nav").css({
            "position": "fixed",
            "top": "120px",
            "right": "200px",
            "bottom": "unset"
        })
    }else{
        $(".book-toc nav").css({
            "position": "static"
        })
    }
}));
(function (){
    var input =  document.createElement("input");
    var div = document.createElement("div");
    var spanBack = document.createElement("a");
    var spanNext = document.createElement("a");
    $(spanBack).html("&lt;Back").css({
        float: "left",
        cursor: "pointer"
    }).addClass("doc-back");
    $(spanNext).html("Next&gt;").css({
        float: "right",
        cursor: "pointer"
    }).addClass("doc-next");
    $(div).append(spanBack)
    .append(spanNext)
    .css({
        color: "rgba(90, 155, 131, 1)",
        "font-size": "18px",
        "font-weight": "bold",
        "margin-top": "10px"
    });
    $(".book-toc nav").append(div);

    // $(input).attr("placeholder", "Search").attr("id", "book-search-input")
    // .css({
    //     width: "204px",
    //     height: "36px",
    //     background: "rgba(255, 255, 255, 1)",
    //     "border-radius": "1px",
    //     border: "1px solid rgba(196, 205, 213, 1)",
    //     outline: "none",
    //     "padding-left": "10px",
    //     "margin-bottom": "10px"
    // });
    // $(".book-toc nav").prepend(input);
    $("#book-search-input").attr("placeholder", "Search");
    $(".book-toc nav").prepend($(".book-search"));

    var $menuList = $(".book-menu nav>ul li a");
    $menuList.each(function (index, item){
        if($(this).hasClass("active")){
            if(index == 0){
                $(".doc-back").remove();
            }else{
                $(".doc-back").attr("href", $menuList.eq(index-1).attr("href"));
                $("#docPreviousPage").text("<"+$menuList.eq(index-1).text())
            }
            if(index == ($menuList.length - 1)){
                $(".doc-next").remove();
            }else{
                $(".doc-next").attr("href", $menuList.eq(index+1).attr("href"));
                $("#docNextPage").text($menuList.eq(index+1).text() + ">")
            }
        }
    })
    

})();
