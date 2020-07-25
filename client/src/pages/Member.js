import React from 'react';
import Table from "../components/Table";
import Footer from "../components/Footer";
import NavWhite from "../components/WhiteNav";

function Members () {
    return (
      <>
      
    <div className="memberBody">
    <NavWhite />
        <Table></Table>
    </div>  
      <Footer />
     </>   
    )
}

export default Members;