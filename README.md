# SwiftStudy - Mini E-Learning Platform

A modern, responsive e-learning platform built with HTML, CSS, and JavaScript. SwiftStudy allows learners to browse courses, view detailed course information, and track their learning progress.

## Features

### Core Features
- **Course Catalog**: Browse through 4 diverse courses covering Web Development, Python, Digital Marketing, and UI/UX Design
- **Course Details**: View comprehensive course information including lessons, duration, instructor, and difficulty level
- **Progress Tracking**: Mark courses as completed and track your learning journey
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices

### User Authentication (Optional)
- **Sign Up**: Create a new account with name, email, and password
- **Login**: Access your account and maintain your course progress
- **Logout**: Securely log out of your account
- **Persistent Storage**: User data and progress saved using localStorage

### UI/UX Features
- **Modern Design**: Clean, professional interface with gradient accents
- **Smooth Animations**: Hover effects, transitions, and page animations
- **Interactive Elements**: Clickable course cards, modal dialogs, and dynamic content
- **Visual Feedback**: Status badges, completion indicators, and success messages

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Dynamic functionality and state management
- **LocalStorage API**: Client-side data persistence

## Project Structure

```
SwiftStudy/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No server or build tools required!

### Installation

1. Download or clone the project files
2. Open `index.html` in your web browser
3. Start exploring courses!

### Usage

#### Browsing Courses
1. The home page displays all available courses
2. Click on any course card to view detailed information
3. Use the "Back to Courses" button to return to the catalog

#### Marking Courses as Completed
1. Navigate to a course detail page
2. Click the "Mark as Completed" button
3. The course will be marked with a completion badge
4. Your progress is automatically saved

#### User Authentication
1. Click "Sign Up" to create a new account
2. Fill in your name, email, and password
3. Or click "Login" if you already have an account
4. Your progress is tied to your account
5. Click "Logout" to sign out

## Course Data

The platform includes 4 sample courses:

1. **Web Development Fundamentals** (Beginner)
   - 5 lessons, 2h 10min
   - Topics: HTML, CSS, JavaScript, Responsive Design

2. **Python for Data Science** (Intermediate)
   - 5 lessons, 2h 45min
   - Topics: Python, NumPy, Pandas, Data Visualization

3. **Digital Marketing Mastery** (Beginner)
   - 5 lessons, 2h 10min
   - Topics: SEO, Social Media, Content Marketing

4. **UI/UX Design Principles** (Intermediate)
   - 5 lessons, 2h 0min
   - Topics: Design Thinking, User Research, Prototyping

## Customization

### Adding New Courses

Edit the `coursesData` array in `script.js`:

```javascript
{
    id: 5,
    title: "Your Course Title",
    description: "Course description",
    icon: "📚",
    lessons: [
        { title: "Lesson 1", duration: "20 min" },
        // Add more lessons
    ],
    instructor: "Instructor Name",
    duration: "Total Duration",
    level: "Beginner/Intermediate/Advanced"
}
```

### Styling Customization

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --success-color: #10b981;
    /* Customize colors */
}
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential features for expansion:
- Video lesson integration
- Quiz and assessment system
- Certificate generation
- User profile pages
- Course search and filtering
- Progress bars for individual lessons
- Backend integration with database
- Payment integration for premium courses
- Discussion forums
- Instructor dashboard

## License

This project is open source and available for educational purposes.

## Credits

Built with AI assistance as a functional prototype for learning and demonstration purposes.

---

**SwiftStudy** - Learn at Your Own Pace 🚀
