//------ LOCALSTORAGE ------
export const handleGetProductLocalStorage = () =>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products
    }else{
        return[]
    }
};

//Guardar en LocalStorage       
//La funcion recibe el producto ingresado
export const setInLocalStorage = (productIn) =>{

  //Traigo todos los elementos
  let productsInLocal = handleGetProductLocalStorage();
  
  const existingIndex = productsInLocal.findIndex((productsLocal)=>
    productsLocal.id === productIn.id
)
//Verifico si el elemento existe
    if(existingIndex !== -1){
//Si existe debe reemplazarse
    productsInLocal[existingIndex] = productIn;

    }else{
//Si no existe debe agregarse
    productsInLocal.push(productIn)
    }
    
//setear el nuevo array
localStorage.setItem("products", JSON.stringify(productsInLocal));
};