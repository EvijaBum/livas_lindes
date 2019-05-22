var express             = require("express"),
    router              = express.Router(),
    nodemailer          = require("nodemailer"),
    app                 = express(),
    session             = require('express-session'),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    flash               = require("connect-flash");

    



//LANDING PAGE
router.get("/", function(req, res){
    res.render("landing");
});

// ABOUT SECTION
router.get("/about", function(req, res){
   res.render("about"); 
});

// PORTFOLIO SECTION
router.get("/portfolio", function(req, res){
   res.render("portfolio"); 
}); 
    // kids - EVENTS
    router.get("/kidsevents", function(req, res){
        res.render("kidsevents"); 
    })
    // lifestyle - events
    router.get("/lifestyle", function(req, res){
     res.render("lifestyle"); 
    });

    // Wedding - events
    router.get("/wedding", function(req, res){
        res.render("wedding"); 
    });

    // Travel - nature
    router.get("/travelnature", function(req, res){
     res.render("travelnature"); 
    });


    // travel - cities
    router.get("/travelcities", function(req, res){
        res.render("travelcities"); 
    });

    // Portraits
    router.get("/portraits", function(req, res){
        res.render("portraits"); 
    });
    
    // Sport
    router.get("/sport", function(req, res){
        res.render("sport"); 
    });
    
    // Brands
    router.get("/brands", function(req, res){
        res.render("brands"); 
    });
    
    // Photo sessions
    router.get("/photosessions", function(req, res){
        res.render("photosessions"); 
    });

// CONTACT SECTION
router.get("/contact", function(req, res){
   res.render("contact"); 
});


//=====================ROAD JOURNAL ======================//

//INDEX
router.get("/roadjournal", function(req, res) {
    res.render("roadjournal");
});

//SHOW
router.get("/blog1", function(req, res){
     res.render("blog1");
});


//=============================================================//
// // NODEMAILER PATH

router.post("/contact/send", function(req, res) {
    var smtpTransport = nodemailer.createTransport({
      service: 'Yahoo',
      auth: {
          user: 'livtobe@yahoo.com',
          pass: 'LatviesuZeltene2018',
  }
});

    var mailOptions = {
        from: 'Liva Linde <livtobe@yahoo.com>',
        to: 'livtobe@yahoo.com',
        replyTo: req.body.email,
        subject: 'Website Form',
        text: 'You have a contact with the following details... Name: '+ req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
        html: '<h3>You have a new contact information with the following details...</h3><ul><li>Name: ' + req.body.name + ' </li><li>Email: ' + req.body.email + ' </li></ul><p>Message: <br/><br/>     ' + req.body.message + ' </p>'
    };

     smtpTransport.sendMail(mailOptions, function(err, info){
            if(err) {
            req.flash("error", "Something went wrong");
            console.log(err);
            res.redirect("/contact");
            } else {
                req.flash("success", "Your e-mail has been sent!");
                console.log('Message sent: %s', info.messageId);   
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                res.render('contact');
            }
    });
    
}); 



module.exports = router;