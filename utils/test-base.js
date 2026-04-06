const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
testDataForOrder :    {
    username : "anshika@gmail.com",
    password : "Learning@830$3mK3",
    productName:"ADIDAS ORIGINAL"
    
    }

}

)




