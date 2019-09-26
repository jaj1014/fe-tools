const AJAX_FE_TOOLS = function initialize() {
    const inspectVue = function getVC(){
        return (function dudeWheresMyVue (element){
            while(!element.__vue__){
                element = element.parentNode;
            }
           return element.__vue__;
        })($0)
    };

    VUE_TOOLS = {
        inspectVue
    };

    return {
        VUE_TOOLS,
    };
}();