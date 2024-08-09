import { emitter } from '../main.js';

export const usePreloader = (duration) => {
  setTimeout(
    () => {
      emitter.emit('_animate_preloader_-close-preloader');
    },
    duration ? duration : 1000,
  );
};
