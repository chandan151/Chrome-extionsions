const logo = document.getElementById("logoUleth");

const updateLogo = document.createElement("h1");
updateLogo.textContent = "University of Bestbridge";
updateLogo.style.color = "red";

logo.replaceWith(updateLogo);

const brandHeader = document.getElementsByClassName("brand-header");
console.log(brandHeader);

brandHeader[0].textContent = "New Media 4 Life";

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.message);
        document.body.style.backgroundColor = request.message;

        let newbg = chrome.runtime.getURL("images/hall.png");
        document.getElementsByClassName("hero-main")[0].style.backgroundImage = `url(${newbg})`;

        const newimg = document.createElement("img");
        newimg.src = newbg;
        newimg.classList = "new-img"
        document.body.appendChild(newimg);

        sendResponse({
            message: request.message
        });
    }
);
