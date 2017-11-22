//Object oriented Javascript:

(() => { //immediately invoked function expression used to avoid variable hoisting, protect against polluting the global environment 
    // class car object constuctor
    
    class Car { 
      constructor(year,make,model){
        this.year = year;
        this.make = make;
        this.model = model;
      
        this.enjoyCar = (year,make,model) => {
          let div = document.createElement("div");
          let paragraph = document.createElement("p");
          let car = "Congratulations! enjoy your new " + year + ", "+ make + " "+ model + "!" ;
          paragraph.innerHTML = car;
          div.appendChild(paragraph);
          document.getElementById("newCar").appendChild(div);         
        }

        this.appendButton = () => {
          var button = document.createElement("button");
          button.classList.add("remove_button"); 
          var sellThisCarButton = document.getElementsByClassName("remove_button");
          var confirm = document.getElementsByClassName("confirm_button");     
          button.appendChild(document.createTextNode("Sell this car"));
          document.getElementById("newCar").appendChild(button);
          for(let i = 0; i < sellThisCarButton.length; i++){
            sellThisCarButton[i].addEventListener("click" , function(){
              var butt= sellThisCarButton[i];
              butt.previousSibling.innerHTML = "<input type='text' id='input_edit' placeholder='Trade'/>" + "<button class='confirm_button'>" + "confirm" + "</button>";
              for(let y = 0; y < confirm.length; y++){
                confirm[y].addEventListener("click" , function(){
                  var newCar = document.getElementById("input_edit").value;
                  butt.previousSibling.innerHTML = newCar;
                });
              }
            });
          }
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
    const inputs = document.getElementsByTagName("input");
    
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
        usersCar.appendButton();
        for(i = 0; i < inputs.length; i++){
          inputs[i].value = "";
        }
      }
    });

    sellCarsButton.addEventListener("click" , () => {
      cars = 0;
      numberOfCars.innerHTML = " All cars have been sold!";
      const divCont = document.querySelector("#newCar");
      divCont.parentNode.removeChild(divCont);
    });
  })();

  