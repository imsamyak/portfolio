const rollingBgContainer = document.getElementById("avatarContainer");
let rollingBgPercent = 0.1;
const roleSpan = document.getElementById('role');

function rollingBg() {
    rollingBgContainer.style.backgroundPositionY = `${rollingBgPercent}%`;
    rollingBgPercent += 0.1;
}

setInterval(rollingBg, 10);

const roles = ["FrontEnd Development", "BackEnd Development", "Web Development", "Full-Stack Development"];
let roleIndex = 0;

const clearRole = (() => {
    let next = roleSpan.innerHTML.slice(0, -1);
    let actualLength = roleIndex * 4 - 1;
    return function () {
        roleSpan.innerHTML = next.padEnd(actualLength, " ");

        if (next.length === 0) {
            next = roles[roleIndex].slice(0, -1);
            actualLength = next.length + 1;
            setTimeout(addRole, 100);
        } else {
            next = next.slice(0, -1);
            setTimeout(clearRole, 100);
        }
    }
})();

const addRole = (() => {
    let role = roles[roleIndex];
    let next = role.slice(0, 1);

    return function () {
        roleSpan.innerHTML = next.padEnd(role.length, " ");

        if (next.length === role.length) {
            roleIndex = roleIndex === roles.length - 1 ? 0 : roleIndex + 1;
            role = roles[roleIndex];
            next = role.slice(0, 1);
            setTimeout(clearRole, 3000);
        } else {
            next = role.slice(0, next.length + 1);
            setTimeout(addRole, 100);
        }
    }
})();

clearRole();


let isMouseOverONProject = false;
document.querySelectorAll(".project").forEach(elem=>{
    elem.addEventListener("mouseout",()=>{
        isMouseOverONProject = false;
        const detailDiv = elem.querySelector("div");   
        if(!detailDiv) return;

        detailDiv.style.top = "calc(100% - 30px)"
    })

    elem.addEventListener("mouseover",()=>{
        isMouseOverONProject = true;
        const detailDiv = elem.querySelector("div");   
        if(!detailDiv) return;

        detailDiv.style.top = "60px"
    })
})

function showProjectDetails(e) {

    if(isMouseOverONProject) return;

    const detailDiv = e.currentTarget.querySelector("div");   
    if(!detailDiv) return;

    const top = parseInt(window.getComputedStyle(detailDiv).top,10);
    if (top>80) {
        detailDiv.style.top = "60px"
    } else {
        detailDiv.style.top = "calc(100% - 30px)"
    }
}

const contactFormSubmitButton = document.querySelector('#contactForm>input[type="submit"]');
const contactFormCloseEyeAvatar = document.getElementById("contactAvatarCloseEye");
const contactFormOpenEyeAvatar = document.getElementById("contactAvatarOpenEye");

contactFormSubmitButton.addEventListener("mouseout",()=>{
    contactFormOpenEyeAvatar.style.display = "block";
    contactFormCloseEyeAvatar.style.display = "none";
})

contactFormSubmitButton.addEventListener("mouseover",()=>{
    contactFormOpenEyeAvatar.style.display = "none";
    contactFormCloseEyeAvatar.style.display = "block";
})