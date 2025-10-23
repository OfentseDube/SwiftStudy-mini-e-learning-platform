// Course Data
const coursesData = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
        icon: "🌐",
        lessons: [
            { title: "Introduction to HTML", duration: "15 min" },
            { title: "CSS Styling Basics", duration: "20 min" },
            { title: "JavaScript Fundamentals", duration: "30 min" },
            { title: "Responsive Design", duration: "25 min" },
            { title: "Building Your First Website", duration: "40 min" }
        ],
        instructor: "Sarah Johnson",
        duration: "2h 10min",
        level: "Beginner"
    },
    {
        id: 2,
        title: "Python for Data Science",
        description: "Master Python programming and data analysis with pandas, numpy, and matplotlib.",
        icon: "🐍",
        lessons: [
            { title: "Python Basics", duration: "25 min" },
            { title: "Working with NumPy", duration: "30 min" },
            { title: "Data Analysis with Pandas", duration: "35 min" },
            { title: "Data Visualization", duration: "30 min" },
            { title: "Real-world Data Project", duration: "45 min" }
        ],
        instructor: "Dr. Michael Chen",
        duration: "2h 45min",
        level: "Intermediate"
    },
    {
        id: 3,
        title: "Digital Marketing Mastery",
        description: "Learn SEO, social media marketing, and content strategy to grow your business.",
        icon: "📱",
        lessons: [
            { title: "Introduction to Digital Marketing", duration: "20 min" },
            { title: "SEO Fundamentals", duration: "30 min" },
            { title: "Social Media Strategy", duration: "25 min" },
            { title: "Content Marketing", duration: "30 min" },
            { title: "Analytics and Optimization", duration: "25 min" }
        ],
        instructor: "Emily Rodriguez",
        duration: "2h 10min",
        level: "Beginner"
    },
    {
        id: 4,
        title: "UI/UX Design Principles",
        description: "Create beautiful and user-friendly interfaces with modern design principles.",
        icon: "🎨",
        lessons: [
            { title: "Design Thinking Basics", duration: "20 min" },
            { title: "User Research Methods", duration: "25 min" },
            { title: "Wireframing and Prototyping", duration: "30 min" },
            { title: "Visual Design Principles", duration: "25 min" },
            { title: "Usability Testing", duration: "20 min" }
        ],
        instructor: "Alex Thompson",
        duration: "2h 0min",
        level: "Intermediate"
    }
];

// State Management
let currentUser = null;
let completedCourses = [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    renderCourses();
    setupEventListeners();
});

// Load User Data from LocalStorage
function loadUserData() {
    const savedUser = localStorage.getItem('currentUser');
    const savedCompletedCourses = localStorage.getItem('completedCourses');
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
    }
    
    if (savedCompletedCourses) {
        completedCourses = JSON.parse(savedCompletedCourses);
    }
}

// Save User Data to LocalStorage
function saveUserData() {
    if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
}

// Update UI for Logged In User
function updateUIForLoggedInUser() {
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('signupBtn').style.display = 'none';
    document.getElementById('userSection').style.display = 'flex';
    document.getElementById('userName').textContent = currentUser.name;
}

// Update UI for Logged Out User
function updateUIForLoggedOutUser() {
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('signupBtn').style.display = 'block';
    document.getElementById('userSection').style.display = 'none';
}

// Render Courses
function renderCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';
    
    coursesData.forEach(course => {
        const isCompleted = completedCourses.includes(course.id);
        const courseCard = createCourseCard(course, isCompleted);
        courseList.appendChild(courseCard);
    });
}

// Create Course Card
function createCourseCard(course, isCompleted) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.onclick = () => showCourseDetail(course.id);
    
    card.innerHTML = `
        <div class="course-image">
            <span>${course.icon}</span>
        </div>
        <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <span class="course-lessons">${course.lessons.length} lessons</span>
                ${isCompleted ? '<span class="course-status status-completed">✓ Completed</span>' : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Show Course Detail
function showCourseDetail(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;
    
    const isCompleted = completedCourses.includes(courseId);
    const courseDetail = document.getElementById('courseDetail');
    
    courseDetail.innerHTML = `
        <div class="detail-header">
            <h2 class="detail-title">${course.icon} ${course.title}</h2>
            <p class="detail-description">${course.description}</p>
            <div class="detail-meta">
                <div class="meta-item">
                    <span class="meta-label">Instructor</span>
                    <span class="meta-value">${course.instructor}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Duration</span>
                    <span class="meta-value">${course.duration}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Level</span>
                    <span class="meta-value">${course.level}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Lessons</span>
                    <span class="meta-value">${course.lessons.length}</span>
                </div>
            </div>
        </div>
        
        <div class="lessons-section">
            <h3 class="lessons-title">Course Content</h3>
            <ul class="lesson-list">
                ${course.lessons.map((lesson, index) => `
                    <li class="lesson-item">
                        <div class="lesson-title">${index + 1}. ${lesson.title}</div>
                        <div class="lesson-duration">${lesson.duration}</div>
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="completion-section">
            ${isCompleted 
                ? '<p style="color: var(--success-color); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">✓ You have completed this course!</p>'
                : `<button class="btn-success" onclick="markAsCompleted(${courseId})">Mark as Completed</button>`
            }
        </div>
    `;
    
    // Switch pages
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('courseDetailPage').classList.add('active');
}

// Mark Course as Completed
function markAsCompleted(courseId) {
    if (!completedCourses.includes(courseId)) {
        completedCourses.push(courseId);
        saveUserData();
        showCourseDetail(courseId);
        
        // Show success message
        alert('🎉 Congratulations! You have completed this course!');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Back button
    document.getElementById('backBtn').addEventListener('click', () => {
        document.getElementById('courseDetailPage').classList.remove('active');
        document.getElementById('homePage').classList.add('active');
        renderCourses(); // Re-render to update completion status
    });
    
    // Login/Signup buttons
    document.getElementById('loginBtn').addEventListener('click', () => {
        openModal('loginModal');
    });
    
    document.getElementById('signupBtn').addEventListener('click', () => {
        openModal('signupModal');
    });
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            closeModal(this.closest('.modal').id);
        });
    });
    
    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
    
    // Switch between login and signup
    document.getElementById('switchToSignup').addEventListener('click', (e) => {
        e.preventDefault();
        closeModal('loginModal');
        openModal('signupModal');
    });
    
    document.getElementById('switchToLogin').addEventListener('click', (e) => {
        e.preventDefault();
        closeModal('signupModal');
        openModal('loginModal');
    });
    
    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = { name: user.name, email: user.email };
        saveUserData();
        updateUIForLoggedInUser();
        closeModal('loginModal');
        document.getElementById('loginForm').reset();
        alert(`Welcome back, ${user.name}!`);
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Handle Signup
function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (users.some(u => u.email === email)) {
        alert('An account with this email already exists.');
        return;
    }
    
    // Add new user
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login
    currentUser = { name, email };
    saveUserData();
    updateUIForLoggedInUser();
    closeModal('signupModal');
    document.getElementById('signupForm').reset();
    alert(`Welcome to SwiftStudy, ${name}!`);
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUIForLoggedOutUser();
    alert('You have been logged out successfully.');
}

// Utility function to calculate progress
function calculateProgress(courseId) {
    // This is a placeholder - in a real app, you'd track individual lesson completion
    return completedCourses.includes(courseId) ? 100 : 0;
}
