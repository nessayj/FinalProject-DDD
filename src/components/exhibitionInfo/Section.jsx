import React from "react";
import ExhibitionDetails from './ExhibitionDetails';
import ExhibitionLocation from './ExhibitionLocation';
import ExhibitionReview from './ExhibitionReview';
const menuSelect = (name) => {
    switch(name){
        case "menu1" : 
        return <ExhibitionDetails/>;
       
        case "menu2" : 
        return <ExhibitionLocation/>;
       
        case "menu3" : 
        return <ExhibitionReview/>;
        default: return'';
    }
}

const Section= ({category}) => {
    return(
        <div>
        {menuSelect(category)}
        </div>
    );
}

export default Section;