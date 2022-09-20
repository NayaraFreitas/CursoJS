function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;   // vai criar o segundos randomicos entre 1 á 3 segundos
    return Math.floor(num);
}

function f1(callback) {                               //  
    setTimeout(function(){                              //
        console.log('F1');                                //      
        if (callback) callback();                          // 
    }, rand());                                           //      
}                                                        //   
    function f2(callback) {                             //
    setTimeout(function (){                            //         
         console.log('F2');                           //      
        if (callback) callback();                    /// um modo de mostrar como o callback funciona 
                                                     //   
    }, rand());                                      //   
}                                                    //   
    function f3(callback) {                          //       
    setTimeout(function(){                           //   
         console.log('F3');                         //
        if (callback) callback();                  // 
                                                  //  
    }, rand());                                 //
}

f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){            /// a mesma função das funções de baixo só que de outro modo
    f3(f3Callback);
}

function f3Callback(){
    console.log('Olá Mundo!');
}


/*f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá Mundo!');  /// sem essa função uma chamando a outra o fs sair desordenados , randomicamente
            
        });
    });
});*/

