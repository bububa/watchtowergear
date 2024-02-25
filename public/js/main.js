tailwind.config = {
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },
  },
}

new SiriWave({
  container: document.getElementById("siri-container"),
  cover: true,
  speed: 0.1,
  color: '#4b5563'
});
