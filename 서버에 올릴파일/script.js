document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const createRoomButton = document.getElementById("create-room-button");
    const viewRankingButton = document.getElementById("view-ranking-button");
    const exitButton = document.getElementById("exit-button");

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        showPage("room-creation-page");
    });

    createRoomButton.addEventListener("click", () => {
        showPage("room-entry-page");
    });

    viewRankingButton.addEventListener("click", () => {
        showPage("ranking-page");
    });

    exitButton.addEventListener("click", () => {
        showPage("signup-page");
    });

    function showPage(pageId) {
        const pages = document.querySelectorAll(".page");
        pages.forEach(page => {
            page.classList.add("hidden");
            page.classList.remove("active");
        });
        const activePage = document.getElementById(pageId);
        activePage.classList.remove("hidden");
        activePage.classList.add("active");
    }

    // 초기 페이지 설정
    showPage("signup-page");
});
