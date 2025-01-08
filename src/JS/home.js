const roles = ["Frontend Developer", "UX/UI Designer", "Full-stack Developer"];
let roleIndex = 0;
let currentText = "";
let isDeleting = false;
const roleElement = document.getElementById("role");

function type() {
  const targetRole = roles[roleIndex];
  if (isDeleting) {
    currentText = targetRole.slice(0, currentText.length - 1);
  } else {
    currentText = targetRole.slice(0, currentText.length + 1);
  }
  roleElement.textContent = currentText;

  if (!isDeleting && currentText === targetRole) {
    setTimeout(() => {
      isDeleting = true;
    }, 1000);
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 150 : 100);
}

type();
