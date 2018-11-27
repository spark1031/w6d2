class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', '#cell', (e) => {
      let $square = $(e.target);
      console.log($square);
      let rawPos = $square.data('pos');
      let pos = [rawPos[0], rawPos[2]]; 
      this.game.playMove(pos);
      let mark = this.game.currentPlayer;
      $square.text(mark);
    });
  }
  
  makeMove($square) {
    $square.removeClass();
    $square.addClass('white');
    
  }

  setupBoard() {
    //make a grid using ul 
    const $board = $('<ul>');
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $square = $('<li>');
        $square.attr('id', 'cell');
        $square.data('pos', `${[i, j]}`);
        $board.append($square);
      }
    }
    this.$el.append($board);  
  }
}

module.exports = View;
