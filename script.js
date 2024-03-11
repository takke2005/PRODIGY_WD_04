const blurHeader = () => {
    const header = document.getElementById("header");
    window.scrollY >= 50
        ? header.classList.add("blur-header")
        : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);
