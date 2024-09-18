import HeroProject from "./hero-project";
import projects from "../data/projects-list";

const LatestProjects=()=> {
    return (
        <section>
            <h2 className="projects-section-title">My Latest Projects</h2>
            <div className="project-container">
                {projects.slice().reverse().slice(0, 3).map((project, index) => (
                    <div key={index}>
                        <HeroProject
                            ProjectTitle={project.title}
                            ProjectDescription={project.description}
                            ProjectImage={project.image}
                            ProjectLink={project.projectLink}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LatestProjects;