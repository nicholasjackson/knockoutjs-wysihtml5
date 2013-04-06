//knockout.wysihtml5 0.2.1 | (c) 2013 Nic Jackson | http://www.opensource.org/licenses/mit-license
(function(factory) {
    if (typeof define === "function" && define.amd) {
        // AMD anonymous module
        define(['knockout', 'jquery','bootstrap-wysihtml5'], factory);
    } else {
        // No module loader (plain <script> tag) - put directly in global namespace
        factory(window.ko);
    }
})(function(ko) {

ko.bindingHandlers.wysihtml5 = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {

        var options = {};
        var value = ko.utils.unwrapObservable(valueAccessor()) || {};

        options.events = {
                "change" : function() {
                    var observable;
                    var content = ko.utils.unwrapObservable(valueAccessor()) || {};

                    if (content.data != undefined) {
                        observable = valueAccessor().data;
                    } else {
                        observable = valueAccessor();
                    }

                    observable(control.getValue());
                }
            };

       if (value.options) {
            ko.utils.extend(options, value.options);
            delete value.options;
        }

        // if the textarea has no id, generate one to keep wysihtml5 happy
        if($(element).attr('id') == undefined || $(element).attr('id') == '')
            $(element).attr('id','id_' + Math.floor(new Date().valueOf()));

        var control = $(element).wysihtml5(options).data("wysihtml5").editor;
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        //
        var control = $(element).data("wysihtml5").editor;
        var content = ko.utils.unwrapObservable(valueAccessor()) || {};

        if (content.data != undefined) {
            control.setValue(valueAccessor().data());
        } else {
            control.setValue(valueAccessor()());
        }
    }
};

});