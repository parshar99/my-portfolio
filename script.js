function addRecommendation(){
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if(message === ""){
        alert("Pls enter msg");
        return;
    }
    let newRec = document.createElement("div");
    newRec.className = "rec";
    newRec.innerHTML = '"' + message + '"';

    document.getElementById("rec-list").appendChild(newRec);

    alert("Thanks for your recommendation! ");

    document.getElementById("message").value = "";
}
function scrollTopPage(){
    window.scrollTo({top:0, behavior:"smooth"});
}