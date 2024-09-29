const Skills = () => {
  const skills = [
    { name: 'React', icon: <i style={{ color: '#61dafb' }} className="fab fa-react fa-2x" /> },
    { name: 'Node.js', icon: <i style={{ color: '#417e38' }} className="fab fa-node-js fa-2x" /> },
    { name: 'MongoDB', icon: <img width={40} className="p-2" src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" /> },
    { name: 'Express.js', icon: <img width={40} src="https://www.manektech.com/storage/developer/1646733543.webp" alt="" /> },
    { name: 'HTML5', icon: <i style={{ color: '#E34C26' }} className="fab fa-html5 fa-2x" /> },
    { name: 'CSS3', icon: <i style={{ color: '#1572B6' }} className="fab fa-css3 fa-2x" /> },
    { name: 'JavaScript', icon: <i style={{ color: '#F7DC6F' }} className="fab fa-js-square fa-2x" /> },
    { name: 'TypeScript', icon: <i style={{ color: '#3178C6' }} className="fab fa-js-square fa-2x" /> },
    { name: 'Next.js', icon: <img width={40} src="https://miro.medium.com/v2/resize:fit:576/1*yqQpg5pkNNY2NCdcmqVstw.png" alt="" /> },
    { name: 'Git', icon: <i style={{ color: '#F05032' }} className="fab fa-git fa-2x" /> },
    { name: 'GitHub', icon: <i style={{ color: '#FFF' }} className="fab fa-github fa-2x" /> },
    { name: 'Figma', icon: <i style={{ color: '#A259FF' }} className="fab fa-figma fa-2x" /> },
    { name: "FluentUI", icon: <img className="text-white" width={40} src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Fluent_UI.svg" alt="" /> },
    { name: 'SASS', icon: <i style={{ color: '#CC6699' }} className="fab fa-sass fa-2x" /> },
    { name: 'Tailwind', icon: <i style={{ color: '#38B2AC' }} className="fab fa-css3-alt fa-2x" /> },
    { name: 'Bootstrap', icon: <i style={{ color: '#563D7C' }} className="fab fa-bootstrap fa-2x" /> },
    { name: 'Docker', icon: <i style={{ color: '#2496ED' }} className="fab fa-docker fa-2x" /> },
    { name: 'Postman', icon: <img width={40} src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="" /> },
    { name: "Devops", icon: <img width={40} src="https://www.svgrepo.com/show/448271/azure-devops.svg" alt="" /> },
    { name: 'Azure', icon: <img width={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png" alt="" /> },
    { name: "Redux", icon: <i style={{ color: '#61DAFB' }} className="fab fa-react fa-2x" /> },
    { name: "Playwright", icon: <img width={40} src="https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png" alt="" /> },
  ];

  return (
    <div className="p-6 grid grid-cols-4 sm:grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-6 md:gap-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-black text-white rounded-lg shadow-md p-6 md:p-3 flex flex-col items-center justify-center h-20 w-20 md:h-24 md:w-24 transform transition duration-300 hover:scale-105 hover:bg-gray-800"
        >
          {skill.icon}
          <p className="mt-2 text-xs md:text-sm font-semibold text-center">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
