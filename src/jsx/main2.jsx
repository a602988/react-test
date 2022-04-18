/* ========================================
  OX比賽遊戲
  A. 小正方形(Square) 按鈕
  B. 版子(Board 放入小正方形(Square)
  C. 建立遊戲(Game)介面、規則
  D. 輸出前端 ReactDOM
========================================*/
/*--------------------------------------
  A. 建立小正方形(Square) 按鈕
--------------------------------------*/
class Square extends React.Component {
    render(){
        return(
          <button className="square">1</button>
        );
    }
}


/*--------------------------------------
  B. 建立一個版子(Board 放入小正方形(Square)
  1. 建立一個函數： 小正方形
  2. render 介面：
    2.1 宣告狀態：文字+狀態
    2.2 return ：
      2.2.1  html內容 => 小正方形函數(1)
--------------------------------------*/

class Board extends React.Component {
    render(){
        return(
          <Square />
        );
    }
}

/*--------------------------------------
  C. 建立遊戲(Game)介面、規則
  1. 建立遊戲html：包含遊戲區(game-board)、文字顯示區game-info(狀態status、步驟儲存ol)
--------------------------------------*/

class Game extends React.Component {
    render(){
        return(
          <Board />
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