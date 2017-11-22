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

        this.appendTradeButton = () => {
          const button = document.createElement("button");
          button.classList.add("remove_button"); 
          const sellThisCarButton = document.getElementsByClassName("remove_button");
          const confirm = document.getElementsByClassName("confirm_button");     
          button.appendChild(document.createTextNode("Trade this car"));
          document.getElementById("newCar").appendChild(button);
          for(let i = 0; i < sellThisCarButton.length; i++){
            sellThisCarButton[i].addEventListener("click" , () => {
              let tradeCar = sellThisCarButton[i];
              tradeCar.previousSibling.innerHTML = "<input type='text' id='input_edit' placeholder='Year'/>" +
                                                   "<input type='text' id='input_editTwo' placeholder='Make'/>" + 
                                                   "<input type='text' id='input_editThree' placeholder='Model'/>" + 
                                                   "<button class='confirm_button'>" + "trade" + "</button>";
              for(let y = 0; y < confirm.length; y++){
                confirm[y].addEventListener("click" , () => {
                  document.getElementById("input_edit").style.display = "none";
                  document.getElementById("input_editTwo").style.display = "none";
                  document.getElementById("input_editThree").style.display = "none";
                  tradeCar.previousSibling.style.display = "none";                   
                  confirm[y].style.display = "none";
                  sellThisCarButton[i].style.display = "none";                                    
                  let trade = new Car(document.getElementById("input_edit").value, document.getElementById("input_editTwo").value, document.getElementById("input_editThree").value);
                  trade.enjoyCar(document.getElementById("input_edit").value, document.getElementById("input_editTwo").value, document.getElementById("input_editThree").value);
                  trade.appendTradeButton();
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
        usersCar.appendTradeButton();
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

  