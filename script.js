const toggleDarkMode = () => {
    let isDarkMode = sessionStorage.getItem('isDarkMode') === 'true';
    console.log(isDarkMode)
    if (isDarkMode) {
        sessionStorage.setItem('isDarkMode', "false");
        console.log("set to false");
    } else {
        sessionStorage.setItem('isDarkMode', "true");
        console.log("set to true");
    }
    
    let element = document.body;
    element.classList.toggle("dark-mode");
}

const handlePageLoad = () => {
    let isDarkMode = sessionStorage.getItem('isDarkMode') === 'true';
    console.log(isDarkMode)
    console.log("Page Loaded!");
    if (isDarkMode) {
        document.body.classList.toggle("dark-mode");
        let inputEl = document.getElementById('darkmode-toggle');
        inputEl.checked = true;
    };
}

const getDarkMode = () => {
    return sessionStorage.getItem('isDarkMode') === 'true'
}