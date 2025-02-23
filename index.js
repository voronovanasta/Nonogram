const PATTERNS = {
    "light":{
      'tree': [
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
      ],
       'rhombus': [
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
      ],
       'ruLetterD': [
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
      ],
       'dinosour': [
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 0, 1, 0],
      ],
       'fan': [
        [0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1],
        [0, 0, 1, 0, 0],
        [1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0],
      ],
    },
  
    'middle': {
      'snowman': [[1,1,1,0,0,0,0,1,1,1],[0,1,0,0,1,0,1,0,1,1],[1,1,0,0,1,1,1,1,1,1],[0,1,0,0,0,0,0,0,1,0],[1,1,1,0,0,0,0,1,1,1],[1,1,0,1,1,1,1,0,1,1],[1,0,0,1,0,0,0,0,0,1],[1,0,0,1,0,1,0,0,0,1],[1,0,0,1,0,0,0,0,0,1],[1,1,0,0,0,1,0,0,1,1]],
      'turnip': [[0,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,0,1,1,1,0],[1,1,0,0,1,1,1,1,1,1],[1,1,0,0,0,1,0,0,1,1],[0,0,0,1,1,1,1,1,0,0],[0,0,1,1,0,0,0,1,1,0],[0,0,1,0,0,0,0,0,1,0],[1,1,1,0,0,0,0,0,1,1],[1,1,1,1,0,0,0,1,1,1],[1,1,1,1,1,0,1,1,1,1]],
      'cat': [[0,0,0,0,0,0,1,1,1,0],[1,0,0,0,1,0,1,0,1,1],[1,1,0,1,1,0,0,0,0,1],[1,1,1,1,1,0,0,0,0,1],[1,0,1,0,1,0,0,0,0,1],[1,1,1,1,1,0,0,1,1,1],[0,1,1,1,0,0,1,1,1,1],[0,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1],[0,0,0,1,1,1,1,0,1,1]],
      'kettle': [[0,0,1,1,1,1,1,0,0,0],[0,1,0,0,0,0,0,1,0,0],[0,1,0,0,1,0,0,1,0,0],[0,0,1,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,0,1],[1,0,1,1,1,1,1,1,1,1],[1,0,0,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,0,0]],
      'plum': [[0,0,0,0,0,1,1,1,1,0],[0,1,1,1,1,0,0,1,0,0],[1,1,1,1,1,0,1,1,0,0],[1,1,1,1,0,0,1,0,0,0],[1,1,0,0,1,1,1,1,1,0],[1,0,0,1,1,1,1,0,1,1],[0,0,0,1,1,1,1,1,0,1],[0,0,0,1,1,1,1,1,0,1],[0,0,0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1,1,0]],
    
    },
  
    'hard': {
      'coffee': [[1,1,0,0,0,0,0,0,0,1,0,0,1,1,1],[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,1,0,0,0,1,1,1,1,1,1],[1,1,0,0,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1],[1,1,1,1,1,0,1,1,1,1,1,0,0,0,1],[1,1,0,1,1,1,1,1,1,1,1,0,1,1,0],[1,1,0,0,1,1,1,1,1,1,0,0,1,1,0],[1,1,0,0,0,0,0,0,0,0,0,0,1,0,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,1,1],[1,0,1,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,1,1,0,0,0,0,0,0,1,1,0,0,1],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,0,0,0,0,0,0,1,1,1,1]],
      'elephant': [[0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[0,0,1,1,1,0,0,0,0,1,1,1,1,1,0],[1,1,0,1,0,0,0,0,0,0,1,0,0,1,1],[1,0,0,0,1,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,1,0,0,0,0,1,0,1,0,0,1],[1,0,0,1,0,1,0,0,0,0,0,1,0,0,1],[1,1,0,1,1,1,0,0,1,0,0,1,0,1,1],[0,1,1,1,1,0,0,0,1,0,1,1,1,1,0],[0,1,0,1,0,0,0,1,1,1,1,0,0,0,0],[0,1,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,0,1,0,0,1,1,1,0],[1,1,1,1,1,1,1,0,1,0,0,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
      'lion': [[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[1,0,0,1,1,1,1,1,1,0,0,1,1,1,0],[1,0,1,1,0,1,0,0,1,1,0,1,1,1,0],[1,1,1,0,0,1,0,0,0,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,1,0,0,0,0,1,0,0,0,1,1,1,1],[1,0,0,1,0,1,0,0,0,0,0,1,1,1,1],[1,0,0,1,1,1,0,0,0,0,0,1,0,1,1],[1,1,0,1,1,1,0,0,0,0,1,1,1,0,1],[1,1,0,0,1,0,0,0,0,0,1,0,1,0,1],[1,1,0,1,1,1,1,0,1,1,1,0,1,1,0],[1,1,1,0,0,0,0,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,1,0],[1,0,1,1,1,1,1,1,1,1,0,1,0,0,0],[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0]],
      'candle': [[1,1,1,1,0,0,1,1,1,1,1,0,0,1,1],[1,1,0,0,0,1,1,0,0,0,1,1,0,0,1],[1,0,0,0,0,1,0,0,1,0,0,1,0,0,0],[1,0,0,0,0,1,0,1,1,1,0,1,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],[0,1,0,0,1,1,1,0,0,0,1,1,1,0,0],[0,1,0,0,0,1,0,0,0,0,1,1,0,0,0],[1,0,1,0,1,1,0,0,1,0,0,1,1,0,0],[0,1,0,0,1,0,0,1,1,0,0,0,1,0,0],[0,1,0,0,1,0,0,1,0,1,0,0,1,0,0],[1,0,0,0,1,1,0,1,1,1,0,1,1,0,0],[1,0,0,0,0,1,0,0,1,0,0,1,0,0,0],[1,1,0,0,0,0,1,1,1,1,1,0,0,0,1],[1,1,1,1,0,1,1,0,0,0,1,1,0,1,1],[1,1,1,1,0,1,1,1,1,1,1,1,0,1,1]],
      'frog': [[0,0,0,0,1,1,0,0,0,1,1,0,0,1,0],[1,0,0,1,1,1,1,0,1,1,1,1,0,1,0],[1,0,0,1,0,1,1,1,1,0,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,1,0,1,0,1,1,1,1,1,1,0],[0,1,1,0,1,1,1,1,1,1,1,0,1,1,0],[0,1,1,1,0,0,0,0,0,0,0,1,1,1,0],[0,0,1,1,1,0,0,0,0,1,1,1,1,0,0],[1,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[0,0,1,1,1,1,0,0,1,1,1,0,0,0,1],[1,1,1,0,1,0,0,0,0,1,1,1,0,0,0],[0,1,0,0,1,0,0,0,0,1,0,1,1,1,0],[0,0,0,1,1,1,0,0,1,1,1,0,1,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,1],[0,1,1,1,1,0,0,0,0,1,1,1,1,0,1]],
    },
  }
  
  let fieldRowCount = 5;
  let fieldColumnCount = 5;
  let cellWidth = 35;
  let cellHeight = 35;
  let cells = [];
  let width = fieldColumnCount * cellWidth;
  let height = fieldRowCount * cellHeight;
  let patternCellsCount = 0;
  let idTimer = null;
  let sec = 0;
  let minutes = 0;
  let cklickCount = 0;
  const highScoreTable = [];
  let primeColor = "#000000";
  let fillColor = "#000000"
  const levelsArr = ['light', 'middle', 'hard']
  const light = ['tree', 'rhombus', 'ruLetterD', 'dinosour', 'fan'];
  const middle = ['snowman', 'turnip', 'cat', 'kettle', 'plum'];
  const hard = ['coffee', 'elephant', 'lion', 'candle', 'frog'];
  
  
  const canvasWrapper = document.createElement("div");
  canvasWrapper.className = "canvas-wrapper";
  
  const canvas = document.createElement("canvas");
  canvas.className = "canvas canvas-field";
  canvas.id = "field";
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  
  const solutionBtn = document.createElement("button");
  solutionBtn.type = "button";
  solutionBtn.id = "solution";
  solutionBtn.className = "button solution-btn";
  solutionBtn.textContent = "Solution";
  
  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.id = "save";
  saveBtn.className = "button save-btn";
  saveBtn.textContent = "Save";
  
  const loadBtn = document.createElement("button");
  loadBtn.type = "button";
  loadBtn.id = "load";
  loadBtn.className = "button load-btn";
  loadBtn.textContent = "Continue saved game";
  
  const resetBtn = document.createElement("button");
  resetBtn.type = "button";
  resetBtn.id = "reset";
  resetBtn.className = "button reset-btn";
  resetBtn.textContent = "Reset";
  
  const randomBtn = document.createElement("button");
  randomBtn.type = "button";
  randomBtn.id = "random";
  randomBtn.className = "button random-btn";
  randomBtn.textContent = "Random game";
  
  const scoreTableLink = document.createElement("a");
  const scoreIcoContainer = document.createElement('span');
  const tableTitle = document.createElement('span');
  tableTitle.className = 'table-title';
  scoreIcoContainer.className = 'score-ico'
  scoreTableLink.href = '#'
  tableTitle.id = "table";
  scoreTableLink.classList.add("table-link");
  tableTitle.textContent = "Scores";
  
  scoreTableLink.append(tableTitle, scoreIcoContainer)
  
  const themeMode = document.createElement('a');
  themeMode.className = 'theme-mode'
  themeMode.innerHTML = '<span class="material-symbols-outlined">settings_night_sight</span>';
  themeMode.id = 'theme';
  themeMode.href = '#';
  
  const selectContainer = document.createElement('div');
  selectContainer.className = 'select-container';
  
  const menu = document.createElement('div');
  menu.className = 'menu';
  
  const gameBtnsContainer = document.createElement('div');
  gameBtnsContainer.className = 'game-btns-container';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

gameBtnsContainer.append(solutionBtn, saveBtn, resetBtn)
menu.append(themeMode, loadBtn, randomBtn, selectContainer, scoreTableLink);
canvasWrapper.append(canvas);
container.append(canvasWrapper, menu);
wrapper.append(gameBtnsContainer, container)
document.body.append(wrapper);
  
  themeMode.addEventListener('click', darkThemeOn)
  
  function updateCanvasSettings (levelNumber){
    // let level =  document.getElementById('levels').options.selectedIndex;
     switch(levelNumber){
       case 0:
       cellWidth = 35;
       cellHeight = 35;
       fieldRowCount = 5;
       fieldColumnCount = 5;
       width = fieldColumnCount * cellWidth;
       height = fieldRowCount * cellHeight;
       canvas.width = width;
       canvas.height = height;
       break;
       case 1: 
       cellWidth = 25;
       cellHeight = 25;
       fieldRowCount = 10;
       fieldColumnCount = 10;
       width = fieldColumnCount * cellWidth;
       height = fieldRowCount * cellHeight;
       canvas.width = width;
       canvas.height = height;
       break;
       case 2: 
       cellWidth = 20;
       cellHeight = 20;
       fieldRowCount = 15;
       fieldColumnCount = 15;
       width = fieldColumnCount * cellWidth;
       height = fieldRowCount * cellHeight;
       canvas.width = width;
   canvas.height = height;
       break;
     }
   }
   
   function calculateClues(pattern) {
     let leftClues = [];
     let topClues = [];
   
     for (let r = 0; r < pattern.length; r++) {
       let leftClueCount = 0;
       let subarr = [];
       for (let c = 0; c < pattern[r].length; c++) {
         leftClueCount += pattern[r][c];
         if (pattern[r][c] === 0 && leftClueCount > 0) {
           subarr.push(leftClueCount);
           leftClueCount = 0;
         }
         if (pattern[r].length - 1 === c && leftClueCount > 0) {
           subarr.push(leftClueCount);
         }
       }
       leftClues.push(subarr);
     }
   
     for (let c = 0; c < fieldColumnCount; c++) {
       let topClueCount = 0;
       let subarr = [];
       for (let r = 0; r < pattern.length; r++) {
         topClueCount += pattern[r][c];
         if (pattern[r][c] === 0 && topClueCount > 0) {
           subarr.push(topClueCount);
           topClueCount = 0;
         }
         if (pattern.length - 1 === r && topClueCount > 0) {
           subarr.push(topClueCount);
         }
       }
       topClues.push(subarr);
     }
   
     return {
       leftClues: leftClues,
       topClues: topClues,
     };
   }
   
   function defineCells(pattern) {
     cells = [];
     for (let r = 0; r < fieldRowCount; r++) {
       cells[r] = [];
       for (let c = 0; c < fieldColumnCount; c++) {
         cells[r][c] = {
           x: 0,
           y: 0,
           value: pattern[r][c],
           isPainted: false,
           isCrossed: false,
         };
       }
     }
   }
   
   function drawSolution() {
     resetGame()
     for (let r = 0; r < fieldRowCount; r++) {
       for (let c = 0; c < fieldColumnCount; c++) {
         ctx.beginPath();
         ctx.rect(cells[r][c].x, cells[r][c].y, cellWidth - 0.5, cellHeight - 0.5);
         if (cells[r][c].value === 1) {
           cells[r][c].isPainted = true;
           ctx.fillStyle = primeColor;
           ctx.fill();
           ctx.closePath();
         } 
       }
     }
   }
   
   function drawField() {
     ctx.clearRect(0,0,width,height)
     for (let r = 0; r < fieldRowCount; r++) {
       for (let c = 0; c < fieldColumnCount; c++) {
         const cellX = c * (cellWidth) + 0.5;
         const cellY = r * (cellHeight) + 0.5;
         cells[r][c].x = cellX;
         cells[r][c].y = cellY;
         ctx.beginPath();
         ctx.rect(cellX, cellY, cellWidth, cellHeight);
         ctx.strokeStyle = primeColor;
         ctx.stroke();
         ctx.closePath();
       }
     }
   
     if(fieldRowCount===10){
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(0, canvas.height/2); 
       ctx.lineTo(canvas.width, canvas.height/2); 
       ctx.stroke();
       ctx.closePath();
   
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(canvas.width/2, 0); 
       ctx.lineTo(canvas.width/2, canvas.height); 
       ctx.stroke();
       ctx.closePath();
     }
   
     if(fieldRowCount === 15){
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(0, canvas.height/3); 
       ctx.lineTo(canvas.width, canvas.height/3); 
       ctx.stroke();
       ctx.closePath();
   
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(canvas.width/3, 0); 
       ctx.lineTo(canvas.width/3, canvas.height); 
       ctx.stroke();
       ctx.closePath();
   
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(0, canvas.height/3 * 2); 
       ctx.lineTo(canvas.width, canvas.height/3 * 2); 
       ctx.stroke();
       ctx.closePath();
   
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(canvas.width/3 * 2, 0); 
       ctx.lineTo(canvas.width/3 * 2, canvas.height); 
       ctx.stroke();
       ctx.closePath();
     }
   }
   
   function refreshLines(){
     if(fieldRowCount===10){
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle =primeColor
       ctx.moveTo(0, canvas.height/2); 
       ctx.lineTo(canvas.width, canvas.height/2); 
       ctx.stroke();
       ctx.closePath();
   
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(canvas.width/2, 0); 
       ctx.lineTo(canvas.width/2, canvas.height); 
       ctx.stroke();
       ctx.closePath();
     }
   
     if(fieldRowCount === 15){
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(0, canvas.height/3); 
       ctx.lineTo(canvas.width, canvas.height/3); 
       ctx.stroke();
       ctx.closePath();
   
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(canvas.width/3, 0); 
       ctx.lineTo(canvas.width/3, canvas.height); 
       ctx.stroke();
       ctx.closePath();
   
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(0, canvas.height/3 * 2); 
       ctx.lineTo(canvas.width, canvas.height/3 * 2); 
       ctx.stroke();
       ctx.closePath();
   
       ctx.beginPath();
       ctx.lineWidth = 1.5;
       ctx.strokeStyle = primeColor
       ctx.moveTo(canvas.width/3 * 2, 0); 
       ctx.lineTo(canvas.width/3 * 2, canvas.height); 
       ctx.stroke();
       ctx.closePath();
     }
   }
   
   function drawLeftClues(leftCluesArr, level) {
     if(document.getElementById('left')){
       document.getElementById('left').remove()
     }
     
     let columnCount = 0;
     for(let i = 0; i< leftCluesArr.length; i++){
       if(columnCount < leftCluesArr[i].length){
         columnCount = leftCluesArr[i].length;
       }
     }
   
     for(let i = 0; i < leftCluesArr.length; i++){
       while(leftCluesArr[i].length !== columnCount){
         leftCluesArr[i].unshift(0)   
      }
     }
   
     const leftTable = document.createElement('table');
     leftTable.className = `${level}-left-table table`;
     leftTable.id = 'left';
     canvasWrapper.append(leftTable);
   
     const tableBody = document.createElement('tbody');
     leftTable.append(tableBody);
   
     for(let r = 0; r< leftCluesArr.length; r++){
       let row = tableBody.insertRow()
       for(let c = 0; c < leftCluesArr[r].length; c++){
         let cell = row.insertCell();
         cell.className = `${level}-cell cell`;
         if(leftCluesArr[r][c] != 0){
           cell.textContent = leftCluesArr[r][c];
           cell.classList.add('clue')
         }
         
       }
   }
   
   if(leftCluesArr.length === 10){
     const rows = [...leftTable.rows];
     rows[4].className = 'thick-bottom line'
   }
   
   if(leftCluesArr.length === 15){
     const rows = [...leftTable.rows];
     rows[4].className = `${level}-cell cell thick-bottom line`
     rows[9].className = `${level}-cell cell thick-bottom line`
   }
   }
   
   function drawTopClues(topCluesArr, level) {
     if(document.getElementById('top')){
       document.getElementById('top').remove()
     }
     let columnCount = 0;
     
     for(let i = 0; i< topCluesArr.length; i++){
       if(columnCount < topCluesArr[i].length){
         columnCount = topCluesArr[i].length
       }
     }
   
     for(let i = 0; i < topCluesArr.length; i++){
       
       while(topCluesArr[i].length !== columnCount){
         topCluesArr[i].unshift(0)   
      }
     }
     const topTable = document.createElement('table');
     topTable.className = `${level}-top-table table`;
     topTable.id = 'top';
     canvasWrapper.append(topTable);
   
     const tableBody = document.createElement('tbody');
     topTable.append(tableBody);
   
     for (let c = 0; c < columnCount; c++) {
       let row = tableBody.insertRow()
       for (let r = 0; r < topCluesArr.length; r++) {
         let cell = row.insertCell();
         cell.className = `${level}-cell cell`;
         if(topCluesArr[r][c] != 0){
           cell.textContent = topCluesArr[r][c];
           cell.classList.add('clue');
         }
       }
     }
   
     if(topCluesArr.length === 10){
       const rows = [...topTable.rows];
       for (let i = 0; i < rows.length; i++){
         const cells = rows[i].cells;
         cells[4].className = `${level}-cell cell thick-right line`;
         if(cells[4].textContent){
           cells[4].classList.add('clue');
         }
       }
       
     }
     
     if(topCluesArr.length === 15){
       const rows = [...topTable.rows];
       for (let i = 0; i < rows.length; i++){
         const cells = rows[i].cells;
         cells[4].className = `${level}-cell cell thick-right line`;
         cells[9].className = `${level}-cell cell thick-right line`;
   
         if(cells[4].textContent){
           cells[4].classList.add('clue');
         }
   
         if(cells[9].textContent){
           cells[9].classList.add('clue');
         }
       }
   
     }
   }
   
   function calculateWinCondition (){
     let correctFilledCells = 0;
     for(let i = 0; i < cells.length; i++){
       for(let j = 0; j < cells[i].length; j++){
           if(cells[i][j].value == 1) {
             correctFilledCells++;
           }
         }
       }
       console.log(correctFilledCells)
   return correctFilledCells;
   }
   
   function createResultMessage (){
     const overlay = document.createElement('div');
     const resultModal = document.createElement('button');
     const resultBtn = document.createElement('button');
     const message = document.createElement('p')
     message.id = 'message'
     message.textContent = ''
     resultBtn.id = 'result-btn'
     resultBtn.textContent = 'Ok!';
     resultBtn.className = 'button'
     overlay.className = 'modal-overlay modal-closed';
     resultModal.className = 'result-modal modal-closed';
     resultModal.append(message, resultBtn)
   
     resultBtn.addEventListener('click', (e)=>{
       hideResultMessage();
       resetTimer()
     })
   
     document.body.append(overlay, resultModal)
   }
   function showResultMessage (){
     let passedTime = minutes * 60 + sec;
     const message = document.getElementById('message')
     message.textContent = `Great! You have solved the nonogram in ${passedTime} seconds!`;
     document.querySelector('.modal-overlay').classList.remove('modal-closed')
     document.querySelector('.result-modal ').classList.remove('modal-closed')
     
   }
   
   function hideResultMessage (){
     document.querySelector('.modal-overlay').classList.add('modal-closed')
     document.querySelector('.result-modal').classList.add('modal-closed')
   }
   
   function fillCell(e, fillColor) {
     let event = e;
     let button = e.button;
      for (let r = 0; r < cells.length; r++) {
       for (let c = 0; c < cells[r].length; c++) {
         let clientX = event.clientX - canvas.offsetLeft;   
         let clientY = event.clientY - canvas.offsetTop;
         if(r === 4 || r ===5 || c === 4 || c === 5){
           refreshLines()
         }
   
         if (
           clientX > cells[r][c].x &&
           clientX < cells[r][c].x + cellWidth &&
           clientY > cells[r][c].y &&
           clientY < cells[r][c].y + cellHeight
         ) {
           
   
           if (!cells[r][c].isPainted && button === 0) {
             ctx.clearRect(cells[r][c].x, cells[r][c].y, cellWidth, cellHeight);
             cells[r][c].isPainted = true;
             ctx.beginPath();
             ctx.rect(cells[r][c].x - 0.5, cells[r][c].y-0.5, cellWidth, cellHeight);
             ctx.fillStyle = fillColor;
             ctx.fill();
             ctx.closePath();
             if(cells[r][c].value === 1) {
               patternCellsCount++
             }
             else{
               patternCellsCount--;
             }
           } else if (cells[r][c].isPainted && button === 0) {
             ctx.clearRect(cells[r][c].x + 0.5, cells[r][c].y + 0.5, cellWidth - 0.5, cellHeight - 0.5);
             cells[r][c].isPainted = false;
             console.log('x: ' + cells[r][c].x + "y: " + cells[r][c].y)
              if(cells[r][c].value === 1) {
               patternCellsCount--
             }
             else{
               patternCellsCount++;
             }
           } else if (!cells[r][c].isCrossed && button === 2) {
             ctx.clearRect(cells[r][c].x + 0.5, cells[r][c].y + 0.5, cellWidth - 0.5, cellHeight - 0.5);
             //cross
             ctx.beginPath();
             ctx.moveTo(cells[r][c].x + 3.2, cells[r][c].y + 3.2);
             ctx.lineTo(cells[r][c].x + cellWidth - 3.2, cells[r][c].y + cellHeight - 3.2);
             ctx.stroke();
   
             ctx.beginPath();
             ctx.moveTo(cells[r][c].x + 3.2, cells[r][c].y + cellHeight -3.2);
             ctx.lineTo(cells[r][c].x + cellWidth -3.2, cells[r][c].y +3.2);
             ctx.stroke();
              if(cells[r][c].value === 1 && cells[r][c].isPainted) {
               patternCellsCount--;
             };
   
             cells[r][c].isCrossed = true;
             cells[r][c].isPainted = false;
           } else if (cells[r][c].isCrossed && button === 2) {
             ctx.clearRect(cells[r][c].x + 0.5, cells[r][c].y + 0.5, cellWidth - 0.5, cellHeight - 0.5);
             cells[r][c].isCrossed = false;
           }
         }
       }
     }
   }
   
   canvas.addEventListener("mouseup", (e) => { 
     cklickCount++;
     if(cklickCount === 1){
       startTimer();
     }
   
     fillCell(e, primeColor);
       
       if(patternCellsCount === calculateWinCondition()) {
         stopTimer();
         document.getElementById('load').removeAttribute('disabled');
         patternCellsCount = 0;
         cklickCount = 0;
         showResultMessage();
         let levelIndex = document.getElementById('levels').options.selectedIndex;
         let level = document.getElementById('levels').options[levelIndex].text;
         let patternIndex = document.getElementById('items').options.selectedIndex;
         let pattern = document.getElementById('items').options[patternIndex].text;
         let passedTime = minutes * 60 + sec;
         updateScoreTable(passedTime, level, pattern)
       }
   });
   
   // canvas.addEventListener('touchmove', (e)=>{
   //   e.preventDefault();
   //   switch(e.target.button){
   //     case 0:
   //       fillCell(0);
   //       break;
   //     case 2:
   //       fillCell(2);
   //       break;
   //   }
   // })
   canvas.addEventListener("contextmenu", (e) => {
     e.preventDefault();
   });
   
   function createlevelsSelect (){
     const levels = ['light', 'middle', 'hard'];
     const levelsSelect = document.createElement('select');
     levelsSelect.className = 'select';
     levelsSelect.name = 'levels';
     levelsSelect.id = 'levels';
     const levelsLabel = document.createElement('label')
     levelsLabel.for = 'levels'
     for(let i = 0; i < levels.length; i++){
       let option = document.createElement('option');
       option.value = levels[i]
       option.text = levels[i]
       levelsSelect.append(option)
     }
     levelsLabel.append(levelsSelect)
     selectContainer.prepend(levelsLabel)
   }
   
   function createItemsSelect (){
   
   const itemsSelect = document.createElement('select');
   itemsSelect.className = 'select'
   itemsSelect.name = 'items';
   itemsSelect.id = 'items';
   const itemssLabel = document.createElement('label')
   itemssLabel.for = 'items'
   for(let i = 0; i < light.length; i++){
     let option = document.createElement('option');
     option.value = light[i];
     option.text = light[i];
     itemsSelect.append(option)
   }
   itemssLabel.append(itemsSelect)
   selectContainer.append(itemssLabel)
   }
   
   function updateItemsSelect (level){
     switch(level){
       case 0:
         level = light;
         break;
       case 1:
         level = middle;
         break;
     
       case 2:
         level = hard;
         break;
     }
     const itemsSelect = document.getElementById('items')
     
     for(let i = 0; i < level.length; i++){
       itemsSelect.options[i].text = level[i]
       itemsSelect.options[i].value = level[i]
       
     }
   }
   
   function createTimer(){
     const timer = document.createElement("span");
     
     timer.id = "timer";
     timer.classList.add("timer");
     timer.textContent = `${minutes.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`;
     document.querySelector('.canvas-wrapper').prepend(timer)
   }
   
   function startTimer (){
     if(sec === 60){
      minutes++;
      sec = 0;
     }
     document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`;
     sec++;
     idTimer = setTimeout(startTimer, 1000);
   }
   
   function stopTimer(){
     clearTimeout(idTimer);
   }
   
   function resetTimer (){
     minutes = 0;
     sec = 0;
     document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`;
   }
   
   function saveGame() {
     const savedGame = {
       'timerState': null,
       'level': null,
       'pattern': null,
       'paintedCells': null,
       'patternCellsCount':null,
     }
     let levelIndex = document.getElementById('levels').options.selectedIndex;
     let level = document.getElementById('levels').options[levelIndex].text;
     let patternIndex = document.getElementById('items').options.selectedIndex;;
     let pattern = document.getElementById('items').options[patternIndex].text;
     let passedTime = minutes * 60 + sec;
     savedGame.timerState = passedTime;
     savedGame.level = level;
     savedGame.pattern = pattern;
     savedGame.paintedCells = cells;
     savedGame.patternCellsCount = patternCellsCount;
     localStorage.setItem('saved', JSON.stringify(savedGame))
   }
   
   function downloadSavedGame (){
     if(localStorage.saved){
       let savedGameObj = JSON.parse(localStorage.getItem('saved'));
       patternCellsCount = savedGameObj.patternCellsCount;
       let level = savedGameObj.level;
       let pattern = savedGameObj.pattern;
       let savedCells = savedGameObj.paintedCells;
       //cells = savedCells;
       let selectedPattern = PATTERNS[level][pattern];
       minutes = parseInt(savedGameObj.timerState / 60);
       sec  = savedGameObj.timerState % 60;
      
       let levelOptions = document.getElementById('levels').getElementsByTagName('option');
       for(let i = 0; i < levelOptions.length; i++){
         if(levelOptions[i].value === level) levelOptions[i].selected = true;
       }
   
       updateItemsSelect(levelsArr.indexOf(level))
   
       let itemsOptions = document.getElementById('items').getElementsByTagName('option');
       for(let i = 0; i < itemsOptions.length; i++){
         if(itemsOptions[i].value === pattern) itemsOptions[i].selected = true;
       }
    
       updateCanvasSettings(levelsArr.indexOf(level));
       updateModel(selectedPattern, level);
   
     for (let r = 0; r < fieldRowCount; r++) {
       for (let c = 0; c < fieldColumnCount; c++) {
         ctx.beginPath();
         ctx.rect(savedCells[r][c].x, savedCells[r][c].y, cellWidth, cellHeight);
         if (savedCells[r][c].isPainted) {
           cells[r][c].isPainted = true
           ctx.fillStyle = primeColor; 
           ctx.fill();
           ctx.closePath();
         }
         else if(savedCells[r][c].isCrossed){
           cells[r][c].isCrossed = true;
   
             //border
             ctx.beginPath();
             ctx.rect(savedCells[r][c].x, savedCells[r][c].y, cellWidth, cellHeight);
             ctx.strokeStyle = primeColor;
             ctx.stroke();
             ctx.closePath();
   
             //cross
             ctx.beginPath();
             ctx.moveTo(savedCells[r][c].x + 3.2, savedCells[r][c].y + 3.2);
             ctx.lineTo(savedCells[r][c].x + savedCells - 3.2, cells[r][c].y + cellHeight - 3.2);
             ctx.stroke();
   
             ctx.beginPath();
             ctx.moveTo(savedCells[r][c].x + 3.2, savedCells[r][c].y + cellHeight -3.2);
             ctx.lineTo(savedCells[r][c].x + cellWidth -3.2, savedCells[r][c].y +3.2);
             ctx.stroke();
         }
       }
     }
     }
   }
   
   function resetGame(){
     for (let r = 0; r < cells.length; r++) {
       for (let c = 0; c < cells[r].length; c++) {
               if(r === 4 || r ===5 || c === 4 || c === 5){
           refreshLines()
         }
           
          if (cells[r][c].isPainted) {
             ctx.clearRect(cells[r][c].x + 0.5, cells[r][c].y + 0.5, cellWidth - 0.5, cellHeight - 0.5);
             cells[r][c].isPainted = false;
           } 
           else if (cells[r][c].isCrossed) {
             ctx.clearRect(cells[r][c].x + 0.5, cells[r][c].y + 0.5, cellWidth - 0.5, cellHeight - 0.5);
             cells[r][c].isCrossed = false;
           }
         
       }
     }
   
     stopTimer();
     resetTimer()
   }
   
   function getRandomNum(min, max){
     min = Math.ceil(min);
     max = Math.floor(max);
     let randomNum =  Math.floor(Math.random() * (max - min + 1)) + min; 
     return randomNum;
    }
   
   function randomGame(){ 
     let levels = document.getElementById('levels').getElementsByTagName('option');
     let randomLevel = getRandomNum(0, 2);
     let randomPattern = getRandomNum(0, 4)
     levels[randomLevel].selected = true;
     let level = levels[randomLevel].text;
     updateItemsSelect(randomLevel)
   
     let itemsOptions = document.getElementById('items').getElementsByTagName('option');
     itemsOptions[randomPattern].selected = true;
     let pattern = itemsOptions[randomPattern].text;
   
     let selectedPatternArr = PATTERNS[level][pattern]
   
     updateCanvasSettings(randomLevel);
     updateModel(selectedPatternArr, level);
   
     stopTimer();
     resetTimer()
   }
   
   function initScoreTable (){
     localStorage.setItem('scoreTable', JSON.stringify(highScoreTable))
   }
   
   function updateScoreTable (time, level, pattern){
     const scoreData = {
       'timerState': time,
       'level': level,
       'pattern': pattern,
     }
     if(highScoreTable.length === 5){
       highScoreTable.shift()
     }
     highScoreTable.push(scoreData);
     localStorage.setItem('scoreTable', JSON.stringify(highScoreTable))
     
   }
   
   function loadScoreTable (){
     if(localStorage.scoreTable){
       let scoreTable = JSON.parse(localStorage.getItem('scoreTable'));
       scoreTable.sort((a, b) => a.timerState - b.timerState);
       for(let i = 0; i < scoreTable.length; i++){
         let li = document.createElement('li');
         let level = scoreTable[i].level;
         let pattern = scoreTable[i].pattern;
         let time = scoreTable[i].timerState;
         let minutes = parseInt(time / 60);
         let sec  = time % 60;
     
         li.textContent = `Level: ${level} - Pattern: ${pattern} - Spent time: ${minutes}min : ${sec}sec;`
         document.getElementById('scores').append(li)
         }
     }
   }
   
   function createScoreTable(){
     const overlay = document.createElement('div');
     const tableModal = document.createElement('div');
     const tableBtn = document.createElement('button');
     const list = document.createElement('ol')
     list.id = 'scores'
     tableBtn.id = 'table-btn';
     tableBtn.className = 'button'
     tableBtn.textContent = 'Ok!'
     overlay.className = 'modal-overlay modal-closed';
     tableModal.className = 'table-modal modal-closed';
     tableModal.append(list, tableBtn)
     tableBtn.addEventListener('click', (e)=>{
       hideScoreTable();
       resetTimer()
     })
     document.body.append(overlay, tableModal)
   
   }
   
   function showScoreTable (){ 
     document.querySelector('.modal-overlay').classList.remove('modal-closed')
     document.querySelector('.table-modal ').classList.remove('modal-closed')
   }
   
   function hideScoreTable(){
     document.querySelector('.modal-overlay').classList.add('modal-closed')
     document.querySelector('.table-modal').remove()
   
   }
   
   function darkThemeOn (){
     if(localStorage.getItem('dark') === '1'){
       document.querySelector('html').classList.remove('dark')
       primeColor = fillColor = '#000000';
       let levelIndex = document.getElementById('levels').options.selectedIndex;
       let level = document.getElementById('levels').options[levelIndex].text;
   
       ctx.clearRect(0,0,width,height);
       updateCanvasSettings(levelIndex);
       updateModel(getPattern(), level)
       localStorage.setItem('dark', 0);
       canvas.classList.remove('disable-click');
       document.querySelector('.theme-mode span').textContent = `settings_night_sight` ;
     }
     else{
       localStorage.setItem('dark', 1);
       primeColor = '#DCDCDC';
       fillColor = '#FDD9B5'
       let levelIndex = document.getElementById('levels').options.selectedIndex;
       let level = document.getElementById('levels').options[levelIndex].text;
       ctx.clearRect(0,0,width,height)
       updateCanvasSettings(levelIndex);
       updateModel(getPattern(), level)
       document.querySelector('html').classList.add('dark');
       document.querySelector('.theme-mode span').textContent = 'light_mode';
   
     }
     
   }
   
   function init(){
     canvas.classList.remove('disable-click')
     let selectedPattern = PATTERNS['light']['tree']
     createlevelsSelect()
     createItemsSelect();
     defineCells(selectedPattern);
     calculateClues(selectedPattern);
     drawField();
     drawLeftClues(calculateClues(selectedPattern).leftClues, 'light');
     drawTopClues(calculateClues(selectedPattern).topClues, 'light');
     createResultMessage();
     calculateWinCondition();
     createTimer();
     initScoreTable();
     createBurger();
     
     
     document.getElementById('levels').addEventListener('change',(e)=>{
       document.getElementById('save').removeAttribute('disabled')
       canvas.classList.remove('disable-click')
       document.getElementById('load').removeAttribute('disabled')
       let levelIndex = e.target.options.selectedIndex;
       let level = e.target.options[levelIndex].text
       updateItemsSelect(levelIndex);
       let pattern = getPattern()
       console.log(pattern)
       updateCanvasSettings(levelIndex);
       updateModel(pattern, level);
       resetTimer();
     } )
   
     document.getElementById('items').addEventListener('blur',(e)=>{
       document.getElementById('save').removeAttribute('disabled')
       canvas.classList.remove('disable-click');
       document.getElementById('load').removeAttribute('disabled')
       let levelIndex = document.getElementById('levels').options.selectedIndex;
       let level = document.getElementById('levels').options[levelIndex].text
       let pattern = getPattern()
       updateCanvasSettings(levelIndex);
       updateModel(pattern, level);
       resetTimer();
     } )
   
     document.getElementById('items').addEventListener('change',(e)=>{
       document.getElementById('save').removeAttribute('disabled')
       canvas.classList.remove('disable-click');
       document.getElementById('load').removeAttribute('disabled')
       let levelIndex = document.getElementById('levels').options.selectedIndex;
       let level = document.getElementById('levels').options[levelIndex].text
       let pattern = getPattern()
       updateCanvasSettings(levelIndex);
       updateModel(pattern, level);
       resetTimer();
     } )
   
     document.addEventListener("click", (e) => {
       e.preventDefault();
       switch (e.target.id) {
         case "solution":
           document.getElementById('load').removeAttribute('disabled')
           document.getElementById('save').setAttribute('disabled', 'disabled')
           cklickCount = 0;
           drawSolution();
           stopTimer();
           resetTimer();
           canvas.classList.add('disable-click')
           break;
         case "save":
           document.getElementById('load').removeAttribute('disabled')
           canvas.classList.remove('disable-click')
           saveGame();
           break;
         case "load":
           document.getElementById('save').removeAttribute('disabled')
           canvas.classList.remove('disable-click')
           downloadSavedGame();
           if(cklickCount === 0){
             startTimer()
             cklickCount = 1;
           }
           e.target.setAttribute('disabled', 'disabled')
           break;
         case "reset":
           document.getElementById('save').removeAttribute('disabled')
           document.getElementById('load').removeAttribute('disabled')
           canvas.classList.remove('disable-click')
           resetGame();
           cklickCount = 0;
           patternCellsCount = 0;
           break;
         case "random":
           document.getElementById('save').removeAttribute('disabled')
           document.getElementById('load').removeAttribute('disabled')
           cklickCount = 0;
           canvas.classList.remove('disable-click')
           randomGame();
           break;
         case "table":
           console.log('table')
           document.getElementById('save').removeAttribute('disabled')
           document.getElementById('load').removeAttribute('disabled');
           createScoreTable();
           loadScoreTable()
           showScoreTable();
           break;
       }
     });
   }
   
   function getPattern(){
     let itemsSelect = document.getElementById('items');
     let levelsSelect = document.getElementById('levels');
   
     let levelIndex = levelsSelect.options.selectedIndex;
     let level = levelsSelect.options[levelIndex].text;
   
     let patternIndex = itemsSelect.options.selectedIndex;;
     let pattern = itemsSelect.options[patternIndex].text;
     let selectedPatternArr = PATTERNS[level][pattern]
     return selectedPatternArr
   
   }
   
   function updateModel (pattern, level){
     canvas.classList.remove('disable-click')
     defineCells(pattern);
     calculateClues(pattern);
     drawField();
     drawLeftClues(calculateClues(pattern).leftClues, level );
     drawTopClues(calculateClues(pattern).topClues, level)
     calculateWinCondition()
   }
   
   init()
   
   function createBurger (){
     const burgerItem = document.createElement('div');  
     burgerItem.className = 'header_burger';
     burgerItem.innerHTML = '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#665F55"/><path d="M14 18H30" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 26H30" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
     const menuCloseItem = document.createElement('div');
     menuCloseItem.className = 'nav_close';
     menuCloseItem.innerHTML = `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
     <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#665F55"/>
     <path d="M16.3438 16.3431L27.6575 27.6568" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M16.3438 27.6568L27.6575 16.3431" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>`;
     const popup = document.createElement('div');
     popup.className = 'popup';
   container.prepend(burgerItem, menuCloseItem, popup)
   }
   
   
   function burgerHandler() {
     const burgerItem = document.querySelector('.header_burger');  
     const menu = document.querySelector('.menu');
     const menuCloseItem = document.querySelector('.nav_close');
     const popup = document.querySelector('.popup');
     
   
     burgerItem.addEventListener('click', ()=>{
       burgerItem.classList.add('header_burger-hide');
       menu.classList.add('menu_active');
       menuCloseItem.classList.add('nav_close-open');
       popup.classList.add('popup-transparent');
         
     })
   
     menuCloseItem.addEventListener("click", () => {
         menu.classList.remove('menu_active');
         burgerItem.classList.remove('header_burger-hide')
         menuCloseItem.classList.remove('nav_close-open');
   
     })
   
     popup.addEventListener('click', ()=>{
         menu.classList.remove('nav_active');
         popup.classList.remove('popup-transparent');
     })
    }
   
    burgerHandler()