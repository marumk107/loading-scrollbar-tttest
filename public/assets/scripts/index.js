
new Vue({
    el: '#app',
    data : {
        list : []
    },
    methods : {
        infiniteHandler : function($state) 
        {
            var self = this;
            if ( 200 < self.list.length )  {
                $state.complete();
            }

            setTimeout(function(){

                for(var i = 0 ; i < 21; i++) {
                    self.list.push('サンプル' + ( self.list.length + 1));

                }
                                    $state.loaded();
            },2000);
        }
    },
    components : {
        'PerfectScrollbar' : window.Vue2PerfectScrollbar.PerfectScrollbar
    }
});