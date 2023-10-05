const price_month = {
    first_product:{
        jan: 7000,
        fev: 5800,
        mar: 7800,
        abr: 4750,
        mai: 5600,
        jun: 2000,
        jul: 3600,
        ago: 6200,
        set: 7000,
        out: 7400,
        nov: 8600,
        dez: 8000
    },
    second_product:{
        jan: 7800,
        fev: 5800,
        mar: 4750,
        abr: 5600,
        mai: 4800,
        jun: 8000,
        jul: 2000,
        ago: 6200,
        set: 4300,
        out: 7400,
        nov: 8000,
        dez: 9000
    },
    third_product:{
        jan: 9000,
        fev: 2800,
        mar: 9800,
        abr: 7750,
        mai: 5600,
        jun: 3000,
        jul: 7600,
        ago: 5200,
        set: 8500,
        out: 4400,
        nov: 6000,
        dez: 9550
    }
}
let teste = 15;
const sales_products = {
    first_product:{
        bolet:410,
        card: 201,
    },
    second_product:{
        bolet: 353,
        card: 287
    },
    third_product:{
        bolet: 265,
        card: 355
    },
    region_first:{
        sul: 45,
        norte: 197,
        sudeste: 157,
        nordeste: 148,
        centro: 64
    },
    region_second:{
        sul: 170,
        norte: 124,
        sudeste: 177,
        nordeste: 87,
        centro: 82
    },
    region_third:{
        sul: 84,
        norte: 217,
        sudeste: 107,
        nordeste: 98,
        centro: 114
    }
}
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

//function graphic_end(){
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
        let year_product;
    btn_year.last.addEventListener("click", () =>{
        state[1] = 0;
        state[2] = 0;
        if(state[0] == 0){
            let array_product;
            let array_graphic;
            //let year_product;

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
            //let year_product;

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
            //let year_product
            
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


function graphic_mid(){
    const btn_year = [
        document.querySelector('#product-side-a'),
        document.querySelector('#product-side-b'),
        document.querySelector('#product-side-c')
    ]
    const price_side = [
        document.querySelector('#price-area-max'),
        //document.querySelector('#price-area-mid'),
        document.querySelector('#price-area-min')
    ]
    const sales_date = [
        document.querySelector('#info-bolet'),
        document.querySelector('#info-card'),
        document.querySelector('#info-sale-brazil')
    ]
    const region_date = [
        document.querySelector('#info-sul'),
        document.querySelector('#info-norte'), 
        document.querySelector('#info-sud'),
        document.querySelector('#info-nord'),
        document.querySelector('#info-centro'),               
    ]
    let bar_month = [];
    bar_month = document.querySelectorAll('.bars');

    let max_price = 0;
    let med_price = 0;
    let calc_min;

    let state = [0,0,0];

    function maxPrice(max){
        max_price = max[0][1]
        med_price = max[0][1]
        for(let i = 0; i < max.length; i++){
            if(max[i][1] > max_price){
                max_price = max[i][1];
            }else if(max[i][1] < med_price){
                med_price = max[i][1];
            }
        } 
        calc_min = max_price/2;
        return max_price, med_price, calc_min
    }

    btn_year[0].addEventListener("click", () => {
        if(state[0] == 0){

            state[1] = 0;
            state[2] = 0;

            let sales = Object.entries(sales_products.first_product)
            let sales_brazil = sales[0][1] + sales[1][1]

            let regions = Object.entries(sales_products.region_first)

            let values = Object.entries(price_month.first_product);
            maxPrice(values);
            price_side[0].innerText = `R$${max_price},00`;
            price_side[1].innerText = `R$${calc_min},00`;
            for(let i = 0; i < bar_month.length; i++){
                let qnt =  (values[i][1] / max_price)*100;
                bar_month[i].style.height=`${qnt}%`;
                if(i < 2){
                    let porctg = parseFloat((sales[i][1] / sales_brazil)*100).toFixed(2);
                    sales_date[i].innerText = `${porctg}%`
                    sales_date[2].innerText = `${sales_brazil}`
                }
                if(i < 5){
                    region_date[i].innerText = regions[i][1];
                }
            }
            state[0] = 1;
        }else{
            for(let i = 0; i < bar_month.length; i++){
                bar_month[i].style.height=`100%`;
                if(i < 3){
                    sales_date[i].innerText = `-`
                }
                if(i < 5){
                    region_date[i].innerText = `-`
                }
            }
            price_side[0].innerText = ``;
            price_side[1].innerText = ``;
            state[0] = 0;
        }
    })

    btn_year[1].addEventListener("click", () => {
        if(state[1] == 0){

            state[0] = 0;
            state[2] = 0;

            let sales = Object.entries(sales_products.second_product)
            let sales_brazil = sales[0][1] + sales[1][1]

            let regions = Object.entries(sales_products.region_second)

            let values = Object.entries(price_month.second_product);
            maxPrice(values)
            price_side[0].innerText = `R$${max_price},00`;
            price_side[1].innerText = `R$${calc_min},00`;

            for(let i = 0; i < bar_month.length; i++){
                let qnt =  (values[i][1] / max_price)*100;
                bar_month[i].style.height=`${qnt}%`;
                if(i < 2){
                    let porctg = parseFloat((sales[i][1] / sales_brazil)*100).toFixed(2);
                    sales_date[i].innerText = `${porctg}%`
                    sales_date[2].innerText = `${sales_brazil}`
                }
                if(i < 5){
                    region_date[i].innerText = regions[i][1];
                }
            }
            state[1] = 1;
        }else{
            for(let i = 0; i < bar_month.length; i++){
                bar_month[i].style.height=`100%`;
                if(i < 3){
                    sales_date[i].innerText = `-`
                }
                if(i < 5){
                    region_date[i].innerText = `-`
                }
            }
            price_side[0].innerText = ``;
            price_side[1].innerText = ``;
            state[1] = 0;
        }
    })

    btn_year[2].addEventListener("click", () => {
        if(state[2] == 0){

            state[0] = 0;
            state[1] = 0;

            let sales = Object.entries(sales_products.third_product)
            let sales_brazil = sales[0][1] + sales[1][1]

            let regions = Object.entries(sales_products.region_third)

            let values = Object.entries(price_month.third_product);
            maxPrice(values)
            price_side[0].innerText = `R$${max_price},00`;
            price_side[1].innerText = `R$${calc_min},00`;

            for(let i = 0; i < bar_month.length; i++){
                let qnt =  (values[i][1] / max_price)*100;
                bar_month[i].style.height=`${qnt}%`;
                if(i < 2){
                    let porctg = parseFloat((sales[i][1] / sales_brazil)*100).toFixed(2);
                    sales_date[i].innerText = `${porctg}%`
                    sales_date[2].innerText = `${sales_brazil}`
                }
                if( i < 5){
                    region_date[i].innerText = regions[i][1];
                }
            }
            state[2] = 1;
        }else{
            for(let i = 0; i < bar_month.length; i++){
                bar_month[i].style.height=`100%`;
                if(i < 3){
                    sales_date[i].innerText = `-`
                }
                if(i < 5){
                    region_date[i].innerText = `-`
                }
            }
            price_side[0].innerText = ``;
            price_side[1].innerText = ``;
            state[2] = 0;
        }
    })
}
    let bar_month = [];
    bar_month = document.querySelectorAll('.bars')
    const div = document.createElement('div');
    const font_price = document.createElement('p');
    let info = document.createTextNode(`R$${price_month.first_product.abr},00`)

    console.log(price_month.first_product.abr);
    
    function appaer_price(pos){
        div.classList.add('info-bars')
        font_price.classList.add('font-bar-price')

        bar_month[pos].appendChild(div);
        div.appendChild(font_price);
        font_price.appendChild(info);
    }

    function hide_price(pos){
        font_price.removeChild(info);
        div.removeChild(font_price);
        bar_month[pos].removeChild(div);
    }


    const map = document.querySelector('#analysis-map');
    const info_div = document.createElement('div');
    const font_info_text = document.createElement('p');

    const region_text = [
        document.createTextNode("Sul"),
        document.createTextNode("Norte"),
        document.createTextNode("Sudeste"),
        document.createTextNode("Nordeste"),
        document.createTextNode("Centro"),
    ]

    const id_region = [
        'info-region-sul',
        'info-region-norte',
        'info-region-sudeste',
        'info-region-nordeste',
        'info-region-centro'
    ]

    function appaer_info(region){
            font_info_text.classList.add('font-info-region')

            info_div.classList.add('info-region')
            info_div.setAttribute('id', id_region[region])
            
            map.appendChild(info_div);
            info_div.appendChild(font_info_text);
            font_info_text.appendChild(region_text[region])
    }

    function hide_info(reg){
            font_info_text.removeChild(region_text[reg])
            info_div.removeChild(font_info_text);
            map.removeChild(info_div);
    }