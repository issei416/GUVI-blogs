# GUVI Blogs

A React-based blog platform with dynamic routing using `react-router-dom`. The platform allows users to navigate through various blog categories and view detailed information about each blog.

### Features 🌟
- Home page with a list of blog categories.
- Dynamic routing for blog categories and individual blog details.
- Uses `NavLink` for navigation and `useParams` to fetch dynamic routes.
- Responsive design with Bootstrap for styling.

### Techs used 🚀
- React
- JSX
- HTML/CSS
- Bootstrap

### Components 📚
* Home
* Blogs
* Blogcard -> (All, Full stack, Data Science, Cyber Security, Career)
    * Blogdetails -> for each Blogcard

### Routing 🗺️

* Home: `/`
* Blogs: `/blogs`
* All Blogs: `/blogs/all`
* Full stack Blogs: `/blogs/fullstack`
* Data science Blogs: `/blogs/datascience`
* Cyber security Blogs: `/blogs/cybersecurity`
* Career Blogs: `/blogs/career`
* Blog content: `/blogs/:blogId` for details on each card route


Feel free to visit the deployed site [here](https://guvi-blogs-dev-it.netlify.app) 🔗