//Object oriented Javascript:
//1) wrap everything in a immediately invoked function expression
//2) declare golobal variables
//3) declare class object constructors
//4) declare global functions
//5) declare event handler


(() =>{ //immediately invoked function expression
    // class car object constuctor
    
    class Car { 
      constructor(year,make,model){
        this.year = year;
        this.make = make;
        this.model = model;
      
        this.enjoyCar = (year,make,model) => {
          let paragraph = document.createElement("p");
          let car = "Congratulations! enjoy your new " + year + ", "+ make + " "+ model + "!" ;
          paragraph.innerHTML = car;
          document.getElementById("newCar").appendChild(paragraph) ;
        }
      }
    }
    
    //variables
    
    let yearOfUsersCar = document.getElementById("yearInp");
    let makeOfUsersCar = document.getElementById("makeInp");
    let modelOfUsersCar = document.getElementById("modelInp");
    let numberOfCars = document.getElementById("numOfCars");
    let cars = 0;
    const getCarButton =  document.getElementById("getCar");
    const sellCarsButton = document.getElementById("sell");
    
  
    //event handler
    
    getCarButton.addEventListener("click" , () => {
      if(yearOfUsersCar.value === "" || makeOfUsersCar.value === "" || modelOfUsersCar.value === ""){
        confirm("please input text in all fields");
      }else{
        const usersCar = new Car(yearOfUsersCar.value,makeOfUsersCar.value, modelOfUsersCar.value);
        usersCar.enjoyCar(yearOfUsersCar.value,makeOfUsersCar.value, modelOfUsersCar.value);
        console.log(usersCar);
        cars += 1;
        numberOfCars.innerHTML = " " + cars;
      }
      yearOfUsersCar.value = "";
      makeOfUsersCar.value = "";
      modelOfUsersCar.value = "";
    });

    sellCarsButton.addEventListener("click" , () =>{
      cars = 0;
      numberOfCars.innerHTML = cars;
      for(i = 0; i <= 10; i++){ // for loop deletes 10 p's from dom
        const divCont = document.getElementsByTagName("p")[0];
        divCont.parentNode.removeChild(divCont);
      }
    });
  })();