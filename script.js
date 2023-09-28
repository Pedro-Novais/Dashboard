const products_values = {
    first_product:{
        last_year:{
            until_mar: 120000,
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
;
const btn_year ={
    last: document.querySelector('#last-year'),
    mid: document.querySelector('#mid-year'),
    first: document.querySelector('#first-year')
}   
    let array_price = [];
    array_price = document.querySelectorAll('.price')
    let array_priceF  = Object.entries(array_price); 
    console.log(array_priceF) 
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

    btn_year.last.addEventListener("click", () =>{
    let array_product;
    let array_graphic;
    for(let i = 0; i<3; i++){
        if(i==0){
            array_product = products_values.first_product.last_year
            array_graphic = Object.entries(graphic_one);
        }else if(i==1){
            array_product = products_values.second_product.last_year
            array_graphic = Object.entries(graphic_two);
        }else if(i==2){
            array_product = products_values.third_product.last_year
            array_graphic = Object.entries(graphic_three);
        }

        let year_product = Object.entries(array_product);    
        getMaxPrice(year_product);

        let init = 0;
        for(let i=0; i<year_product.length;i++){
            
            let qnt = (year_product[i][1] / max_price) * 100;
            array_graphic[i][1].style.height = `${qnt}%`
            
            if(init == 0){
                for(let ini = 0; ini<4;ini++){

                    array_priceF[ini][1].style.backgroundColor="red";
                    array_priceF[ini][1].innerHTML = `R$${year_product[init][1]},00`;
                    init++
                    console.log(init)
                }
            }/*
                else if(init == 4){
                init = 0;
                for(let ini = 4; ini<8;ini++){
                    array_priceF[ini][1].style.backgroundColor="red";
                    array_priceF[ini][1].innerHTML = `R$${year_product[init][1]},00`;
                    init++
                    console.log("aqui chegou " +init)
                }
            }
            */
        }
    }
})

btn_year.mid.addEventListener("click", function(){
    let array_product;
    let array_graphic;
    for(let i = 0; i<3; i++){
        if(i==0){
            array_product = products_values.first_product.mid_year
            array_graphic = Object.entries(graphic_one);
        }else if(i==1){
            array_product = products_values.second_product.mid_year
            array_graphic = Object.entries(graphic_two);
        }else if(i==2){
            array_product = products_values.third_product.mid_year
            array_graphic = Object.entries(graphic_three);
        }
        const year_product = Object.entries(array_product);    
        
        getMaxPrice(year_product);

        for(let i=0; i<year_product.length;i++){
            let qnt = (year_product[i][1] / max_price) * 100;
            //array_price[i].innerHTML = `R$${year_product[i][1]},00`
            array_graphic[i][1].style.height = `${qnt}%`
        }
    }
})

btn_year.first.addEventListener("click", function(){
    let array_product;
    let array_graphic;
    for(let i = 0; i<3; i++){
        if(i==0){
            array_product = products_values.first_product.first_year;
            array_graphic = Object.entries(graphic_one);
        }else if(i==1){
            array_product = products_values.second_product.first_year;
            array_graphic = Object.entries(graphic_two);
        }else if(i==2){
            array_product = products_values.third_product.first_year;
            array_graphic = Object.entries(graphic_three);
        }
        const year_product = Object.entries(array_product);    
        
        getMaxPrice(year_product);

        for(let i=0; i<year_product.length;i++){
            let qnt = (year_product[i][1] / max_price) * 100;
            //Preço muda automaticamente no gráfico ao escolher o ano
            //array_price[i].innerHTML = `R$${year_product[i][1]},00`
            //Gráfico muda automaticamente no gráfico ao escolher o ano
            array_graphic[i][1].style.height = `${qnt}%`
        }
    }
})