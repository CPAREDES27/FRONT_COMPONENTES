sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/ComponentContainer",
    "sap/m/IconTabBar",
    "sap/m/IconTabFilter",
    "sap/ui/core/Component",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, ComponentContainer,
        IconTabBar, IconTabFilter, Component) {
        "use strict";

        return Controller.extend("xts.com.zparentapp.controller.Main", {
            onInit: function () {
                var oView = this.getView();
                var obj = {};
                obj.nombre = "Pavel";
                obj.apellido = "Principe Orosco";
                obj.dni = "41244456";
                obj.edad = "18";

                var modelGeneral = new sap.ui.model.json.JSONModel();
                modelGeneral.setData(obj);
                //oView.setModel(modelGeneral, "modelGeneral");
                this.getOwnerComponent().setModel(modelGeneral, "modelGeneral");

            },
            onTab: function (evt) {
                var that = this;
                var oView = this.getView();
                var tabBar = oView.byId('tabBar');
                var selected = tabBar.getSelectedKey();

                var nameComponent = "";
                var idComponent = "";
                var urlComponent = "";
                console.log("tab seleccionado => " + selected);

                if (selected == '_IDGenIconTabFilter3') {

                    nameComponent = "zcommonformulario";
                    idComponent = "zcommonformulario";
                    //DEV
                    // urlComponent = "https://centenariodev.cpp.cfapps.us10.hana.ondemand.com/7a79b95f-dca8-488d-9468-7d9dd96d876b.iprovidercommongeneral.copeincaiprovidercommoniprovidercommongeneral-1.0.0";
                    urlComponent = "https://tasaqas.launchpad.cfapps.us10.hana.ondemand.com/fd27ec27-b661-478e-b3e5-6b534e0d2ad8.CHILDMTAR.zcommonformulario-1.0.0";
                                    
                } else {
                    return false;
                }



                var compCreateOk = function () {
                    that.oGlobalBusyDialog.close();
                };
                var content = oView.byId(selected).getContent();
                if (content.length === 0) {
                    this.oGlobalBusyDialog = new sap.m.BusyDialog();
                    this.oGlobalBusyDialog.open();
                    var oContainer = new sap.ui.core.ComponentContainer({
                        id: idComponent,
                        name: nameComponent,
                        url: urlComponent,
                        settings: {},
                        componentData: {},
                        propagateModel: true,
                        componentCreated: compCreateOk,
                        height: '100%',
                        //manifest: true,
                        async: false
                    });

                    oView.byId(selected).addContent(oContainer);
                }

            }
        });
    });
