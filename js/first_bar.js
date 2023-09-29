const product_one = document.querySelector('#product-side-a');
const product_two = document.querySelector('#product-side-b');
const product_three = document.querySelector('#product-side-c');

let product_view = [];
product_view = document.querySelectorAll('.first');

let state_bar = [0,0,0];

    function fun_pro_one(){
        state_bar[1] = 0;
        state_bar[2] = 0;
        if(state_bar[0] == 0){
            product_one.classList.add('options-side-enable')
            product_two.classList.remove('options-side-enable')
            product_three.classList.remove('options-side-enable')

            product_view[0].classList.add('first-view-enable-a')
            product_view[1].classList.remove('first-view-enable-b')
            product_view[2].classList.remove('first-view-enable-c')
            state_bar[0] = 1;
        }else{
            product_one.classList.remove('options-side-enable')
            product_view[0].classList.remove('first-view-enable-a')
            state_bar[0] = 0;
        }
    }

    function fun_pro_two(){
        state_bar[0] = 0;
        state_bar[2] = 0;
        if(state_bar[1] == 0){
            product_one.classList.remove('options-side-enable')
            product_two.classList.add('options-side-enable')
            product_three.classList.remove('options-side-enable')

            product_view[0].classList.remove('first-view-enable-a')
            product_view[1].classList.add('first-view-enable-b')
            product_view[2].classList.remove('first-view-enable-c')
            state_bar[1] = 1;
        }else{
            product_two.classList.remove('options-side-enable')
            product_view[1].classList.remove('first-view-enable-b')
            state_bar[1] = 0;
        }
    }

    function fun_pro_three(){
        state_bar[0] = 0;
        state_bar[1] = 0;
        if(state_bar[2] == 0){
            product_one.classList.remove('options-side-enable')
            product_two.classList.remove('options-side-enable')
            product_three.classList.add('options-side-enable')

            product_view[0].classList.remove('first-view-enable-a')
            product_view[1].classList.remove('first-view-enable-b')
            product_view[2].classList.add('first-view-enable-c')
            state_bar[2] = 1;
        }else{
            product_three.classList.remove('options-side-enable')
            product_view[2].classList.remove('first-view-enable-c')
            state_bar[2] = 0;
        }
    }