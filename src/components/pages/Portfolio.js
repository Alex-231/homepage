import React from "react"
import Project from "./portfolio/Project"
//import { Link } from 'react-router-dom';

export default class Portfolio extends React.Component {
  render() {
		return (
		<div className="page">
			<div className="centerMargins" id="portfolio">
				<div className="projectSection">
					<h2>Personal Projects</h2>
					<div className="row">
						<Project name="Skirmish" description={<span>Codename Raider.<br/>An online shooter.</span>} img="./img/portfolio/skirmish.png" primaryTags={["C#", "MongoDB", "C++"]} secondaryTags={["NodeJS", "JavaScript", "HLSL"]}/>
						<Project name="Banshee" blogPost="5b1bc2679ef4b300141a5993" description="A Beta Minecraft modpack adding many features from newer releases." primaryTags={["Java"]} secondaryTags={["C#", "NodeJS"]}/>
						<Project name="Marathon" description={<span>Minecraft Server Management Tool<br/>My first solution!</span>} img="./img/portfolio/marathon.png" primaryTags={["C#"]} secondaryTags={["VB"]}/>
						<Project name="Foundry" description="A tool for editing Halo: Online maps variants." img="./img/portfolio/foundry.png" primaryTags={["C#"]} secondaryTags={["C++"]}/>
						<Project name="Minecord" blogPost="5c0083b9bfe98a00141c7d99" description="A Minecraft &lt;---&gt; Discord chat bot." primaryTags={["Java", "Maven"]} secondaryTags={["Discord API"]}/>
						<Project name="Homepage" description="MERN stack single page site with basic blog api." img="./img/portfolio/homepage.png" primaryTags={["React.js", "JavaScript", "MongoDB"]} secondaryTags={["Express", "NodeJS"]}/>
						<Project name="themeScape" description="A web, desktop and Mobile application for managing and sharing wallpapers." img="./img/portfolio/themescape.png" primaryTags={["PHP", "JavaScript", "C#"]}/>
						<Project name="Halo: Online - Armour Customizer" description="A simple WPF application to help Halo: Online players edit their settings." blogPost="5b17434ccc4d2a00144b68db" primaryTags={["WPF", "C#"]}/>
						<Project name="Halo: Online - Headhunter Proof of Concept" description="A research project, adding a gamemode to Halo: Online" img="./img/portfolio/headhunter.png" blogPost="5b171bc9e2243c001487ca7c" primaryTags={["C++", "x86 Assembly"]}/>
						<Project name="Unity Modding" description="Modifications for Baldi's Basics in Education and Learning, and another unreleased game." blogPost="5b1c3bb52a54fd00143f9dd1" primaryTags={["MSIL (CIL)", "C#"]}/>
						<Project name="Skyfall" description="A simple minecraft server plugin for void teleportation." primaryTags={["Java", "Maven"]}/>

						<Project name="Many More" description="Many research projects, game mods and other misc projects." img="./img/portfolio/more.png" primaryTags={["LUA"]}/>
					</div>
				</div>
				<div className="projectSection">
					<h2>Group Projects</h2>
					<div className="row">
						<Project name="Coral (Formerly Supernova)" description={<span><a style={{marginTop: 0}} href="https://twitter.com/coralfangame">Halo themed solo and multiplayer PC game.</a><br/>In Development.</span>} img="./img/portfolio/coral.jpg" primaryTags={["Software Engineering", "C#"]}/>
						{/* <Project name="React Infinite Scroll Component" description="A smart component I tweaked tweaked to fix a bug I experienced." primaryTags={["JavaScript", "React.js"]}/> */}
						<Project name="Halo: Online 'ElDewrito'" description="A restoration modification of the free to play pc shooter Halo: Online." img="./img/portfolio/eldewrito.png" primaryTags={["C++", "x86 Assembly"]} secondaryTags={["JavaScript", "C#"]} blogPost="5adef789bd597f00148a1d5d"/>
					</div>
				</div>
				<div className="projectSection">
					<h2>Work Experience</h2>
					<div className="row">
						<Project name="Pickr" description={<span>Software Engineer<br/>Norwich, 2018</span>} img="./img/portfolio/pickr.jpg" primaryTags={["React-Native", "React.JS"]} secondaryTags={["Laravel"]}/>
						<Project name="Automatic Data Processing (ADP)" description={<span>Software Development Intern<br/>Peterborough, 2016</span>} img="./img/portfolio/adp.png" primaryTags={["Agile Scrum", "JavaScript", "Selenium"]} secondaryTags={["NodeJS"]}/>
						<Project name="Mold.Agency" description={<span>Backend Web Developer<br/>Peterborough, 2017</span>} img="./img/portfolio/mold.png" primaryTags={["NodeJS", "JavaScript"]} secondaryTags={["MongoDB", "MySQL", "PHP"]}/>
					</div>
				</div>
				<div className="projectSection">
					<h2>Education</h2>
					<div className="row">
						<Project name="University of East Anglia (UEA)" description={<span>Master of Computing Sciences<br/>Norwich, 2017 (Ongoing)</span>} img="./img/portfolio/uea.png" primaryTags={["Java", "Python", "MySQL"]} secondaryTags={["JavaScript"]}/>
						<Project name="Peterborough Regional College" blogPost="5b171ca4e2243c001487ca83" description={<span>Level 3 BTEC Extended Diploma in Software Development (D*D*D*)<br/>Peterborough, 2015 - 2017</span>} img="./img/portfolio/prc.png" primaryTags={["C#", "PHP", "C"]} secondaryTags={["Python", "C++", "Assembly"]}/>
					</div>
				</div>
			</div> 
		</div>
		
	);
  }
}