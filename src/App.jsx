import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs";
import All from "./Components/All";
import Fullstack from "./Components/Fullstack";
import Datascience from "./Components/Datascience";
import Cybersecurity from "./Components/Cybersecurity";
import Career from "./Components/Career";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blogdetails from "./Components/Blogdetails";

function App() {
  const blogs = [
    {
      id: 1,
      title: "Best Full-Stack Development Project Ideas in 2024",
      tag: "Full Stack",
      imageURL: "/assets/fullstack1.png",
      author: "Isha Sharma",
      date: "03 jul, 2024",
      time: 3,
      siteURL: "https://www.guvi.in/blog/full-stack-development-project-ideas/",
      content:
        "When you give your resume to any potential recruiter, the first thing that they check apart from your education is the number of projects that you have done during your career. The aim of the project is not just to showcase your understanding of the subject but rather to showcase your interest in that subject that extends beyond academics Building a project is very important for individuals to gain practical knowledge of concepts. Since full-stack development is the most demanding job in the IT industry, hence, it’s very important for you to build some creative and amazing projects. The demand for full-stack developers is rising and will continue to rise in the coming years.",
    },
    {
      id: 2,
      title: "DOM Scripting Techniques for Modern Web Development",
      tag: "Full Stack",
      imageURL: "/assets/fullstack2.png",
      author: "Isha Sharma",
      date: "29 jun, 2024",
      time: 5,
      siteURL:
        "https://www.guvi.in/blog/dom-scripting-techniques-for-web-development/",
      content: `DOM scripting is like having a magic wand for web development. The Document Object Model (DOM) lets you create, change, and remove elements from a webpage on the fly. This means your web apps can be super interactive and dynamic, making users go “Wow!” By getting the hang of DOM scripting, you can tweak web pages in real-time, reacting to user actions and updating content without needing a page to reload.Before diving into the next section, ensure you’re solid on full-stack development essentials like front-end frameworks, back-end technologies, and database management. 
        If you are looking for a detailed Full Stack Development career program, you can join GUVI’s Full Stack Development Career Program with Placement Assistance. You will be able to master the MERN stack (MongoDB, Express.js, React, Node.js) and build real-life projects.`,
    },
    {
      id: 3,
      title: "10 Best Data Science Online blogs for Beginners | 2024",
      tag: "Data Science",
      imageURL: "/assets/datascience1.png",
      author: "Meghana D",
      date: "26 jun, 2024",
      time: 7,
      siteURL:
        "https://www.guvi.in/blog/best-data-science-courses-for-beginners/",
      content: `In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most sought-after Technical fields. As businesses strive to leverage the power of data to gain valuable insights and make informed decisions, the demand for skilled data scientists is skyrocketing.

        Data Science is an unusual field where the alchemy of raw data transforms into gold mines of insights. These powerful data are the answers to many questions that the tech world has in store. Whether you’re a beginner looking to break into this lucrative field or an experienced professional seeking to upskill, pursuing a data science course can be the key to unlocking new career opportunities.
        
        In this comprehensive guide, we will explore the best data science online courses in 2024 that will equip you with the knowledge and skills needed to fly high in this rapidly growing field. So, Are you ready to embrace the power of data and kickstart a career in this revolutionary field that’s transforming the world? Read till the end to find which starter course suits you the best. Keep Reading!`,
    },
    {
      id: 4,
      title:
        "What is Data Science? Important Factors to Learn Before Getting Started [2024]",
      tag: "Data Science",
      imageURL: "/assets/datascience2.png",
      author: "Lukesh S",
      date: "03 jul, 2024",
      time: 6,
      siteURL: "https://www.guvi.in/blog/what-is-data-science/",
      content: `It is always a better habit to start with the basics whenever we start something new. Similarly, let us start our journey of data science by understanding its definition.
        Data science is a field where you use different methods and tools to find useful information from all kinds of data.
        It involves steps like gathering data, cleaning it up, exploring it, analyzing it, building models, and understanding the results.
        Using skills in math, statistics, and computer programming, and tools like Python and R, you can spot patterns, make predictions, and help make better decisions in areas like healthcare, finance, retail, and marketing.
        To put it simply, data science helps you turn messy data into valuable insights that can guide important decisions and spark new ideas.`,
    },
    {
      id: 5,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      tag: "Cyber Security",
      imageURL: "/assets/cyber1.png",
      author: "Tushar Vinocha",
      date: "16 Apr, 2024",
      time: 5,
      siteURL:
        "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
      content:
        `Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.

        Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out!
        
        First off, we will understand what Cybersecurity is and how it is related to your online activities. We will consider numerous points and have an in-depth comparison, to find out the difference between Cybersecurity and Ethical Hacking. 
        
        Whether you are a business owner or an individual who uses the internet regularly you must understand these terms so that you can take the necessary precautions to protect yourself and your data. In this article, we’re going to shed light on these two security niches. `,
    },
    {
      id: 6,
      title: "8 Different Types of Cybersecurity and Threats Involved",
      tag: "Cyber Security",
      imageURL: "/assets/cyber2.png",
      author: "Isha Sharma",
      date: "03 jul, 2023",
      time: 3,
      siteURL: "https://www.guvi.in/blog/types-of-cybersecurity/",
      content:
        `Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc. With the advent of technology and the increasing interconnectedness of organizational systems and networks, effective cybersecurity management and strategy are necessary for organizations of all sizes and types accordingly. Investments are flowing into this field and the market is projected to be a staggering 403 billion US dollars by 2027. This in turn has led to a spurt in demand for experts in the field of cyber security. Cybersecurity is an umbrella term that encompasses different types of security. In this article, we’re trying to deconstruct various types of cybersecurity. So let’s dig in. `,
    },
    {
      id: 7,
      title: "Career in Motion Graphics: A Detailed Guide",
      tag: "Career",
      imageURL: "/assets/career1.png",
      author: "Tushar Vinocha",
      date: "08 Sep, 2023",
      time: 4,
      siteURL:
        "https://www.guvi.in/blog/search/8+Different+Types+of+Cybersecurity+and+Threats+Involved",
      content:
        `Jumping into a career in motion graphics can be a thrilling ride. This dynamic field blends creativity with technology, offering endless opportunities to bring stories to life through visual effects and animations. If you’re just starting out or even looking to sharpen your skills, understanding the educational requirements and mastering the right tools, along with networking, is key to making a mark in this industry.

        Like most fields, motion graphics as a career demands a mix of formal education, hands-on experience, and continuous learning. From earning a degree in a related field to building a standout portfolio and staying updated with the latest software, there’s a lot to cover. In this guide, we’ll break down everything you need to get started and succeed in the exciting world of motion graphics.`,
    },
    {
      id: 8,
      title: "8 Mistakes To Avoid When You Begin a Data Science Career",
      tag: "Career",
      imageURL: "/assets/career2.png",
      author: "Srinithi Sankar",
      date: "27 May, 2024",
      time: 7,
      siteURL:
        "https://www.guvi.in/blog/search/8+Mistakes+To+Avoid+When+You+Begin+a+Data+Science+Career",
      content:
        `With leading modern-day companies relying on Data Science professionals to make more informed decisions and bring in better solutions, the field of data science is constantly evolving. We agree that the demand for data scientists is steadily increasing. On the other hand, data science is hands down one of the competitive fields where you need to be a skillful professional with appropriate expertise to sustain your stand in the field.

        If you’re a data science aspirant, practice to stay flawless from the beginning of your career. This blog highlights the beginner mistakes you should avoid when you start a Data Science career. Let’s dive in! `,
    },
  ];

  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        { path: "/", element: <Home blogs={blogs} /> },
        {
          path: "blogs",
          element: <Blogs blogs={blogs} />,
          children: [
            {
              path: "all",
              element: <All blogs={blogs} />,
            },
            {
              path: "fullstack",
              element: <Fullstack blogs={blogs} />,
            },
            {
              path: "datascience",
              element: <Datascience blogs={blogs} />,
            },
            {
              path: "cybersecurity",
              element: <Cybersecurity blogs={blogs} />,
            },
            {
              path: "Career",
              element: <Career blogs={blogs} />,
            },
            {
              path: ":blogId",
              element: <Blogdetails blogs={blogs} />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
