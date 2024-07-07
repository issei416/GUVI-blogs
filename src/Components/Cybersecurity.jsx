import React from 'react'
import Blogcard from './Blogcard'

const Cybersecurity = ({blogs}) => {
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {blogs.filter(blog => blog.tag==="Cyber Security").map((blog) => (
              <Blogcard blog={blog} key={blog.id } />
          ))}
        </div>
      </div>
  )
}

export default Cybersecurity