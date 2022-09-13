
function isolateDuplicates(text) {

  if (typeof text != "string") {throw("Please enter a valid string");}

  console.log(` initials : ${text}`);

  let n = text.split('');

  let result = [];

  let i = 0;
  let count = 0;

  for(;i<n.length;){

    result.push(n[i]);

    // if (n[i] === n[i + 1]) {

      console.log(`in first if i :${i}`)

      if(n[i] === n[i+1]){

        i++;

        result.push(n[i]);

        if(n[i] === n[i+1]){

        let replica = '';

        for (;n[i] === n[i + 1] && i < n.length;) {

          replica += (n[i + 1]);

          i++;
          // console.log(`in 2nd if for loop i :${i}`)
        }

        result.push(replica);
        count ++;
      }

      }
      else {i ++; }

    }


  return result.join('')+ count;

}

module.exports = isolateDuplicates;
