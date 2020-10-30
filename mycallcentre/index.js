function popUpModal(url){//only needed in version 4
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById('popUpContent').style.display='block';
    document.getElementById("popUpContent").src=url;
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function serviceDropdownMenu() {//for Our Services dropdown
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    topnavChange();
    // var x = document.getElementById("myTopnav");
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {//scroll up effective -> become smaller
        $(".cnButton" ).css("padding", "25px 10px");
        $(".enButton" ).css("padding", "25px 10px");

        $(".topnav div a" ).css("padding", "20px 10px");
        $(".topnav .icon").css("padding", "0px");
        $(".topnav .icon").css("margin-top", "0px");
        $(".dropbtn").css("padding", "20px 10px");
        $(".cornerBlock").css("overflow", "inherit");

        $("#logo").css("height", "60px");
        $(".topnav").css("height", "60px");
        $("#menuIcon").css("height", "60px");
        // x.className = "topnav";
    }
    // else if (document.body.scrollTop <= 40 || document.documentElement.scrollTop <= 40){
    //     // x.className = "topnav";
    //     $(".cnButton" ).css("padding", "25px 10px");
    //     $(".enButton" ).css("padding", "25px 10px");

    //     $(".topnav div a" ).css("padding", "20px 10px");
    //     $(".topnav .icon").css("padding", "0px");
    //     $(".topnav .icon").css("margin-top", "0px");
    //     $(".dropbtn").css("padding", "20px 10px");
    //     $(".cornerBlock").css("overflow", "inherit");

    //     $("#logo").css("height", "60px");
    //     $(".topnav").css("height", "60px");
    //     $("#menuIcon").css("height", "60px");
    // } 
    else {
        
        $(".cnButton" ).css("padding", "20px");
        $(".enButton" ).css("padding", "20px");

        $(".topnav div a" ).css("padding", "15px");
        $(".topnav .icon").css("padding", "10px");
        $(".topnav .icon").css("margin-top", "10px");
        $(".dropbtn").css("padding", "15px");
        $(".cornerBlock").css("overflow", "auto");

        $("#logo").css("height", "110px");
        $(".topnav").css("height", "110px");
        $("#menuIcon").css("height", "70px");
        // x.className = "topnav";
    }
    
}

function topnavChange(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            x.className = "topnav";
        }else if (document.body.scrollTop <= 40 || document.documentElement.scrollTop <=40) {
            x.className = "topnav";
        } 
        else{
            x.className = "topnav";
        }   
    } 
}
function addText(id){
    var text;
    if($("#languageButton").text()=="English"){
        text = "关闭";
    }else{
        text = "Close";
    }
    
    $("#" + $('#'+ id).attr('pId')).append( "more text here...");
    
    if (id=="whoWeAreButton"){
        var closeButtonId = "whoWeAreCloseButton";
        var textId = "whoWeAreText";
    }
    else if(id=="whatWeDoButton"){
        var closeButtonId = "whatWeDoCloseButton";
        var textId = "whatWeDoText";
    }
    else if(id=="howWeWorkButton"){
        var closeButtonId = "howWeWorkCloseButton";
        var textId = "howWeWorkText";
    }
    $('#'+ id).replaceWith('<button class="wwhButton" style="float:right"id="' + closeButtonId +  '" pId="' + textId +  '"onclick="closeText(id)">' + text + '</button>');   

}
function closeText(id){
    var text;
    if($("#languageButton").text()=="English"){
        text = "更多";
    }else{
        text = "More";
    }
    
    $("#" + $('#'+ id).attr('pId')).text(function(i, t) {
        return t.substr(0, t.lastIndexOf('more'));
    });
    if (id=="whoWeAreCloseButton"){
        var moreButtonId = "whoWeAreButton";
        var textId = "whoWeAreText";
    }
    else if(id=="whatWeDoCloseButton"){
        var moreButtonId = "whatWeDoButton";
        var textId = "whatWeDoText";
    }
    else if(id=="howWeWorkCloseButton"){
        var moreButtonId = "howWeWorkButton";
        var textId = "howWeWorkText";
    }
    $('#'+ id).replaceWith('<button class="wwhButton" style="float:right"id="' + moreButtonId + '" pId="' + textId + '" onclick="addText(id)">' + text + '</button>');       
}


function showPage(filename){
    window.location.href=filename;
}

function changeBannerLanguageCn(){
    $(".bannerClass").html(
        '<div class="bannertext"><h1 class="bannertextTitle">呼叫中心服务</h1><p class="bannertextContent">您的电话溢出了吗？您的企业是否在白天和黑夜都充分利用每一个询问？我们的呼叫中心服务全天候24/7全天候开放，为您提供热情，友好和专业的团队来处理您的业务咨询（无论呼叫量如何）。<br/><br/>让答案增强您的公司形象，最大程度地捕获电话并提高客户满意度。每当电话响时，我们就在那里。</p></div>');
}
function changeBannerLanguageEn(){
    $(".bannerClass").html(
        '<div class="bannertext"><h1 class="bannertextTitle">Call Centre Services</h1><p class="bannertextContent">Are your calls overflowing? Is your business making the most of each and every enquiry, both day and night? Our call centre services are open 24/7, offering a welcoming, friendly and professional team to handle your business enquiry, whatever the call volumes.<br/><br/>Let Answers enhance your company image, maximise call capture and increase customer satisfaction. We’re simply there when the phone rings, every time.</p></div>');
   
}


window.onload= function(){
    var url = window.location.href;
    var str = url.split("?");
    var lastIndexStr= str[str.length-1];
    var splitCn = lastIndexStr.split("&");
   if (!splitCn.includes("cn")) {
        $(".mycallcenter").load("indexen.html", function(){
        }); 
   }
   else {
       $(".mycallcenter").load("indexcn.html");
   }
}

function loadContent()
{   var url = window.location.href;
    var str = url.split("?");
    var lastIndexStr= str[str.length-1];
    var getFilename = "";
    if(lastIndexStr.indexOf('&')>-1){
        var splitCn = lastIndexStr.split("&");
        if (splitCn.length == 2){
            if (splitCn[0] == "cn"){
                if (splitCn[1] == "home"){
                    changeBannerLanguageCn();
                }else{
                    getFilename = splitCn[1]+ ".html";
                    $(".bannerClass").load(getFilename); 
                }  
            }
            else {
                if(splitCn[0] == "home"){
                    changeBannerLanguageCn();
                }else{
                    getFilename = splitCn[0]+ ".html";
                    $(".bannerClass").load(getFilename); 
                }   
            }    
        }
        else{
            alert("Page not found!");
        }
    }
    else if(lastIndexStr=="home"){
        changeBannerLanguageEn();
    
    }else if (!lastIndexStr.includes("/") && !lastIndexStr.includes("cn") && lastIndexStr!= ""){
        getFilename = lastIndexStr + ".html";
        $(".bannerClass").load(getFilename);    
    }
    $(".bannerClass").css("display", "block");
}


