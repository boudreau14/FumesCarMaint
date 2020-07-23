import React from 'react';
import Table from "../components/Table";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Members () {
    return (
      <>
      <Navbar />
    <div className="memberBody">
        <Table></Table>
    </div>  
      <Footer />
     </>   
    )
}

export default Members;