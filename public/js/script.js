// // Dark Mode Toggle
// const toggleBtn = document.getElementById("toggleTheme");
// const body = document.body;

// // Load saved theme from localStorage
// if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark-mode");
// }

// toggleBtn.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");
//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("theme", "dark");
//     } else {
//         localStorage.setItem("theme", "light");
//     }
// });

// const openLink = document.getElementById('openModalLink');
// const modal = document.getElementById('loginModal');
// const closeBtn = document.getElementById('closeModalBtn');

// openLink.onclick = function (e) {
//     e.preventDefault(); // Prevent default anchor behavior
//     modal.style.display = 'block';
// };

// closeBtn.onclick = function (e) {
//     e.preventDefault(); // Prevent default anchor behavior
//     modal.style.display = 'none';
// };

// window.onclick = function (e) {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//     }
// };
