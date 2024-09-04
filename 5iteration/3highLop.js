// for of

const arr = ['sank','mahesh','sanika']

for (const num of arr) {
    //console.log(num);
    }

    // const greetings1 = 'sanket wakshe'
    // for (const greet of greetings) {
    //     //console.log(greet);
    //     }
    
        //********* by using break************** */
        
    const greetings = 'sanket wakshe'
    for (const greet of greetings) {
        if(greet=='k'){
          //  console.log('not posible');
            
            break
        }
        //console.log(greet);
        }

//Maps
//are spetialized for a unique values (2 value asel tr ekach unique denar)in one sequeance

const map = new Map()
map.set('IN','india')
map.set('US','united state of america')
map.set('IN','india')

//console.log(map);

for (const [key , value ] of map) {
    //console.log(key, ':-' ,value);
    }


    //*********** */ ashi value fact apn map nech gheu shakto object chalt nahi
    //** */ for of ha object varti kam karat nahi

 // for in ha object varti kam karto
