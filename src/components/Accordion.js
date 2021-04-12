//import * as React from "react";
import React from "react";
import data from '../data.json';

function Accordion() {
    const eventHandler = (e,index) => {
        e.preventDefault();

        let content = e.target.nextElementSibling;
        e.target.classList.toggle("active");

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    return (
        <section className="collapsible">   
            <div className="wrap">
            { data.map((tab, index) => (
                    <div className="collapsible-set" key={index}>
                        <button onClick={(e) => eventHandler(e, index)} className="collapsible-button">
                            {tab.title}
                        </button>
                        <div className="collapsible-content">
                            <div className="collapsible-inner"> { tab.description } </div>        
                        </div>
                    </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Accordion;