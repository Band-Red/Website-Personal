let currentYear = 2025;

function toggleDatePicker() {
    const dateDropdown = document.getElementById('dateDropdown');
    dateDropdown.style.display = dateDropdown.style.display === 'block' ? 'none' : 'block';
}

function changeYear(step) {
    currentYear += step;
    document.querySelector('.current-year').textContent = currentYear;
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.date-picker')) {
        document.getElementById('dateDropdown').style.display = 'none';
    }
});

// تصفية حسب الشهر
document.querySelectorAll('.months span').forEach(month => {
    month.addEventListener('click', () => {
        const selectedMonth = month.dataset.month;
        filterProjectsByMonth(selectedMonth);
    });
});

function filterProjectsByMonth(month) {
    const projects = document.querySelectorAll('.cards-Container article');
    projects.forEach(project => {
        const projectDate = new Date(project.dataset.date);
        const projectMonth = projectDate.getMonth() + 1; // JavaScript months are 0-based
        if (projectMonth == month) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

/* تصفية حسب النوع
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterType = btn.dataset.filter;
        filterProjectsByType(filterType);
    });
});*/
