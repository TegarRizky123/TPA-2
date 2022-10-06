const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == ''){
        alert('Please input the height and weight.');
        return;
    }

    // BMI = weight in kg / (height in m * height in m)

    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;

    let status = '';

    // if(BMI <= 18.5){
    //     status = 'Kurus'
    // }

    // if(BMI > 18.5 && BMI <= 24.9 ){
    //     status = 'Normal'
    // }

    // if(BMI > 25 && BMI <= 29.9 ){
    //     status = 'Gemuk';
    // }

    // if (BMI > 30) {
    //     status = 'Obesitas';
    // }

    if (BMI <= 18.5) {
        status = 'Kurus';
    } else if (BMI > 18.5 && BMI <= 24.9) {
        status = 'Normal';
    }
    else if (BMI > 25 && BMI <= 29.9) {
        status = 'Gemuk';
    } else {
        status = 'Obesitas';
    }

    document.querySelector('.comment').innerHTML = `Komentar : Kamu <span id="comment">${status}</span>`;
});

    

// });