import React from 'react';

const Nav = () => {
	return(
		  <nav className="blue darken-2">
		    <div className="container">
		      <div className="nav-wrapper">
		      	<a href="index.html" className="left brand-logo">Populus</a>
		        <ul className="right hide-on-med-and-down">
		          <li className="active">
		            <a href="index.html">Dashboard</a>
		          </li>
		          <li>
		            <a href="index.html">Posts</a>
		          </li>
		          <li>
		            <a href="index.html">Categories</a>
		          </li>
		          <li>
		            <a href="index.html">Comments</a>
		          </li>
		          <li>
		            <a href="index.html">Users</a>
		          </li>
		        </ul>
		      </div>
		    </div>
      </nav>
	);
}

export default Nav