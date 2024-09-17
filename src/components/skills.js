/**
 * Renders a section displaying the user's skills, organized into categories.
 *
 * The `Skills` component maps over an array of skill categories, each containing a title and a list of skills.
 * For each category, it renders a heading and a list of skill chips.
 *
 * @returns {JSX.Element} The rendered skills section.
 */
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Dart', 'Swift', 'SQL', 'Python'],
    },
    {
      title: 'Frameworks',
      skills: ['React JS', 'React Native', 'Flutter', 'SwiftUI'],
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'GitHub', 'JSON', 'API Integration'],
    },
    {
      title: 'Web Development',
      skills: ['WordPress', 'Webflow', 'HTML', 'CSS', 'Node.js'],
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
    <section className="skills-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 id={`category-${index}`} className="category-title">{category.title}</h3>
            <ul className="skill-chips" aria-labelledby={`category-${index}`}>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">
                  <span className="skill-chip">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
