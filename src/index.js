module.exports = function toReadable (number) {
   const unitQuantity = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

    const twentyQuantity = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    const hundredQuantity = ['','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred']; 


            let indexHudred = Math.trunc(number/100);
            let indexTwenty = Math.trunc((number%100)/10);
            let indexUnit = Math.trunc((number%100)%10);
            let result;

            if(number === 0) {
                result = 'zero';
                return result
            }

            if (number < 20) {
                indexUnit = number;
                result = unitQuantity[indexUnit];
                return result;
            } 
             
            if(number%100 === 0) {
                result = hundredQuantity[indexHudred];
                return  result
            }

            if(number%100 < 20) {
                indexUnit = number%100;
                result = hundredQuantity[indexHudred] + ' ' + unitQuantity[indexUnit];
                return  result
            }

            result = hundredQuantity[indexHudred] + ' ' + twentyQuantity[indexTwenty] + ' ' + unitQuantity[indexUnit];
            return  result.trim();
}
