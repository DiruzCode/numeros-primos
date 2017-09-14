        var list = [];
        var end = false;
        var init = 0;

        var isPrime = function(num){
            this.init++;
            var lastNumber = num.toString().split('').pop();
            var check=0;
            for(var i=0; i<=num; i++){
              if(num%i==0){
                  check++;
              }
              if(check > 2){
                  break;
              }
            }
            if(check==2 && lastNumber == 7){
                list.push(num);
                if(list.length == 60){
                    this.end = true;
                }
            }
        }
        while(!end){
            isPrime(init);
        };

        console.log(list);
