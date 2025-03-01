document.addEventListener("DOMContentLoaded", () => {
    const pages = {
        home: document.getElementById("home-page"),
        azkar: document.getElementById("azkar-page"),
        quran: document.getElementById("quran-page"),
        sebha: document.getElementById("sebha-page")
    };

    let timerSeconds = 0;
    let timerInterval;
    let sebhaCount = localStorage.getItem("sebhaCount") || 0;

    function showPage(page) {
        Object.values(pages).forEach(p => p.classList.add("hidden"));
        pages[page].classList.remove("hidden");

        if (page === "azkar") startTimer();
        else clearInterval(timerInterval);
    }

    document.getElementById("azkar-btn").addEventListener("click", () => showPage("azkar"));
    document.getElementById("quran-btn").addEventListener("click", () => { 
        showPage("quran"); 
        generateQuranGrid(); 
    });
    document.getElementById("sebha-btn").addEventListener("click", () => { 
        showPage("sebha");
        document.getElementById("sebha-count").textContent = sebhaCount;
    });

    document.getElementById("azkar-back").addEventListener("click", () => {
        timerSeconds = 0;
        showPage("home");
    });

    document.getElementById("quran-back").addEventListener("click", () => showPage("home"));
    document.getElementById("sebha-back").addEventListener("click", () => showPage("home"));

    function startTimer() {