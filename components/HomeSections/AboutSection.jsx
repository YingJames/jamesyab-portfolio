import { Card, Tooltip } from 'flowbite-react';
import {SiReact, SiNextdotjs, SiJavascript, SiPython, SiC, SiCsharp, SiTypescript, SiCplusplus} from 'react-icons/si';
export default function AboutSection() {
    let cardSize = 60;
    function LangCard(props) {
        return (
            <div className="inline-block m-2">
                <Tooltip
                    content={props.name}
                    style="dark"
                >
                    <Card>{props.icon}</Card>
                </Tooltip>
            </div>
        )
    }

    return (
        <div className="section--container">
            <h2 id="about" className="section--title">About Me</h2>
            <p>&emsp;I’m a B.S.C.S. Senior at the University of South Florida currently looking for an internship
                opportunity.
                Whether I’m working on new projects or playing video games, I like to spend quite a lot of time looking
                at a screen (Currently playing a lot of Baldur&apos;s Gate 3).
                When I&apos;m not looking at a screen, I like to explore my local area to find interesting places or
                markets to eat at!</p>
            <p>My skills include: experience using C/C++, C#, Python, and JavaScript (TypeScript) for personal and
                academic projects</p>
            <div className="flex flex-wrap justify-center">
                <LangCard name="React.js" icon={<SiReact size={cardSize}/>} />
                <LangCard name="Next.js" icon={<SiNextdotjs size={cardSize}/>} />
                <LangCard name="JavaScript" icon={<SiJavascript size={cardSize}/>} />
                <LangCard name="TypeScript" icon={<SiTypescript size={cardSize}/>} />
                <LangCard name="Python" icon={<SiPython size={cardSize}/>} />
                <LangCard name="C" icon={<SiC size={cardSize}/>} />
                <LangCard name="C++" icon={<SiCplusplus size={cardSize}/>} />
                <LangCard name="C#" icon={<SiCsharp size={cardSize}/>} />
            </div>
            {/* <p>&emsp;When I’m not looking at a screen, I’m stuffing my face with food or exploring around to find even more food.</p> */}
        </div>
    );
}