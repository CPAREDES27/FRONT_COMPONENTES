sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "xts/com/zparentapp/model/models",
    "sap/ui/model/json/JSONModel"
],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("xts.com.zparentapp.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                this.setModel(this.createDeviceModel(), "device");
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                // enable routing
                this.getRouter().initialize();
                /*this.getRouter().attachTitleChanged(function (oEvent) {
                    document.title = oEvent.getParameter("title");
                });*/


                // set the device model

            },
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            }
        });
    }
);