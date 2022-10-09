window.addEventListener('load', function(){

    let cells =  document.querySelectorAll('.game__container__cell');

    const game = function(cells) {
        let i = 0;
        for (let cell of cells) {
            cell.addEventListener('click', function() {
                if (this.innerHTML != '') return;
                if (i % 2 == 0) {
                    this.innerHTML = 'X';
                } else {
                    this.innerHTML = '0';
                }
                i++;
                check();
                let resultGame = document.querySelector('.result__txt');
                if (i > 8 && resultGame.innerHTML == '') showResult('Draw');
            });
        }
    };

    const check = function() {
        let arr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i <  arr.length; i++) {
            if (cells[arr[i][0]].innerHTML == 'X' && cells[arr[i][1]].innerHTML == 'X' && cells[arr[i][2]].innerHTML == 'X' && cells[arr[i][2]].innerHTML !== '') {
            showResult('Win Gamer X');
            } else if  (cells[arr[i][0]].innerHTML == '0' && cells[arr[i][1]].innerHTML == '0' && cells[arr[i][2]].innerHTML == '0' && cells[arr[i][2]].innerHTML !== ''){
            showResult('Win Gamer 0');
            } 
        };
    };

    const showResult = function(elem) {
        let resultGame = document.querySelector('.result__txt');
        resultGame.innerHTML = `${elem}`;
    };

    let bntReload = document.querySelector('.bnt__reload');
    bntReload.addEventListener('click', function() {
        location.reload();
    });
    game(cells);
});



