sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("MaterialMaterialMaster.controller.View1", {
		
		onInit: function(){
// 			var serviceURL = "http://localhost:8081/http://34.237.165.207:8007/sap/opu/odata/sap/ZMATERIALMASTER_SRV_01/";
// 			var oModel = new sap.ui.model.odata.v2.ODataModel(serviceURL,{ 
//     "json"     : true,
//     "user"     : "svenka",
//     "password" : "Srom@1964"
// });
// 			this.getView().setModel(oModel);                         
			
			
		},
		handleBack : function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home_route");
		}

	});
});