interface Colors {
  white: string;
  black: string;
  brown: string;
  authGradient: string[];
  introGradient: string[];
  inputPlaceholder: string;
}

const colors: Colors = {
  white: 'white',
  black: 'black',
  brown: '#bd8742',
  authGradient: [
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,0.3)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.7)',
    'rgba(0,0,0,0.8)',
    'rgba(0,0,0,0.8)',
    'rgba(0,0,0,0.8)',
    'rgba(0,0,0,0.8)',
    'rgba(0,0,0,0.7)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.3)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,0)',
  ],
  introGradient: [
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,0.2)',
    'rgba(0,0,0,0.3)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.7)',
    'rgba(0,0,0,0.8)',
    'rgba(0,0,0,0.8)',
    'rgba(0,0,0,0.9)',
    'rgba(0,0,0,0.9)',
    'rgba(0,0,0,1)',
  ],
  inputPlaceholder: 'rgba(255,255,255, 0.8)',
};

export {colors};
