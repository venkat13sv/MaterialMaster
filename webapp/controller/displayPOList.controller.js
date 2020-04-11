sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("MaterialMaterialMaster.controller.displayPOList", {
		
		onInit: function(){
        		var oModel=this.getOwnerComponent().getModel("PurchaseOrders");  
        		this.getView().setModel(oModel);
			
			
		},
		handleBack : function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home_route");
		}

	});
});