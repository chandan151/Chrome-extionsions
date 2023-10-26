const logo = document.getElementById("logoUleth");

const updateLogo = document.createElement("h1");
updateLogo.textContent = "University of Bestbridge";
updateLogo.style.color = "white";

logo.replaceWith(updateLogo);

const brandHeader = document.getElementsByClassName("brand-header");
console.log(brandHeader);

brandHeader[0].textContent = "New Media 4 Life";

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.message);
        document.body.style.backgroundColor = request.message;
        sendResponse({ message: "Recieved!!!!!!" });
    }
);

