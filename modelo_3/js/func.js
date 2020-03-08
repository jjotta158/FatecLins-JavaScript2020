const vue = new Vue({
    el:"#app",
    data:{
        label:0,
        buttons:[
            {num:1},
            {num:2},
            {num:3},
            {num:4},
            {num:5},
            {num:6},
            {num:7},
            {num:8},
            {num:9}
        ],
        result:0,
        operation:'',
        fim:false
    },  
    methods:{
        fillLabel:function(num) {
            if(this.fim == true) {
                this.label = 0
                this.fim = false;
            }
            let label = this.label;
            return this.label = `${label}${num}`;  
        },
        deleteLastLabelCharacter:function(){
            var label = this.label.split("");
            var lastCharacter = label.length -1;
            if(lastCharacter + 1 == 0) {
                return false;
            } else {
                label.splice(lastCharacter, 1);
                label = label.join();
                
                label = label.replace(/,/g,'')
            }
            return this.label = label;
        },
        clearLabel:function() {
            return this.label = 0;
        },
        reset:function() {
            this.result = 0;
            return this.label = 0;  
        },
        resp:function(){
            if(this.operation == 'sum') {
                this.result = parseFloat(this.label) + parseFloat(this.result);
                this.label = this.result;
            } else if(this.operation == 'sub') {
                this.label = parseFloat(this.result) - parseFloat(this.label) ;
            } else if(this.operation == 'mult') {
                this.label = parseFloat(this.label) * parseFloat(this.result);
            } else if(this.operation == 'div'){
                this.label = parseFloat(this.result) / parseFloat(this.label);
            }
            
            this.fim = true;
        },
        sum:function() {
            this.result = parseFloat(this.label) + parseFloat(this.result);
            this.clearLabel();
            this.operation = "sum";
        },
        sub:function() {
            if(this.result == 0) {
                this.result = parseFloat(this.label) ;
            } else {
                this.result = parseFloat(this.result) - parseFloat(this.label) ;
            }
            this.clearLabel();
            this.operation = "sub";
        },
        mult:function() {
            if(this.result == 0) {
                this.result = parseFloat(this.label) ;
            } else {
                this.result = parseFloat(this.label) * parseFloat(this.result) ;
            }
            this.clearLabel();
            this.operation = "mult";
        },
        div:function() {
            if(this.result == 0) {
                this.result = parseFloat(this.label) ;
            } else {
                this.result = parseFloat(this.result) / parseFloat(this.label) ;
            }
            this.clearLabel();
            this.operation = "div";
        }
    }
})