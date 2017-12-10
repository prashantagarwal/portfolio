import React from 'react'
import harshitPic from '../assets/images/site/harshit.jpg'
import sushantPic from '../assets/images/site/sushant.jpg'
import siyaPic from '../assets/images/site/siya.jpeg'

const Experience = [{
  period: 'Dec 2016 - Current',
  company: 'Postman API',
  designation: 'Product Engineer',
  description: 'I currently work at Postman. I mostly work on prototyping new concepts and performance optimizations inside Postman app.'
},
{
  period: 'June 2015 - Nov 2016',
  company: 'Webengage',
  designation: 'Frontend Craftsman',
  description: 'I worked as a frontend developer at Webengage for about 1.5 years. I was mostly responsible for building the Product dashboard from scratch.'
},
{
  period: 'June 2014 - Aug 2014',
  company: 'Teach For India',
  designation: 'Summer Intern',
  description: 'Worked for 2 months with technology team of Teaac For India. As an intern I helped them with a cross platform app and in developing their portal.'
},
{
  period: 'June 2014 - Aug 2014',
  company: 'MOTHERSON INFOTECH & DESIGN',
  designation: 'Summer Intern',
  description: 'Developed an E-Commerce solution for selling medicines & medical equipments online. Also gained usefull experience in open source E-Commerce solution like opencart.'
},
{
  period: 'June 2013 - June 2014',
  company: 'Google',
  designation: 'Student Ambassador',
  description: 'Worked as a liasion between Google and the university and helped Google in organising their events and educating people about their various products.'
}]

const Education = [{
  year: '2015',
  degree: 'B.Tech in Computer Science & Engineering',
  name: 'Jaypee University of Engineering & Technology',
  performance: 'C.G.P.A 8.5'
},
{
  year: '2011',
  degree: 'Senior Secondary (C.B.S.E)',
  name: 'Dewan Public School',
  performance: '74.5%'
},
{
  year: '2009',
  degree: 'High School (C.B.S.E)',
  name: 'Dewan Public School',
  performance: '87.2%'
}]

const Skills = [{
  skillName: 'HTML',
  profeciancy: '90'
},{
  skillName: 'CSS',
  profeciancy: '80'
},{
  skillName: 'Javascript',
  profeciancy: '95'
},{
  skillName: 'React',
  profeciancy: '100'
},{
  skillName: 'Nodejs',
  profeciancy: '80'
},{
  skillName: 'PHP',
  profeciancy: '80'
},{
  skillName: 'C / C++',
  profeciancy: '80'
}]

const Bars = (percent) => {
  return (
    <div className="bar" data-percent="80">
      <div className="progress" style={{'width': `${percent}%`}}>
        <span>{percent}</span>
      </div>
    </div>
  );
}

const Resume = () => (
  <section id="resume" className="pt-page page-layout page-current">
    <div className="content">
      <div className="layout-medium">
        <h1 className="page-title">
            <i className="pe-7s-id"></i>resume
        </h1>
        <div className="row">
          <div className="col-sm-7">
            <div className="event">
              <h2>WORK HISTORY</h2>
              <p>
                <i className="pe-7s-ribbon"></i>
              </p>
            </div>
            {
              Experience.map((e, index) => {
                return (
                  <div className="event" key={index}>
                    <h3>{e.period}</h3>
                    <h4>{e.designation}</h4>
                    <h5>{e.company}</h5>
                    <p>{e.description}</p>
                  </div>
                );
              })
            }
                                    
            <div className="event">
              <h2>EDUCATION</h2>
              <p>
                <i className="pe-7s-study"></i>
              </p>
            </div>
            {
              Education.map((e, index) => {
                return (
                  <div className="event" key={index}>
                    <h3>{e.year}</h3>
                    <h4>{e.degree}</h4>
                    <h5>{e.name}</h5>
                    <p>{`Perfromance: ${e.performance}`}</p>
                  </div>
                );
              })
            }
            
            <p><a href="#" className="button"><i className="pe-7s-download"></i>Download CV</a></p>
          </div>
          <div className="col-sm-5">
            <div className="section-title center">    
              <h2>
                <i>coding skills</i>
              </h2>
            </div>
            {
              Skills.map((skill, index) => {
                return (
                  <div className="skill-unit" key={index}>
                    <h4>{skill.skillName}</h4>
                    {Bars(skill.profeciancy)}
                  </div>
                );
              })
            }

            <div className="section-title center">    
              <h2>
                <i>TESTIMONIALS</i>
              </h2>
            </div>
            <div className="testo">
              <img src={sushantPic} alt="someone" />
              <h4>Sushant Chavan</h4>
              <h5>Team Lead - Teach for India</h5>
              <p>It was an absolute pleasure working with Prashant. He is one of the smartest and the most technically competent interns I have ever hired.</p>
              <p>He is really quick at learning new platforms and implementing solutions very efficiently.</p>
              <p>I would love to work with him again in future.</p>
            </div>
            <div className="testo">
              <img src={harshitPic} alt="someone" />
              <h4>Harshit Sharma</h4>
              <h5>Software Engineer - MachinePulse</h5>
              <p>One of the best 'wizards' i have encountered till now. Worked with him during college days and the best he exhibited was his optimization spells and remarkable solutions for not-so-easy problems. A true versatile and a tech-savvy.</p>
              <p> Prashant's techniques for defense against the dark-arts or can say his attitude towards every problem is quite unique in every aspect. No matter how hard the quidditch game or a task may get,his never-give up ability till the end always resulted in best and winning results. To sum up i would say he is indeed a great guy with a pure Heart and an extraordinary mind.</p>
            </div>
            <div className="testo">
              <img src={siyaPic} alt="someone" />
              <h4>Siya Kakodkar</h4>
              <h5>Team Lead - Webengage</h5>
              <p>“Ridiculously efficient” is the phrase that comes to mind when I think about Prashant. Prashant and I worked together for a about a year and during that time he was my right hand while we were racing to revamp the dashboard for WebEngage. The now open sourced JavaScript Object Validator (in collaboration with WebEngage) is especially one of the jewels in his kitty. He has a curious mind and he’s a fast learner (especially table tennis moves!). Above all, I loved his enthusiasm towards taking up any challenge. With a brilliant work ethic and an ever-smiling face Prashant would be an asset for any team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Resume
