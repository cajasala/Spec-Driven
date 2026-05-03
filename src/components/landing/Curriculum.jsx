/**
 * Purpose: Displays the course modules or curriculum outline.
 */
import './Curriculum.css'

/**
 * Curriculum component that lists the different modules in the course.
 * 
 * @returns {JSX.Element} The Curriculum section.
 */
export default function Curriculum() {
  const modules = [
    {
      number: '01',
      title: 'Introduction to Specifications',
      lessons: 'What is SDD, benefits, and the mindset shift.'
    },
    {
      number: '02',
      title: 'Writing Executable Specs',
      lessons: 'Learn the syntax and structure of great specifications.'
    },
    {
      number: '03',
      title: 'Tooling & Integration',
      lessons: 'Setting up testing frameworks and CI/CD pipelines.'
    },
    {
      number: '04',
      title: 'Advanced Patterns',
      lessons: 'Handling complex domains and legacy codebases.'
    }
  ];

  return (
    <section className="curriculum-section">
      <div className="curriculum-container">
        <h2 className="section-title">Course Curriculum</h2>
        <div className="module-list">
          {modules.map((mod, index) => (
            <div key={index} className="module-item">
              <div className="module-number">{mod.number}</div>
              <div className="module-content">
                <h3 className="module-title">{mod.title}</h3>
                <p className="module-lessons">{mod.lessons}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
