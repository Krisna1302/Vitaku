// Initialize AOS
AOS.init({
    duration: 800, // Animation duration
});

var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

// Get the modal element
var modal = document.getElementById("team-modal");

// Get the team member links
var teamMembers = document.querySelectorAll(".team-member");

// Add event listener to each team member link
teamMembers.forEach(function(teamMember) {
    teamMember.addEventListener("click", function() {
        var teamMemberName = teamMember.getAttribute("data-team-member");
        var teamMemberDescription = getTeamMemberDescription(teamMemberName);

        document.getElementById("team-member-name").innerHTML = teamMemberName.charAt(0).toUpperCase() + teamMemberName.slice(1);
        document.getElementById("team-member-description").innerHTML = teamMemberDescription;

        modal.style.display = "block";
    });
});

// Function to get the team member description
function getTeamMemberDescription(teamMemberName) {
    var teamMemberDescriptions = {
        "krisna": "Krisna Wibowo is a majority software engineer with a passion for web development." ,
        "galih": "Galih Fairuz Sadewa is a majority AI specialist with a passion for machine learning.",
        "putri": "Putri Wandayani is a data scientist with a focus on analytics."
    };

    return teamMemberDescriptions[teamMemberName] || "Description not available.";
}

// Add event listener to the close button
document.querySelector(".close").addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Add interactivity to namecards
var namecards = document.querySelectorAll(".namecard");

namecards.forEach(function(namecard) {
    namecard.addEventListener("click", function() {
        var name = namecard.querySelector("h1").innerText;
        var specialty = namecard.querySelector("p").innerText; // Get specialty
        var email = namecard.querySelector("a[href^='mailto:']").innerText;
        var phone = namecard.querySelector("a[href^='tel:']").innerText;

        document.getElementById("team-member-name").innerHTML = name;
        document.getElementById("team-member-description").innerHTML = specialty + "<br>Email: " + email + "<br>Phone: " + phone;

        modal.style.display = "block";
    });
});

// Function to toggle footer visibility based on window size
function toggleFooter() {
    var footer = document.querySelector('.footer');
    if (window.innerWidth < 768) {
        footer.classList.add('collapsed');
    } else {
        footer.classList.remove('collapsed');
    }
}

// Add event listener for window resize
window.addEventListener('resize', toggleFooter);

// Initial check on page load
toggleFooter();
