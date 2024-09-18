import HeroProject from "../components/hero-project";
import projects from "../data/projects-list";

const ProjectsPage = () => {
    return (
        <div>
            <div className="project-container">
                {projects
                    .slice()
                    .reverse()
                    .map((project, index) => (
                        <div key={index}>
                            <HeroProject
                                ProjectTitle={project.title}
                                ProjectDescription={project.description}
                                ProjectImage={project.image}
                                ProjectLink={project.projectLink}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProjectsPage;