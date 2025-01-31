document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle functionality
    const menuButton = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-links");

    function toggleMenu() {
        navLinks.classList.toggle("show");
    }

    function handleResize() {
        if (window.innerWidth > 1000) {
            navLinks.classList.remove("hide");
        } else {
            navLinks.classList.add("hide");
        }
    }

    menuButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", handleResize);
    handleResize(); // Run on page load

    // Image viewer functionality
    function viewerTemplate(pic, alt) {
        return `<div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
    }

    function viewHandler(event) {
        if (event.target.tagName === "IMG") {
            const imgSrc = event.target.src.replace("norris-sm.jpeg", "norris-full.jpeg"); // Replace "-sm.jpeg" with "-full.jpeg"
            document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, event.target.alt));

            // Attach event listener to close button to close the viewer
            const closeButton = document.querySelector(".close-viewer");
            closeButton.addEventListener("click", closeViewer);
        }
    }

    function closeViewer() {
        const viewerElement = document.querySelector(".viewer");
        if (viewerElement) {
            viewerElement.remove(); // Remove the viewer div from the DOM
        }
    }

    // Attach event listener to gallery section
    document.querySelector(".gallery").addEventListener("click", viewHandler);
});
