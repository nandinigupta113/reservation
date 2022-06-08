import React from 'react'
import "./featured.css"
const featured = () => {
  return (
      <div className="featured">
          <div className="featuredItem">
              <img src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780" alt="image" />
              <div className="featuredTitles">
                  <h1>Dublin</h1>
                  <h2>433 Properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1916&q=80" />
              <div className="featuredTitles">
                  <h1>Austin</h1>
                  <h2>433 Properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887" />
              <div className="featuredTitles">
                  <h1>Reno</h1>
                  <h2>433 Properties</h2>
              </div>
          </div>
      </div>
  )
}

export default featured
