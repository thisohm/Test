//JavaScript 
//Vrit Pipatpratuang

var ConAlienToInt = function (s) {
    
    const alienMap = new Map([
        ['A', 1],
        ['B', 5],
        ['Z', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['R', 1000],
    ]);
  
    let sum = 0;

    for(let i = s.length - 2; i >= 0; i--){
        if(alienMap.get(s[i]) >= alienMap.get(s[i + 1])){
            sum += alienMap.get(s[i]);
        } 
        else{
            sum -= alienMap.get(s[i]);
        }
    }
    return sum + (alienMap.get(s[s.length - 1]));
    
};

console.log(ConAlienToInt("AAA"));
console.log(ConAlienToInt("LBAAA"));
console.log(ConAlienToInt("RCRZCAB"));