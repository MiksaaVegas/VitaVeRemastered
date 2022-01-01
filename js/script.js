$("document").ready(function(){
    if ($(window).width() < 993){ //MOBILE FRIENDLY
        $("#zaDomotImg").css("opacity", "0");//REMOVING OPACITY
        $("#moto").css("opacity", "0");
        $("#zaDomotImg").removeClass("animate__animated animate__fadeInUpBig");
        $("#interierGalerijaGrid1").addClass("animate__animated animate__fadeInUpBig");
        $(window).scroll(function () {
            if ($(window).scrollTop() > 190){
                $("#zaDomotText a").addClass("animate__animated animate__fadeInUp");
            }
            if ($(window).scrollTop() > 230){
                $("#fadeInOnScrollImg1").addClass("animate__animated animate__fadeInUp");
            }
            if ($(window).scrollTop() > 250){
                $("#zaDomotImg").addClass("animate__animated animate__fadeInUp");
            }
            if ($(window).scrollTop() > 460){
                $("#fadeInOnScrollImg2").addClass("animate__animated animate__fadeInUp");
            }
            if ($(window).scrollTop() > 500){
                $("#moto").addClass("animate__animated animate__fadeInUp");
            }
            if ($(window).scrollTop() > 720){
                $("#fadeInOnScrollImg3").addClass("animate__animated animate__fadeInUp");
            }
            if ($(window).scrollTop() > 700){
                $("#interierHeading h1").addClass("animate__animated animate__fadeInUpBig");
                $("#interierHeading p").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 940){
                $("#fadeInOnScrollImg4").addClass("animate__animated animate__fadeInUp");
            }
            if ($(window).scrollTop() > 1180){
                $("#fadeInOnScrollImg5").addClass("animate__animated animate__fadeInUp");
            }
            if ($(window).scrollTop() > 1100){
                $("#interierSlika1").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 1380){
                $("#fadeInOnScrollImg6").addClass("animate__animated animate__fadeInUp");
            }
            if ($(window).scrollTop() > 1350){
                $("#interierSlika2").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 1550){
                $("#interierSlika3").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 1720){
                $("#interierGalerijaBtnParent a").addClass("animate__animated animate__fadeInUp");
            }
            if ($(window).scrollTop() > 1750){
                $("#interierContainer a").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 1950){
                $(".stoMislatKlientiteHeading").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 2050){
                $("#klientiCard1").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 2650){
                $("#klientiCard2").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 3450){
                $("#klientiCard3").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 4000){
                $("#nastaniSection h1").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 4160){
                $("#nastaniSection p").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 4250){
                $("#nastaniCard1").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 4850){
                $("#nastaniCard2").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 5450){
                $("#nastaniCard3").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 6250){
                $("#timHeading").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 6550){
                $("#visiTimRowPersonOne").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 6850){
                $("#visiTimRowPersonTwo").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 7150){
                $("#timRowPersonOne").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 7450){
                $("#timRowPersonTwo").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 7750){
                $("#timRowPersonThree").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 8050){
                $("#timRowPersonFour").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 8600){
                $("#kontaktHeading").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 8800){
                $("#kontaktInfo").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 9100){
                $("#forma").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 9450){
                $("#sendMailBtn").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 9600){
                $("#mapa").addClass("animate__animated animate__fadeInUpBig");
            }
        })
    }
    if ($(window).width() > 992){
        $("#interierGalerijaGrid1").addClass("animate__animated animate__fadeInUpBig");
        $("#interierGalerijaGrid2").addClass("animate__animated animate__fadeInUpBig");
        $(window).scroll( function(){
        //DESKTOP FRIENDLY
            $("#zaDomotImg").addClass("animate__animated animate__fadeInUpBig");
            $("#interierGalerijaGrid3").addClass("animate__animated animate__fadeInUpBig");
            if ($(window).scrollTop() > 310){
                $("#zaDomotText a").addClass("animate__animated animate__fadeInUpBig");
                $("#moto").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 565){
                $("#interierHeading h1").addClass("animate__animated animate__fadeInUpBig");
                $("#interierHeading p").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 830){
                $(".interierSlikiRowFadeIn1").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 1030){
                $(".mobileDisaperingImg").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 1230){
                $("#interierContainer a").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 1450){
                $(".stoMislatKlientiteHeading").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 1610){
                $(".stoMislatKlientiteRow").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 2210){
                $("#nastaniSection h1").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 2350){
                $("#nastaniSection p").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 2470){
                $(".nastaniRow").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 3200){
                $("#timHeading").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 3350){
                $("#visiTimRow").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 3800){
                $("#timRow").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 4300){
                $("#kontaktHeading").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 4450){
                $("#kontaktInfo").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 4450){
                $("#forma").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 4750){
                $("#sendMailBtn").addClass("animate__animated animate__fadeInUpBig");
            }
            if ($(window).scrollTop() > 4900){
                $("#mapa").addClass("animate__animated animate__fadeInUpBig");
            }
        })
    }
    // MAIL SENDER
    $sendMailFunction = function () {
        alert("Со кликање на копчето ОК продолжувате на друга веб-страна кадешто ќе потврдите дека ќе го пратите мејлот.");
        var mailInput = " Мејл за контакт: " + $("#mailInput").val() + ".";
        var mailSender = " Со почит, " + $("#imeInput").val();
        var mailBody = $("#formaTextareaInput").val() + mailSender + mailInput;
        javascript:location.href="mailto:kuzmanoskimihail9@gmail.com?subject=Мејл од клиент&body=" + mailBody;
    }
    $("#sendMailBtn").click(function(){
        $sendMailFunction();
    });
});