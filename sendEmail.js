function sendMail(contactForm) {
    emailjs.sendForm("service_thkukb4", "template_biu49gs", '#contactForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}