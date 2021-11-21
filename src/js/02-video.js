let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000),
);

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
