var baby = 0;
for(var i = 2; i < process.argv[i]-1; i++){
    baby = baby + Number(process.argv[i]);
}
console.log(baby);
