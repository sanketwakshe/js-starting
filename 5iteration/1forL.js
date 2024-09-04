//for 
let array = ['sank','prem']
//console.log(array.length);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element);
    }

    for (let i = 0; i < 10; i++) {
        const element = i
        if(element == 5){
          //  console.log("yes");
            
        }
    //console.log(element);
        }

        //lop ke andar loop
        for (let i = 1; i <= 10; i++) {
            //console.log(`Tables of ${i}`);

            for (let j = 1; j <= 10; j++) {
            //console.log(i + '*' + j + '=' + i*j);                      // table  create logic  console.log( i + '*' + j + '=' + i*j)
            
            }
            
        }                                                              // first loop one time then inner loop run 10 times output will be big


let array1 = ['sank','prem','om']
console.log(array1.length);
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    console.log(element);
    }

    // break tikadech thambanar 

  for (let i = 1; i < 20; i++) {
    if (i==5) {
        //console.log(`detected${i}`);
        break
        }
     //console.log(i);
        }

         
//continue  ** jikade detect 5 kelay tyachya pudhachapan print honar

for (let i = 1; i < 20; i++) {
    if (i==5) {
        console.log(`detected${i}`);
        continue
        }
     console.log(i);
        }