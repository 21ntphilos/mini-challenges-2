
function isolateDuplicates(text) {

  if (typeof text != "string") {throw("Please enter a valid string");}

    let lower = text.toLowerCase();
    let Alphabets = text.split('');

    let result = '';
    let i = 0;
    let count = 0;

    for(;i<Alphabets.length && i<lower.length;){

        result += (Alphabets[i]);

        if(lower[i] === lower[i + 1]){

            i++;
            result += (Alphabets[i]);


            if((lower[i]) === lower[i+1]){

              let replica = [];

              for (;lower[i] === lower[i+1];) {

                replica.push(Alphabets[i + 1]);
                i++;
              }

              result += `[${replica.join('')}]`;
              count ++;
            }
          i++;

        }
        else {

            i ++; }
      }

    return [result,count];

  }

module.exports = isolateDuplicates;
