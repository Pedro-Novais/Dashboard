const products_values = {
    first_product:{
        last_year:{
            until_mar: 160000,
            until_jun: 100000,
            until_set: 164000,
            until_dez: 150000
        },
        mid_year:{
            until_mar: 210000,
            until_jun: 151000,
            until_set: 185700,
            until_dez: 195600
        },
        first_year:{
            until_mar: 145680,
            until_jun: 174810,
            until_set: 210960,
            until_dez: 180000
        }
    },
    second_product:{
        last_year:{
            until_mar: 180000,
            until_jun: 150000,
            until_set: 114000,
            until_dez: 120000
        },
        mid_year:{
            until_mar: 150000,
            until_jun: 198000,
            until_set: 135000,
            until_dez: 105000
        },
        first_year:{
            until_mar: 247000,
            until_jun: 225000,
            until_set: 186000,
            until_dez: 170000
        }
    },
    third_product:{
        last_year:{
            until_mar: 186000,
            until_jun: 157000,
            until_set: 123000,
            until_dez: 163000
        },
        mid_year:{
            until_mar: 251000,
            until_jun: 233000,
            until_set: 201010,
            until_dez: 198000
        },
        first_year:{
            until_mar: 145680,
            until_jun: 174810,
            until_set: 288960,
            until_dez: 180000
        }
    }
}
    
const graphic_one = {
    first: document.querySelector('#graphic-one-a'),
    second: document.querySelector('#graphic-two-a'),
    third: document.querySelector('#graphic-three-a'),
    fourth: document.querySelector('#graphic-four-a')
}

const graphic_two = {
    first: document.querySelector('#graphic-one-b'),
    second: document.querySelector('#graphic-two-b'),
    third: document.querySelector('#graphic-three-b'),
    fourth: document.querySelector('#graphic-four-b')
}

const graphic_three = {
    first: document.querySelector('#graphic-one-c'),
    second: document.querySelector('#graphic-two-c'),
    third: document.querySelector('#graphic-three-c'),
    fourth: document.querySelector('#graphic-four-c')
}

const btn_year ={
    last: document.querySelector('#last-year'),
    mid: document.querySelector('#mid-year'),
    first: document.querySelector('#first-year')
}   
    let array_price = [];
    array_price = document.querySelectorAll('.price')
    let array_priceF  = Object.entries(array_price); 
    let max_price = 0;

    function getMaxPrice(max){
        max_price = max[0][1]
        for(let i=0;i<max.length;i++){
            if(max[i][1] > max_price){
                max_price = max[i][1];
            }
        }
        return max_price;
    }

let state = [0,0,0];
let state_array = [[],[],[]];

btn_year.last.addEventListener("click", () =>{
    state[1] = 0;
    state[2] = 0;
    if(state[0] == 0){
        let array_product;
        let array_graphic;
        let year_product;

        btn_year.first.classList.remove('options-side-enable');
        btn_year.mid.classList.remove('options-side-enable');
        btn_year.last.classList.add('options-side-enable');
        let ini;
        for(let i = 0; i<3; i++){
            ini = i;
            if(i==0){
                array_product = products_values.first_product.last_year
                array_graphic = Object.entries(graphic_one);
                year_product = Object.entries(array_product);
                
                Change_value(0,year_product,0);

            }else if(i==1){
                array_product = products_values.second_product.last_year
                array_graphic = Object.entries(graphic_two);
                year_product = Object.entries(array_product);
                
                Change_value(4,year_product,0);

            }else if(i==2){
                array_product = products_values.third_product.last_year
                array_graphic = Object.entries(graphic_three);
                year_product = Object.entries(array_product);
                
                Change_value(8,year_product,0);
            }  
            getMaxPrice(year_product);

            for(let i=0; i<year_product.length;i++){
                let qnt = (year_product[i][1] / max_price) * 100;
                array_graphic[i][1].style.height = `${qnt}%`
                state_array[ini][i] = array_graphic[i][1];
            }
        }
        state[0] = 1;
    }else{
        btn_year.last.classList.remove('options-side-enable');
        for(let i = 0; i < state_array.length; i++){
            for(let ini = 0; ini < 4; ini++){
                state_array[i][ini].style.height = `100%`
            }
            Change_value(0,0,1)
        }
        state[0] = 0;
    }
})

btn_year.mid.addEventListener("click", () =>{
    state[0] = 0;
    state[2] = 0;
    if(state[1] == 0){
        let array_product;
        let array_graphic;
        let year_product;

        btn_year.first.classList.remove('options-side-enable');
        btn_year.mid.classList.add('options-side-enable');
        btn_year.last.classList.remove('options-side-enable');
        let ini;

        for(let i = 0; i<3; i++){
            ini = i;
            if(i==0){
                array_product = products_values.first_product.mid_year
                array_graphic = Object.entries(graphic_one);
                year_product = Object.entries(array_product);

                Change_value(0,year_product,0)
            }else if(i==1){
                array_product = products_values.second_product.mid_year
                array_graphic = Object.entries(graphic_two);
                year_product = Object.entries(array_product);

                Change_value(4, year_product,0);
            }else if(i==2){
                array_product = products_values.third_product.mid_year
                array_graphic = Object.entries(graphic_three);
                year_product = Object.entries(array_product);

                Change_value(8,year_product,0)
            }  
            
            getMaxPrice(year_product);

            for(let i=0; i<year_product.length;i++){

                let qnt = (year_product[i][1] / max_price) * 100;
                array_graphic[i][1].style.height = `${qnt}%`
                state_array[ini][i] = array_graphic[i][1];
            }
            state[1] = 1;
        }
    }else{
        btn_year.mid.classList.remove('options-side-enable');
        for(let i = 0; i < state_array.length; i++){
            for(let ini = 0; ini < 4; ini++){
                state_array[i][ini].style.height = `100%`
            }
            Change_value(0,0,1)
        }
        state[1] = 0;
    }
})

btn_year.first.addEventListener("click", () =>{
    state[0] = 0;
    state[1] = 0;
    if(state[2] == 0){
        let array_product;
        let array_graphic;
        let year_product

        btn_year.first.classList.add('options-side-enable');
        btn_year.mid.classList.remove('options-side-enable');
        btn_year.last.classList.remove('options-side-enable');
        let ini;

        for(let i = 0; i<3; i++){
            ini = i;
            if(i==0){
                array_product = products_values.first_product.first_year;
                array_graphic = Object.entries(graphic_one);
                year_product = Object.entries(array_product);

                Change_value(0, year_product,0)
            }else if(i==1){
                array_product = products_values.second_product.first_year;
                array_graphic = Object.entries(graphic_two);
                year_product = Object.entries(array_product);

                Change_value(4, year_product,0)
            }else if(i==2){
                array_product = products_values.third_product.first_year;
                array_graphic = Object.entries(graphic_three);
                year_product = Object.entries(array_product);

                Change_value(8, year_product,0)
            }   
            
            getMaxPrice(year_product);

            for(let i=0; i<year_product.length;i++){
                let qnt = (year_product[i][1] / max_price) * 100;
                array_graphic[i][1].style.height = `${qnt}%`
                state_array[ini][i] = array_graphic[i][1];
            }
            state[2] = 1
        }
    }else{
        btn_year.first.classList.remove('options-side-enable');
        for(let i = 0; i < state_array.length; i++){
            for(let ini = 0; ini < 4; ini++){
                state_array[i][ini].style.height = `100%`
            }
            Change_value(0,0,1)
        }
        state[2] = 0;
    }
})

function Change_value(con,year,state){
    if(state == 0){
        for(let i = con; i < 4+con; i++){
            array_priceF[i][1].innerHTML = `R$${year[i-con][1]},00`;
        }
    }else{
        for(let i = con; i < 12+con; i++){
            array_priceF[i][1].innerHTML = "";
        }
    }
}