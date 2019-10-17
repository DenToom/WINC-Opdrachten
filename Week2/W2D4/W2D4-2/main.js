const car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
};
 //console.log(car.getBrand())
 
//car.getBrand();

//const getCarBrand = car.getBrand;


const getCarBrand = car.getBrand.bind(car);
//const getCarBrand = car.getBrand;
//console.log(getBrand)
 
//getCarBrand.apply(car);   // output ... ??

car.getBrand();