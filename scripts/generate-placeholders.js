const fs = require('fs');
const path = require('path');

const projectImages = [
  {
    name: 'resume-builder.jpg',
    width: 1200,
    height: 800,
    backgroundColor: '#FFE4E1',
    text: 'AI Resume Builder'
  },
  {
    name: 'surface-inspection.jpg',
    width: 1200,
    height: 800,
    backgroundColor: '#d4d4e6',
    text: 'Surface Inspection'
  },
  {
    name: 'ocwes.jpg',
    width: 1200,
    height: 800,
    backgroundColor: '#BCEAD5',
    text: 'OCWES Project'
  },
  {
    name: 'video-processing.jpg',
    width: 1200,
    height: 800,
    backgroundColor: '#FFE4E1',
    text: 'Video Processing'
  }
];

const generatePlaceholder = (name, width, height, backgroundColor, text) => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${backgroundColor}"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="48" 
        fill="#333"
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `;

  const projectsDir = path.join(__dirname, '../public/projects');
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  fs.writeFileSync(path.join(projectsDir, name), svg);
};

projectImages.forEach(({ name, width, height, backgroundColor, text }) => {
  generatePlaceholder(name, width, height, backgroundColor, text);
}); 