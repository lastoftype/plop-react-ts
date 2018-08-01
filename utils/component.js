const dashRegExp = /(-\w)/g;

const isDashCase = componentName => {
  return componentName.match(dashRegExp);
};

const getUsedCase = componentName => {
  return isDashCase(componentName) ? 'dashCase' : 'properCase';
};

const getComponentTemplate = type => {
  switch (type) {
    case 'PureComponent Class': {
      return './templates/pure.component.js.hbs';
    }
    case 'Component Class': {
      return './templates/component.js.hbs';
    }
    case 'Stateless Function': {
      return './templates/stateless.js.hbs';
    }
    default: {
      return './templates/pure.component.js.hbs';
    }
  }
};

module.exports = {
  isDashCase,
  getComponentTemplate,
  getUsedCase,
};
