// Solve No 1

function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return ("Distance can't be negatiev. Enter a real distance");

  } else {
    let meter = kilometer * 1000; //1 kilometer = 1000 meter.
    return meter;
  }
};


// Solve No 2
function budgetCalculator(watch,phone,laptop){

    if(watch<0 || phone<0 || laptop<0){
        return ("Quantity must be in a positive number.");
    }else{
        const priceOfWatch = watch*50;
        const priceOfPhone = phone*100;
        const priceOfLaptop = laptop*500;

        const totalExpense= (priceOfWatch+priceOfPhone+priceOfLaptop);
        return totalExpense; 
    }
};


// Solve No 3
function hotelCost(numberOfdays){
    if(numberOfdays<=10){
        const totalCost = numberOfdays*100;
        return totalCost;
    }
    else if(numberOfdays<=20){
        const tenDaysCost = 10*100;
        const daysLeft = numberOfdays-10;
        const restDaysCost = daysLeft*80;
        const totalCost = (restDaysCost+tenDaysCost);
        return totalCost;
    }
    else if (numberOfdays>20){
        const tenDaysCost = 10*100;
        const secondTenDaysCost = 10*80;
        const leftDays = numberOfdays-20;
        const restCost = leftDays*50;
        const totalCost = (restCost+tenDaysCost+secondTenDaysCost);
        return totalCost;
    }
      
  };


  // Solve No 4

  function megaFriend(name){
    var nameArray= name;
    var maxLength = 0;

 for(var i=0; i<nameArray.length;i++){
    var nameLength = nameArray[i].length; //to determine a srtinag length in Java Script we use str.length.
   
   if(maxLength<nameLength){
       maxLength=nameLength; 
        
   };

};

//this loop is for name output from a maximum string size
 for(var j=0; j<nameArray.length;j++){
    if(maxLength===nameArray[j].length){
        var maxName= (nameArray[j]);
        return maxName;
    };
};

};

//tested with this input.
//megaFriend(["Tanvir sazib","Abir","Nibir ishtiaq"]);