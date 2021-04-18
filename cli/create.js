const fs = require('fs'); 
const path = require('path'); 
const minimist = require('minimist'); 

const args = minimist(process.argv);

const srcPath = [__dirname, '..', 'src/components']; 
const arrPath = args.path.split('/'); 
const componentName = arrPath[arrPath.length - 1];

const currentArray = [];
arrPath.forEach(element => {
  currentArray.push(element);
  const currentResolvePath = path.resolve(...srcPath, ...currentArray);
  if (!fs.existsSync(currentResolvePath)) { 
    fs.mkdirSync(currentResolvePath); 
  }
});

const componentPath = [...srcPath, ...arrPath];

const componentCode = `import React from "react";

function ${componentName}() {
  return (
    <div className="wrapper">

    </div>
  );
};

export default ${componentName};`;
fs.writeFileSync(path.resolve(...componentPath, `${componentName}.js`), componentCode);

