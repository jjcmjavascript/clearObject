//Copia del Objeto en limpio
function cleanObject (object, temp = {} ){
        temp = {};

        Object.entries(object).forEach((item, i) => {
            const nombre  = item[0];
            const value = item[1];
                        if (Array.isArray(value)){ temp[nombre] = [] ; }
            else if (value && typeof value == 'object'){
                temp[nombre] = cleanObject(value, {});
            }
            else {
                temp[nombre] = null;
            }
        });


        return temp;
}

//Objeto original Limpio

    function cleanObject(object){
        Object.entries(object).forEach((item) => {
            const nombre  = item[0];
            const value = item[1];
            if(Array.isArray(value)){
                object[nombre] = [];
            }
            if(value && typeof value == 'object'){
                object[nombre] = cleanObject(value, {});
            }
            else {
                object[nombre] = null;
            }
        });

        return object;
    }
