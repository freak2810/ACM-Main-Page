import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"

const About = () => {
    return (
        <div>
            <div className="main">
                <h1>ABOUT US</h1>
                
            </div>    
            <div className="content">
                <AboutCard 
                    content={{imgUrl: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",name: "Association for Computing Machinery", Info: "Association for Computing Machinery’s Council on Women in Computing is an exclusive woman’s only wing of ACM which supports & commemorates the participation, contribution and achievements of women in the technical domain", float:"left"}}
                />
                        
                <AboutCard 
                    content={{imgUrl: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",name: "MVSR ACM Student Chapter", phone: "(212) 555-2345", email: "fluff@me.com", float:"right"}}
                />
                        
                <AboutCard
                    content={{imgUrl: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",name: "MVSR ACM-W Student Chapter", phone: "(212) 555-3456", email: "ofworlds@yahoo.com",float:"left"}}
                />
            </div>
        </div>
    )
}

export default About