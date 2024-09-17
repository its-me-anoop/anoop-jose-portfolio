import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Dart', 'Swift', 'SQL', 'Python', 'Java', 'C++', 'C#'],
    },
    {
      title: 'Frameworks',
      skills: ['React JS', 'Angular', 'Vue', 'React Native', 'Flutter', 'SwiftUI'],
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'GitHub', 'JSON', 'API Integration', 'CI/CD', 'Agile Methodologies'],
    },
    {
      title: 'Web Development',
      skills: ['WordPress', 'Webflow', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Mobile Development',
      skills: ['iOS', 'Android', 'Cross-Platform App Development'],
    },
    {
      title: 'Other Skills',
      skills: ['Problem Solving', 'Data Analysis', 'Debugging', 'Code Review', 'UX/UI Design'],
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-chips">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
