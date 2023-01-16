for (var ex=0;ex<4;ex++){ //main loop1
    var gap="";
    for( var ey=4; ey>ex;ey--){//innerloop
     gap += " ";
    }
    for( var k=0;k<=ex; k++){
     gap +="*";
    }
    for(var ez=1;ez<=ex;ez++){
     gap +="*";
    }
    console.log(gap)// upper side
}
for (var ex=4;ex>=0;ex--){ //mainloop2
    var gap="";
    for( var ey=4; ey>ex;ey--){ //innerloop
     gap += " ";
    }
    for( var k=0;k<=ex; k++){
     gap +="*";
    }
    for(var ez=1;ez<=ex;ez++){
     gap +="*";
    }
    console.log(gap) //  lower side
}

// output on console window