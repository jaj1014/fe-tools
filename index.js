/*
    USAGE:
    Copy the below class and paste into the console to access the defined tools.
*/

const AJAX_FE_TOOLS = function initialize() {
    const inspectVue = function getVC() {
        return (function dudeWheresMyVue(element) {
            try {
                while (!element.__vue__) {
                    element = element.parentNode;
                }
                return element.__vue__;
            } catch (e) {
                console.warn('Make sure you have selected a vue element');
            }
        })($0)
    };

    VUE_TOOLS = {
        inspectVue
    };

    return {
        VUE_TOOLS,
    };
}();
