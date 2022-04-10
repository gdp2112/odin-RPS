testing

const select = document.querySelector('select')
const para = document.querySelector('p')

select.addEventListener('change',setWeather);

function setWeather(){
    const choice=select.value;
    switch (choice){
        case 'sunny':
            para.textContent = 'It\'s nice and sunny, go out and enjoy the rays.';
            break;
        case 'rainy':
            para.textContent = 'Rain is in the forcast; don\'t forget your umbrella!';
            break;
        case 'snowing':
            para.textContent = 'Its beginning to look a lot like Xmas.';
            break;
        case 'overcast':
            para.textContent = 'Another day in Seattle...';
            break;
        default:
            para.textContent = '';
    }
}