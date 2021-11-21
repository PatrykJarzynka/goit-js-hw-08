var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      console.log('Invaild time!');
      break;

    default:
      console.log('Unkown error!');
      break;
  }
});

_.throttle(console.log('xd'), 5000);
