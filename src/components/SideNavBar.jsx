import React from 'react';
import Cohort from "./Cohort.jsx";

function SideNavBar({students}) {


  return (
	<>
	<aside>
		<nav>
			<a href="#"><h2>All Students</h2></a>
			<hr />
			<Cohort students={students}/>
		</nav>
	</aside>
	</>
  )
}

export default SideNavBar