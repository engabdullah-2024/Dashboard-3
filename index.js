document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');

    // Toggle Sidebar
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
        sidebar.classList.toggle('translate-x-0');
    });

    // Close Sidebar
    closeSidebar.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        sidebar.classList.remove('translate-x-0');
    });

    // Handle Sidebar Clicks
    const links = document.querySelectorAll('#sidebar a');
    const sectionTitle = document.getElementById('section-title');
    const sectionInfo = document.getElementById('section-info');
    const mainTitle = document.getElementById('main-title');
    const form = document.getElementById('example-form');
    const formMessage = document.getElementById('form-message');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const content = link.getAttribute('data-content');
            mainTitle.textContent = content.charAt(0).toUpperCase() + content.slice(1);
            updateContent(content);
        });
    });

    function updateContent(content) {
        switch (content) {
            case 'dashboard':
                sectionTitle.textContent = 'Dashboard Overview';
                sectionInfo.innerHTML = '<p>Here you can see an overview of the school\'s performance and key metrics.</p>';
                form.classList.add('hidden');
                break;
            case 'students':
                sectionTitle.textContent = 'Student Information';
                sectionInfo.innerHTML = '<p>Manage and view details about students.</p>';
                form.classList.add('hidden');
                break;
            case 'classes':
                sectionTitle.textContent = 'Class Information';
                sectionInfo.innerHTML = '<p>Manage and view details about classes.</p>';
                form.classList.add('hidden');
                break;
            case 'teachers':
                sectionTitle.textContent = 'Teacher Information';
                sectionInfo.innerHTML = '<p>Manage and view details about teachers.</p>';
                form.classList.add('hidden');
                break;
            case 'reports':
                sectionTitle.textContent = 'Reports';
                sectionInfo.innerHTML = '<p>Generate and view reports related to students, classes, and teachers.</p>';
                form.classList.add('hidden');
                break;
            case 'settings':
                sectionTitle.textContent = 'Settings';
                sectionInfo.innerHTML = '<p>Adjust system settings and preferences.</p>';
                form.classList.add('hidden');
                break;
            default:
                sectionTitle.textContent = 'Welcome';
                sectionInfo.innerHTML = '<p>Select an option from the sidebar to view more information.</p>';
                form.classList.add('hidden');
                break;
        }
    }

    // Handle Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Simulate form submission success
        formMessage.classList.remove('hidden');
        
        // Reset the form
        form.reset();
    });
});