import React from 'react'
import Footer from "./Footer";
import MiddleBody from "./MiddleBody";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Social from "./Social";
import TopBody from "./TopBody";

function Home() {
  return (
    <div>

<Navbar />
<TopBody/>
<MiddleBody/>
<Projects/>
<Social />
<Footer />
    </div>
  )
}

export default Home