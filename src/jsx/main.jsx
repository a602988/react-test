/* ========================================
  OX比賽遊戲
  A. function 物件：小正方形(Square) 按鈕
  B. 版子(Board 放入小正方形(Square)
  C. 建立遊戲(Game)介面、規則
  D. 輸出前端 ReactDOM
  E. function 物件：決定勝負 calculateWinner
========================================*/
/*--------------------------------------
  A. function 物件：小正方形Square 按鈕
  =>  按鈕動作:被點擊當下時，執行點擊動作
--------------------------------------*/

function Square(props){
  return(
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}
/*--------------------------------------
  E. function 物件：決定勝負 calculateWinner(小方塊們)
  => 定義：
    => 贏的線條
  => 迴圈贏的線條
    => 定義： a、b、c 等於陣列內的三個數值
      => 如果所在值等於 a 且 a = b 且 a = c ，回傳 squares[i]
      => 都無，就跳出
--------------------------------------*/

function calculateWinner(squares){
  const line = [
    [0, 1, 2],
    [3, 4 ,5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < line.length; i++ ){
    const [a, b, c] = line[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return  null;
}

/*--------------------------------------
  B. 建立一個版子(Board 放入小正方形(Square)
  =>  建立一個函數： 小正方形，傳值進去
  =>  render 介面：多個小方塊
--------------------------------------*/

class Board extends React.Component {
  readerSquare(i) {
    return(
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render(){
    return(
      <div>
        <div className='board-row'>
          {this.readerSquare(0)}
          {this.readerSquare(1)}
          {this.readerSquare(2)}
        </div>
        <div className='board-row'>
          {this.readerSquare(3)}
          {this.readerSquare(4)}
          {this.readerSquare(5)}
        </div>
        <div className='board-row'>
          {this.readerSquare(6)}
          {this.readerSquare(7)}
          {this.readerSquare(8)}
        </div>
      </div>
    );
  }
}

/*--------------------------------------
  C. 建立遊戲(Game)介面、規則
  =>  建構:
    =>  初始的state:
          =>  history歷史：
            =>  squares:包含九個null 的array(對應Square)
          =>  xIsNext: X 是否為下一個玩者，預設值為true
  =>  函數：handleClick點擊小方塊動作，
    => 宣告：紀錄、現在紀錄、複製小方塊們
    => 如果贏了或者小方塊內有值，就跳出，按鈕動作無效
    => 點擊的小方塊值 = 如果是 xIsNext 是true，就顯示X，否則顯示O
    => 設定狀態：合併新的squares 於歷史中history、xIsNext等於反向的值

  =>  render :
    =>  參數：過去紀錄history、現在紀錄current、狀態status
    =>  參數：moves 回到過去
      =>  參數：desc描述，如果存在，顯示要移動的紀錄，否則顯示遊戲開始
      =>  return： 遊戲紀錄li
    =>  建立遊戲html：包含遊戲區(game-board)、文字顯示區game-info(狀態status、步驟儲存ol)
--------------------------------------*/

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares : Array(9).fill(null)
        }
      ],
      xIsNext: true
    }
  }
  handleClick(i){
    const history = this.state.history;
    const current = history[history.length -1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X':"O";
    this.setState({
      history: history.concat([{
        squares : squares,
      }]),
      xIsNext: !this.state.xIsNext,
    })
  }
  render(){
    const history = this.state.history;
    const current = history[history.length -1];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? '返回：' + move : '遊戲開始';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });
    let status;
    if(winner){
      status = '贏者：' + winner;
    }else{
      status = '下一個遊戲者：' + (this.state.xIsNext ? 'X':"O");
    }
    return(
      <div className="game">
        <div className="game-borad">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>

    );
  }
}


/*--------------------------------------
  D. 輸出前端 ReactDOM
--------------------------------------*/

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)