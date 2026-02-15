document.addEventListener('DOMContentLoaded', function() {
    // --- NAVBAR SCROLL EFFECT ---
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // --- HARİTA SAĞ TIK ENGELLEME ---
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        mapContainer.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            window.open('https://www.google.com/maps/place/Ertuğrul+Kurdoğlu+Anadolu+Lisesi/@40.8603373,29.3979104,17z/data=!3m1!4b1!4m6!3m5!1s0x14cad895634ae565:0x17a960f54290b7d6!8m2!3d40.8603373!4d29.3979104!16s%2Fg%2F11bx8j579d?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
            return false;
        });
    }

    // --- COUNTDOWN TIMER ---
    const timerWrapper = document.querySelector(".timer-wrapper");
    if (timerWrapper) {
        const countdownDate = new Date("Nov 21, 2026 00:00:00").getTime();
        
        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Değerleri HTML'e yaz
            const dEl = document.getElementById("days");
            const hEl = document.getElementById("hours");
            const mEl = document.getElementById("minutes");
            const sEl = document.getElementById("seconds");

            if (dEl) dEl.innerHTML = days < 10 ? '0' + days : days;
            if (hEl) hEl.innerHTML = hours < 10 ? '0' + hours : hours;
            if (mEl) mEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
            if (sEl) sEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;

            // Süre dolduğunda
            if (distance < 0) {
                clearInterval(x);
                timerWrapper.innerHTML = "<h2 style='color:white'>The Conference Has Started!</h2>";
            }
        }, 1000);
    }

    // --- MODAL SCRIPT (SCHEDULE) ---
    // V0.9 mantığını kullanıyoruz ancak DOMContentLoaded içine aldık ki elemanlar kesin yüklensin.
    const scheduleLink = document.getElementById('schedule-link');
    const modal = document.getElementById('schedule-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Navigation linkine tıklandığında
    if (scheduleLink && modal) {
        scheduleLink.addEventListener('click', function(e) {
            e.preventDefault(); // Sayfanın zıplamasını engelleyen kod
            e.stopPropagation();
            modal.classList.add('active'); // Modalı aç
            return false;
        });
    }

    // Çarpıya basıldığında
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    }

    // Modal dışına tıklayınca kapat
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // --- TEAM MODAL SCRIPT (MEET OUR TEAM) ---
    const teamBtn = document.getElementById('team-open-btn');
    const teamModal = document.getElementById('team-modal');
    const closeTeamBtn = document.getElementById('close-team-btn');

    // Butona tıklandığında
    if (teamBtn && teamModal) {
        teamBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            teamModal.classList.add('active');
        });
    }

    // Çarpıya basıldığında
    if (closeTeamBtn && teamModal) {
        closeTeamBtn.addEventListener('click', function() {
            teamModal.classList.remove('active');
        });
    }

    // Modal dışına tıklayınca kapat
    if (teamModal) {
        teamModal.addEventListener('click', function(e) {
            if (e.target === teamModal) {
                teamModal.classList.remove('active');
            }
        });
    }
});
