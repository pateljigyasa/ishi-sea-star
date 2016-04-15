$(window).load(function() {
    $(".se-pre-con").fadeOut("slow")
});
$(document).ready(function() {
    $(".contentContainer").css("min-height", $(window).height());
    $("#topCol").css("height", $(window).height());
    $(".col-eq").colequalizer();
    $("#technical-specs-col3").css("height", $("#technical-specs-col1").height());
    $("#technical-specs-col4").css("height", $("#technical-specs-col1").height());
    $("#eye-specs-col4").css("height", $("#eye-specs-col1").height());
    $("#eye-specs-col5").css("height", $("#eye-specs-col1").height());
    $(".various").fancybox({
        maxWidth: 1200,
        maxHeight: 800,
        fitToView: false,
        width: "100%",
        height: "100%",
        autoSize: false,
        closeClick: false,
        openEffect: "none",
        closeEffect: "none"
    });
    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                css: {
                    background: "rgba(58, 42, 45, 1)"
                }
            }
        }
    });
    $("#contactFormSubmit").click(function(i) {
        i.preventDefault();
        c();
        var h = $("#id_name").val();
        var g = $("#id_email").val();
        var f = $("#id_phoneno").val();
        var d = $("#id_company").val();
        var j = $("#id_message").val();
        $.support.cors = true;
        $.ajax({
            url: ajax_contact_us_url,
            type: "POST",
            dataType: "json",
            timeout: timeout,
            cache: false,
            data: {
                name: h,
                email: g,
                phoneno: f,
                company: d,
                message: j
            },
            success: function(e) {
                if (!e || e == null || jQuery.isEmptyObject(e)) {
                    $("#formErrors").html("We are experiencing some problems, please try later.");
                    $("#formErrors").addClass("alert");
                    $("#formErrors").addClass("alert-danger")
                } else {
                    if (e.success) {
                        $("#formErrors").html(e.data);
                        $("#formErrors").addClass("alert");
                        $("#formErrors").addClass("alert-success");
                        $("#cform")[0].reset()
                    } else {
                        if (Object.prototype.toString.call(e.error) == "[object String]") {
                            $("#formErrors").html(e.error);
                            $("#formErrors").addClass("alert");
                            $("#formErrors").addClass("alert-danger")
                        } else {
                            $.each(e.error, function(k, l) {
                                if (l.field == "name") {
                                    $("#nameError").html(l.msg);
                                    $("#nameError").addClass("alert");
                                    $("#nameError").addClass("alert-danger")
                                }
                                if (l.field == "email") {
                                    $("#emailError").html(l.msg);
                                    $("#emailError").addClass("alert");
                                    $("#emailError").addClass("alert-danger")
                                }
                                if (l.field == "phone") {
                                    $("#phoneError").html(l.msg);
                                    $("#phoneError").addClass("alert");
                                    $("#phoneError").addClass("alert-danger")
                                }
                            })
                        }
                    }
                }
            },
            error: function(k, l, e) {
                if (l == "timeout") {
                    $("#formErrors").html("Connection time out. Please try again later.");
                    $("#formErrors").addClass("alert");
                    $("#formErrors").addClass("alert-danger")
                } else {
                    $("#formErrors").html("We are experiencing some problems, please try later.");
                    $("#formErrors").addClass("alert");
                    $("#formErrors").addClass("alert-danger")
                }
            }
        })
    });

    function c() {
        $("#formErrors").html("");
        $("#formErrors").removeClass("alert-success");
        $("#formErrors").removeClass("alert-danger");
        $("#nameError").html("");
        $("#nameError").removeClass("alert-danger");
        $("#emailError").html("");
        $("#emailError").removeClass("alert-danger");
        $("#phoneError").html("");
        $("#phoneError").removeClass("alert-danger")
    }
    
    $("#applyFormSubmit").click(function(i) {
        i.preventDefault();
        r();
        var h = $("#id_name").val();
        var g = $("#id_email").val();
        var f = $("#id_phoneno").val();
        var d = $("#id_linkedinprofile").val();
        var j = $("#id_message").val();
        $.support.cors = true;
        $.ajax({
            url: ajax_apply_form_url,
            type: "POST",
            dataType: "json",
            timeout: timeout,
            cache: false,
            data: {
                name: h,
                email: g,
                phoneno: f,
                linkedinprofile: d,
                message: j
            },
            success: function(e) {
                if (!e || e == null || jQuery.isEmptyObject(e)) {
                    $("#formErrors").html("We are experiencing some problems, please try later.");
                    $("#formErrors").addClass("alert");
                    $("#formErrors").addClass("alert-danger")
                } else {
                    if (e.success) {
                        $("#formErrors").html(e.data);
                        $("#formErrors").addClass("alert");
                        $("#formErrors").addClass("alert-success");
                        $("#applyform")[0].reset()
                    } else {
                        if (Object.prototype.toString.call(e.error) == "[object String]") {
                            $("#formErrors").html(e.error);
                            $("#formErrors").addClass("alert");
                            $("#formErrors").addClass("alert-danger")
                        } else {
                            $.each(e.error, function(k, l) {
                                if (l.field == "name") {
                                    $("#nameError").html(l.msg);
                                    $("#nameError").addClass("alert");
                                    $("#nameError").addClass("alert-danger")
                                }
                                if (l.field == "email") {
                                    $("#emailError").html(l.msg);
                                    $("#emailError").addClass("alert");
                                    $("#emailError").addClass("alert-danger")
                                }
                                if (l.field == "phone") {
                                    $("#phoneError").html(l.msg);
                                    $("#phoneError").addClass("alert");
                                    $("#phoneError").addClass("alert-danger")
                                }
                                if (l.field == "linkedinprofile") {
                                    $("#linkedinError").html(l.msg);
                                    $("#linkedinError").addClass("alert");
                                    $("#linkedinError").addClass("alert-danger")
                                }
                            })
                        }
                    }
                }
            },
            error: function(k, l, e) {
                if (l == "timeout") {
                    $("#formErrors").html("Connection time out. Please try again later.");
                    $("#formErrors").addClass("alert");
                    $("#formErrors").addClass("alert-danger")
                } else {
                    $("#formErrors").html("We are experiencing some problems, please try later.");
                    $("#formErrors").addClass("alert");
                    $("#formErrors").addClass("alert-danger")
                }
            }
        })
    });

    function r() {
        $("#formErrors").html("");
        $("#formErrors").removeClass("alert-success");
        $("#formErrors").removeClass("alert-danger");
        $("#nameError").html("");
        $("#nameError").removeClass("alert-danger");
        $("#emailError").html("");
        $("#emailError").removeClass("alert-danger");
        $("#linkedinError").html("");
        $("#linkedinError").removeClass("alert-danger");
        $("#phoneError").html("");
        $("#phoneError").removeClass("alert-danger");
    }

    function b(d) {
        if (jQuery("body").find("#resultLoading").attr("id") != "resultLoading") {
            jQuery("body").append('<div id="resultLoading" style="display:none"><div><img src=' + loader_gif_image + "><div>" + d + '</div></div><div class="bg"></div></div>')
        }
        jQuery("#resultLoading").css({
            width: "100%",
            height: "100%",
            position: "fixed",
            "z-index": "10000000",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            margin: "auto"
        });
        jQuery("#resultLoading .bg").css({
            background: "#000000",
            opacity: "0.7",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0"
        });
        jQuery("#resultLoading>div:first").css({
            width: "250px",
            height: "75px",
            "text-align": "center",
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            margin: "auto",
            "font-size": "16px",
            "z-index": "10",
            color: "#ffffff"
        });
        jQuery("#resultLoading .bg").height("100%");
        jQuery("#resultLoading").fadeIn(300);
        jQuery("body").css("cursor", "wait")
    }

    function a() {
        jQuery("#resultLoading .bg").height("100%");
        jQuery("#resultLoading").fadeOut(300);
        jQuery("body").css("cursor", "default")
    }
    jQuery(document).ajaxStart(function() {
        b("")
    }).ajaxStop(function() {
        a()
    })
});