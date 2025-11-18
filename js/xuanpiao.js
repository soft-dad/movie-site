document.addEventListener('DOMContentLoaded', function () {
    const seatList = document.querySelector('.seat');

    for (let i = 0; i < 64; i++) {
        const li = document.createElement('li');
        seatList.appendChild(li);
    }
    const seats = document.querySelectorAll('.seat li');
    const defaultColor = seats[0].style.backgroundColor;
    let selectedSeats = [];
    const seatNumbers = document.querySelector('#seatNumbers');
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            let seatIndex = (i - 1) * 8 + (j - 1);
            seats[seatIndex].innerText = i + '-' + j;
        }
    }
    function addSeatClick(seat) {
        seat.addEventListener('click', () => {
            if (seat.style.backgroundColor === defaultColor) {
                seat.style.backgroundColor = '#8aa6f3';
                selectedSeats.push(seat.innerText);

                let numberP = document.createElement('p');
                numberP.classList.add('seat-number');
                seatNumbers.appendChild(numberP);

                let row = seat.innerText.split('-')[0];
                let column = seat.innerText.split('-')[1];
                numberP.innerText = `${row}排${column}座`;

                document.querySelector('.right-con li:nth-child(5) span').innerText = selectedSeats.length;
                let total = selectedSeats.length * 50;
                document.querySelector('.right-con li:nth-child(6) span').innerText = '￥' + total;
            } else {
                seat.style.backgroundColor = defaultColor;

                const seatIndex = selectedSeats.indexOf(seat.innerText);
                if (seatIndex !== -1) {
                    selectedSeats.splice(seatIndex, 1);
                }
                seatNumbers.innerHTML = '';
                selectedSeats.forEach(seat => {
                    let numberP = document.createElement('p');
                    numberP.classList.add('seat-number');
                    let seatInfo = document.createTextNode(`${seat.split('-')[0]}排${seat.split('-')[1]}座`);
                    numberP.appendChild(seatInfo);
                    seatNumbers.appendChild(numberP);
                });

                document.querySelector('.right-con li:nth-child(5) span').innerText = selectedSeats.length;
                let total = selectedSeats.length * 50;
                document.querySelector('.right-con li:nth-child(6) span').innerText = '￥' + total;
            }
        });
    }

    function handleButtonClick() {
        const confirmButton = document.querySelector('button');
        confirmButton.addEventListener('click', () => {
            if (selectedSeats.length === 0) {
                alert("请选票后再进行购买。");
            } else {
                alert('付款购买成功！');
                //返回上一页
                // window.history.back();
                // 返回首页
                window.location.href = 'index.html';
                seats.forEach(seat => {
                    seat.style.backgroundColor = '#b9ef9f';
                });
                seatNumbers.innerHTML = '';
                selectedSeats = [];
                document.querySelector('.right-con li:nth-child(5) span').innerText = '';
                document.querySelector('.right-con li:nth-child(6) span').innerText = '';
            }
        });
    }


    handleButtonClick();
    seats.forEach(seat => {
        addSeatClick(seat);
    });
});

