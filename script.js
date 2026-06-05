function sendMail() {
    var params = {
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        subject : document.getElementById("subject").value ,
        message : document.getElementById("message").value ,
    };
if(name === "" || email === "" || subject === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

const serviceID = "service_ljdg36z";
const templateID = "template_n3fx6ah";

emailjs.send(serviceID, templateID, params)
.then(
    (res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully:");
    }
)
.catch((err) => console.log(err));
}