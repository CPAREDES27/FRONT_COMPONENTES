sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("zcommonformulario.controller.Main", {
			onInit: function () {
                    var that = this;
                    //var oModel = that.getOwnerComponent()._getPropertiesToPropagate().oModels.undefined;
                    var oModel = that.getOwnerComponent()._getPropertiesToPropagate().oModels.modelGeneral;
                    //var data = oModel.getData();
                   // var datax = oModel.oData;
                    that.getView().setModel(oModel, "modelGeneral");
			}
		});
	});
