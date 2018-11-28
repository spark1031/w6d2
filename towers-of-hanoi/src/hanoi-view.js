

class View {
  constructor (game, $rootEl) {
    this.game = game;
    this.$rootEl = $rootEl;
    this.setup();
  }
  
  setup() {
    for (let i = 0; i < 3; i++) {
      const $pole = $('<ul>');
      $pole.addClass('pole');
      $pole.attr('id', i);
      this.$rootEl.append($pole);
      
      if (i === 0) {
        for (let i = 0; i < 3; i++) {
          const $disc = $('<li>');
          $disc.addClass('disc');
          if (i === 0) $disc.attr('id', 'small');
          if (i === 1) $disc.attr('id', 'medium');
          if (i === 2) $disc.attr('id', 'large');
          
          $pole.append($disc);
        }
      }
    }

  }
  
  render() {
    
  }
}

module.exports = View;