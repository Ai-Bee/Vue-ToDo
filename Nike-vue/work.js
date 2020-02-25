let one = new Vue({
        el: "#bod",
        data: {
                formed: false,
                work:"",
                checks:0,
                green:false,
                activities: []
        },
        methods: {
               addition:function(item){
            
                       if(item!==""){
                               this.activities.push(item);     
                               this.work=""; 
                       }
                       
               },
               removeItem:function(data){
                       this.activities.pop(data);
               },
                clearList:function(){
                        for(var ey=0;ey<this.activities.length;ey++){
                                do{
                                        this.activities.pop(ey);
                                } while(this.activities.length>0);
                               
                        }
                }
        }
       
});
setInterval(function yoo() {
        one.checks = document.querySelectorAll('input[type="checkbox"]:checked').length;
}, 1500);


