document.addEventListener("DOMContentLoaded",function(){
    const form=document.getElementById("Contact_Form");
    const messageStatus=document.getElementById("message-status");
    const submitButton=documennt.getElementById("submit_button");


    submitButton.addEventListener("click",function(){
        const name=document.getElementById("name").value;
        const email=documennt.getElementById("email").value;
        const subject=document.getElementById("subject").value;
        const message=document.getElementById("message").value;

        emailjs.init("r1wR5sStGHcJTMyw8")

        const templateParams={
            from_name:name,
            to_email:"onesmukirimi64@gmail.com",
            message:message,
        };

        emailjs.send("service_4krhutr","__ejs-test-mail-service__",templateParams)
            .then(function(response){
                console.log("Email Sent",response);
                messageStatus.textContent="Message Sent Successfully.I will get back to you as soon as possible.Thank You Contact Me.";
                form.reset();
            },function(error){

                console.error("Email not sent:",error);
                messageStatus.textContent="Ops! Message Not Sent.Please Try Again Later.";
            });


    });

});