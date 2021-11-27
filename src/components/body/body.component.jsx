import React from "react";
import './body.styles.css';

export function Body(props) {
    
    const isDark = props.mode;
    if (isDark) { 
        return (
            <div style={{height: '5000px'}} className="Dark-bg">
            <div id="page-0"></div>
            <h1 className="Name" style={{color: 'white'}}>JAMES GABBITUS</h1>
            <a href="#page-1" style={{height: '370px', color: 'lightgrey'}}>ABOUT</a>
            <a href="#page-2" style={{height: '800px', color: 'lightgrey'}}>PROJECTS</a>
            <a href="#page-3" style={{height: '1200px', color: 'lightgrey'}}>EDUCATION</a>
            <div class="material-icons-expand-1">
                <a href="#page-1" class="material-icons" style={{color: 'white'}}>expand_more</a>
            </div>

            <div class="scroll-page" id="page-1">
                <div id="section-headings" style={{color: 'lightgrey'}}>
                    <p id="sections" style={{color: 'white'}}>ABOUT</p>
                     James is a full stack developer proficient in JavaScript frameworks. He is passionate about best development practices
                     whether it be on the front-end creating excellent UI/UX or on the back-end developing elegant, optimised code. He's experienced
                     in React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more. 
                </div>
            </div>
            <div class="material-icons-expand-2">
                <a href="#page-2" class="material-icons" style={{color: 'white'}}>expand_more</a>
            </div>

            <div class="scroll-page" id="page-2">
                <div id="section-headings" style={{color: 'lightgrey'}}>
                    <p id="sections" style={{color: 'white'}}>PROJECTS</p>
                     <div id="projects">
                        <h3>Angular Amplify Portfolio<br/><a style={{color: 'lightgrey'}} id="ang-port" href="https://www.jamesgabbitus.com">jamesgabbitus.com</a></h3>
                        <h3>React E-Commerce Application</h3>
                     </div>
                </div>
            </div>
            <div class="material-icons-expand-2">
                <a href="#page-3" class="material-icons" style={{color: 'white'}}>expand_more</a>
            </div>

            <div class="scroll-page" id="page-3">
                <div id="section-headings" style={{color: 'lightgrey'}}>
                    <p id="sections" style={{color: 'white'}}>EDUCATION</p>
                    <div id="education">
                        <img src="https://pngimage.net/wp-content/uploads/2018/06/mmu-png-3.png" style={{width: '15%'}} />
                        <h3 style={{color: 'white'}}>MSc Software Engineering</h3>
                        <i><p style={{color: 'lightgrey'}}>Distinction</p></i>
                        <h3 style={{color: 'white'}}>BA (Hons) Philosophy</h3>
                        <i><p style={{color: 'lightgrey'}}>2nd Class Honours</p></i>
                    </div>
                </div>
            </div>
            <div class="material-icons-expand-2">
                <a href="#page-0" class="material-icons" style={{color: 'white'}}>keyboard_arrow_up</a>
            </div>

            <div id="contact">
                <h3 style={{color: 'white'}}>jamesgabbitus@gmail.com</h3>
                <h3 style={{color: 'white'}}>+44(0)7519247007</h3>
                <h3>
                    <a aria-label="James Gabbitus Linkedin" target="_blank" rel="noopener" href="https://www.linkedin.com/in/james-gabbitus/" title="Linkedin">
                        <svg  id="twitter-logo" width="24" height="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <rect width="400" height="400" fill="none"/>
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
                            fill="white"/>
                        </svg>
                    </a>
                </h3>
                <h3>
                    <a aria-label="James Gabbitus Github" target="_blank" rel="noopener" href="https://github.com/JamesGabby" title="Github">
                        <svg id="youtube-logo" height="24" width="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" 
                            fill="white"/>
                        </svg>
                    </a>
                </h3>
            </div>
        </div> //last div
        );
    }
    return (
        <div style={{height: '5000px'}} className="Light-bg">
            <div id="page-0"></div>
            <h1 className="Name">JAMES GABBITUS</h1>
            <a href="#page-1" style={{height: '370px', color: 'rgb(34, 32, 32)'}}>ABOUT</a>
            <a href="#page-2" style={{height: '800px', color: 'rgb(34, 32, 32)'}}>PROJECTS</a>
            <a href="#page-3" style={{height: '1200px', color: 'rgb(34, 32, 32)'}}>EDUCATION</a>
            <div class="material-icons-expand-1">
                <a href="#page-1" class="material-icons" style={{color: 'black'}}>expand_more</a>
            </div>

            <div class="scroll-page" id="page-1">
                <div id="section-headings" style={{color: 'rgb(34, 32, 32)'}}>
                    <p id="sections" style={{color: 'black'}}>ABOUT</p>
                    James is a full stack developer proficient in JavaScript frameworks. He is passionate about best development practices
                     whether it be on the front-end creating excellent UI/UX or on the back-end developing elegant, optimised code. He's experienced
                     in React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more.
                </div>
            </div>
            <div class="material-icons-expand-2">
                <a href="#page-2" class="material-icons" style={{color: 'black'}}>expand_more</a>
            </div>

            <div class="scroll-page" id="page-2">
                <div id="section-headings" style={{color: 'rgb(34, 32, 32)'}}>
                    <p id="sections" style={{color: 'black'}}>PROJECTS</p>
                     <div id="projects">
                        <h3>Angular Amplify Portfolio<br/>
                            <p><a id="ang-port" href="https://www.jamesgabbitus.com">jamesgabbitus.com</a></p>
                        </h3>
                        <h3>React E-Commerce Application</h3>
                     </div>
                </div>
            </div>
            <div class="material-icons-expand-2">
                <a href="#page-3" class="material-icons" style={{color: 'black'}}>expand_more</a>
            </div>

            <div class="scroll-page" id="page-3">
                <div id="section-headings" style={{color: 'rgb(34, 32, 32)'}}>
                    <p id="sections" style={{color: 'black'}}>EDUCATION</p>
                    <div id="education">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Manchester_Metropolitan_University_logo.svg/1200px-Manchester_Metropolitan_University_logo.svg.png" />
                        <h3>MSc Software Engineering</h3>
                        <i><p>Distinction</p></i>
                        <h3>BA (Hons) Philosophy</h3>
                        <i><p>2nd Class Honours</p></i>
                    </div>
                </div>
            </div>
            <div class="material-icons-expand-2">
                <a href="#page-0" class="material-icons" style={{color: 'black'}}>keyboard_arrow_up</a>
            </div>

            <div id="contact">
                <h3>jamesgabbitus@gmail.com</h3>
                <h3>+44(0)7519247007</h3>
                <h3>
                    <a aria-label="James Gabbitus Linkedin" target="_blank" rel="noopener" href="https://www.linkedin.com/in/james-gabbitus/" title="Linkedin">
                        <svg  id="twitter-logo" width="24" height="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <rect width="400" height="400" fill="none"/>
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
                            fill="svgColor"/>
                        </svg>
                    </a>
                </h3>
                <h3>
                    <a aria-label="James Gabbitus Github" target="_blank" rel="noopener" href="https://github.com/JamesGabby" title="Github">
                        <svg id="youtube-logo" height="24" width="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" 
                            fill="svgColor"/>
                        </svg>
                    </a>
                </h3>
            </div>
        </div> //last div
        
    );
    
}
