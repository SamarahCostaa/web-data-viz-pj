const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
] /*No eixo X esses são os dados*/
const data = {
    labels: labels,
    datasets: [{
        label: 'Umidade',
        backgroundColor: 'rgb(0, 203, 219)',
        borderColor: 'rgb(2,0,127)',
        data: [22,24,27,23,20,18], /*dados inseridos no grafico*/
        borderWidth: 1
    },
    {
        label: 'Temperatura',
        backgroundColor: 'rgb(255, 255, 153)',
        borderColor: 'rgb(204, 204, 0)',
        data: [90, 89, 93, 87, 88, 82], /*dados inseridos no grafico*/
        borderWidth: 1
    }
]
};
const config = {
    type: 'bar',
    data: data,
    options: {}
};


// SEGUNDO GRÁFICO

const labels2 = [
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
]

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Umidade',
        backgroundColor: 'rgb(0, 203, 219)',
        borderColor: 'rgb(2,0,127)',
        data: [80, 82, 80, 85, 80, 83], /*dados inseridos no grafico*/
        borderWidth: 1
    },
    {
        label: 'Temperatura',
        backgroundColor: 'rgb(255, 255, 153)',
        borderColor: 'rgb(204, 204, 0)',
        data: [30, 29, 28, 25, 22, 23], /*dados inseridos no grafico*/
        borderWidth: 1
    }
]
};
const config2 = {
    type: 'line',
    data: data2,
    options: {}
};


const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);