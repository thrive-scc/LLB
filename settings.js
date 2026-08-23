(function () {
  'use strict';

  const chapterStateKey = 'llb-completed-chapters';
  const slide6SettingsKey = 'llb-slide6-settings';

  function readChapterState() {
    try {
      return JSON.parse(localStorage.getItem(chapterStateKey) || '{}');
    } catch (error) {
      return {};
    }
  }

  function writeSlide6State(completed) {
    const state = readChapterState();
    state[6] = completed;
    localStorage.setItem(chapterStateKey, JSON.stringify(state));
    localStorage.setItem(slide6SettingsKey, JSON.stringify({ completed }));
  }

  function restoreSlide6State() {
    try {
      const settings = JSON.parse(localStorage.getItem(slide6SettingsKey));
      if (settings && typeof settings.completed === 'boolean') {
        writeSlide6State(settings.completed);
      }
    } catch (error) {
      // Ignore malformed settings and keep the application defaults.
    }
  }

  function findSlide6Checkbox() {
    const directMatch = document.querySelector('[sc-camel-on-click*="toggleChapter6"] > div');
    if (directMatch) {
      return directMatch;
    }

    return Array.from(document.querySelectorAll('div')).find((element) => {
      const text = element.textContent.trim();
      return text === '06' && element.nextElementSibling?.textContent.includes('LOVE THE LIMITATIONS');
    })?.parentElement?.lastElementChild;
  }

  function watchSlide6() {
    document.addEventListener('click', (event) => {
      const checkbox = findSlide6Checkbox();
      if (!checkbox || !checkbox.contains(event.target)) {
        return;
      }

      requestAnimationFrame(() => {
        writeSlide6State(checkbox.textContent.trim() === '✓');
      });
    }, true);
  }

  restoreSlide6State();
  document.addEventListener('DOMContentLoaded', watchSlide6);
  window.LivingLifeBackwardsSettings = {
    loadSlide6: restoreSlide6State,
    saveSlide6: writeSlide6State
  };
}());
