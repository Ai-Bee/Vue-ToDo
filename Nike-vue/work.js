let one = new Vue({
        el: "#bod",
        data: {
                formed: false,
                work:"",
                checks:0,
                green:false,
                activities: []
        },
        created(){
                 localStorage.getItem('acts') ? this.initialize(): [];
        },
        methods:{
                initialize:function(){
                        this.activities = JSON.parse(localStorage.getItem('acts'))
                        this.formed = true;
                },
               addition:function(item){
                      
                       if(item!==""){
                               this.work = ""; 
                               this.activities.push(item)
                               if (window.localStorage) {
                                       localStorage.setItem('acts', JSON.stringify(this.activities)) 
                                       //this.activities = JSON.parse(localStorage.getItem('acts'))
                               }    
                       }
                       
               },
               removeItem:function(data){
                       this.activities.pop(data);
                       localStorage.setItem('acts', JSON.stringify(this.activities))
               },
                clearList:function(){
                       localStorage.clear('acts')
                }
        }
       
});
setInterval(function yoo() {
        one.checks = document.querySelectorAll('input[type="checkbox"]:checked').length;
}, 1500);


