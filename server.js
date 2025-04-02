const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS and define the correct directory for views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Correct EJS templates path

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve images from 'public/images/'
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));  
});

// Express route to render the projects page
app.get('/projects', (req, res) => {
    const projects = [
        {
            title_id: "Project1",
            img_id: "img1",
            img_alt: "Project 1 Image",
            img_src: "/images/Cocktails.png",
            section_id: "section1",
            title: "Get Cocktails",
            description: "A website for getting cocktail recipes every time you refresh the page.",
            link: "https://github.com/khitthiri/Cocktails.git"
        },
        {
            title_id: "Project2",
            img_id: "img2",
            img_src: "/images/Log-in.png",
            img_alt: "Project 2 Image",
            section_id: "section2",
            title: "Log In",
            description: "A simple log-in web page.",
            link: "https://github.com/khitthiri/Log-in-.git"
        },
        {
            title_id: "Project3",
            img_id: "img3",
            img_src: "/images/Shoppingcart.png",
            img_alt: "Project 3 Image",
            section_id: "section3",
            title: "Shopping Cart",
            description: "A simple shopping cart for items and calculation with discounts.",
            link: "https://github.com/khitthiri/Shopping-Cart.git"
        }
    ];

    res.render('projects', {
        title: "My Projects",
        projects: projects
    });
});

// Blog Route
app.get('/blog', (req, res) => {
    res.render('blog', { title: 'My Blog' });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('<h1>PAGE NOT FOUND!</h1>');
});

// Start the server
app.listen(3000, '127.0.0.1', () => {
    console.log('Listening to requests on port 3000');
});