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
      this.makeMove($square);
      if (this.game.isOver()) {
        if (this.game.winner()) {
          const wonMessage = $('<h1 class="message">').text(`${this.game.currentPlayer} has won!`);
          this.$el.append(wonMessage);
        } else {
          const tieMessage = $('<h1 class="message">').text(`It's a draw`);
          this.$el.append(tieMessage);
        }
      }
    });
  }
  
  makeMove($square) {
    let pos = $square.data('pos');
    this.game.playMove(pos);
    let mark = this.game.currentPlayer;
    $square.html(`<div class="mark">${mark}</div>`);
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
        $square.data('pos', [i, j]);
        $board.append($square);
      }
    }
    this.$el.append($board);  
  }
}

module.exports = View;
