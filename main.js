
        var  sastafunction ="";
        
            var i,j;
            var asc=[];
           
         const x1  = new Date().getUTCDate();
         const x2 = new Date().getUTCMonth();
         const x3 =  new Date().getUTCFullYear();
         const x4 = new Date().getUTCHours();
         const x6 = new Date().getUTCMilliseconds();
         const x5 = new Date().toLocaleString();
         var zaka = x5.split(":");
         var rezs = zaka[0].length;
         var zooplie1 = zaka[0][rezs-1];//hopur
         var zooplie2 = zaka[0][rezs-2];//hour
         var Kartuun1 = zaka[1][0];//minute
         var Kartuun2 = zaka[1][1];//minute
         var Zoomie3 = Kartuun1.charCodeAt();
         var Zoomie = zooplie1.charCodeAt();
         var Zoomie1 = zooplie2.charCodeAt();
         var Zoomie4 = Kartuun2.charCodeAt();
         var Karnama = Zoomie1+Zoomie + Zoomie3+Zoomie4 +x6+ x2+x3+x4; 
           var PvtKey = Karnama;
           var encryptpad =0;
           function encryptkey(PvtKey)
           {
               
            sastafunction = document.getElementById("getMessage").value;
            for(i=0;i<sastafunction.length;i++)
            {
                asc[i]=[i];
                asc[i].push(sastafunction.charCodeAt(i));
                
            }
                encryptpad = Math.pow(((67*PvtKey*6)),2);
               return encryptpad;
           }

           var X =0;
           var EC =[];
           var Mesge1= "";
           function encrypt(encryptpad)
           {        
                    for(i=0;i<sastafunction.length;i++)
                    {
                            var j=0;
                            asc[j][1] = asc[j][1] + encryptpad;
                             X = asc.shift();
                            EC.push(X);
                            console.log(X);
                             Mesge1 = Mesge1 +X[1] ;    // add a operator and use it to make a array.
                    }
                    document.getElementById("message").value = Mesge1;
                }
           var decryptpad =0;
           var KrazyMsg;
           function decryptkey(PvtKey)
           { 
                KrazyMsg = document.getElementById("MessageRecieved").value;
               parseInt(KrazyMsg);
               var X = Intl.DateTimeFormat().resolvedOptions().timeZone;
               console.log(X);
                decryptpad = Math.pow(((67*PvtKey*6)),2) ;//decrypt using the same enc key.
                
              return decryptpad; 
           } 
           
           var Z="";
           var  O =0;
           function Krazy(KrazyMsg)
           {
               O = KrazyMsg -decryptpad;
               Z=  String.fromCharCode(O);
               document.getElementById("EnterMessage").value = Z ;
           }
           function decrypt(decryptpad)
           {
               for(i=0;i<sastafunction.length;i++)
               {
                var j=0;
                EC[j][1] = EC[j][1] - decryptpad;
                X = EC.shift();
                EC.push(X);
                
               }
               console.log(EC);
               for(i=0;i<sastafunction.length;i++)
               {
                Z =Z+ String.fromCharCode(EC[i][1]);
               }
               document.getElementById("EnterMessage").value =  Z;
           }
          

         console.log(Z);
