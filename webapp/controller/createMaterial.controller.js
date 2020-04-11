sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/Filter"
//	"sap/ui/core/syncStyleClass"
	], function(Controller,MessageToast,Fragment,Filter){
		"use strict";
		
		return Controller.extend("MaterialMaterialMaster.controller.createMaterial",{
			onInit: function(oEvent){
			
				
			},
			initBusyDialog: function(){
				if (!this._oBusyDialog) {
					this._oBusyDialog= sap.ui.xmlfragment( "MaterialMaterialMaster.view.BusyDialog", this);
					this.getView().addDependent(this._oBusyDialog);
					this._oBusyDialog.open();
				} 
				else
					this._oBusyDialog.open();
			},
			handleValueHelp : function (oEvent) {
					var sInput = oEvent.getSource().getValue();
				this.inputId = oEvent.getSource().getId();
				
				if(!this._valueHelpDialog){
					this._valueHelpDialog= sap.ui.xmlfragment( "MaterialMaterialMaster.view.dialog", this);
					this.getView().addDependent(this._valueHelpDialog);
				}
				
				this._valueHelpDialog.getBinding("items").filter([new Filter(
					"Mbrsh",sap.ui.model.FilterOperator.Contains,sInput
					)]);
					this._valueHelpDialog.open(sInput);
			},
			_handleValueHelpSearch : function (evt) {
				var sValue = evt.getParameter("value");
				var oFilter = new Filter(
					"Mbrsh",
					sap.ui.model.FilterOperator.Contains, sValue
				);
				evt.getSource().getBinding("items").filter([oFilter]);
			},

			_handleValueHelpClose : function (evt) {
				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productInput = this.byId(this.inputId);
					productInput.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			},
			handleDisplayClick: function(){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Display_Materials");
			},
			handlePODisplay : function(){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Display_Purchase_Orders");	
			},
			handleCreateMaterial: function(){
				var oEntry={};
				var that = this;
				oEntry.MATERIAL = this.byId('material').getValue();
				oEntry.IND_SECTOR = this.byId('mind_sector').getValue();
				oEntry.MATL_TYPE = this.byId('mtype').getValue();
				oEntry.MATL_GROUP = this.byId('mgroup').getValue();
				oEntry.MATERIALDESCRIPTION = this.byId('mdescription').getValue();
				oEntry.CREATED_ON = "2020-04-03T15:01:01";
				
				var oModel=this.getOwnerComponent().getModel();
				//MessageToast.show("data: " + JSON.stringify(oEntry));
				this.initBusyDialog();
			//	sap.ui.core.BusyIndicator.show(0);
				oModel.create("/MaterialMasterSet",oEntry,{
					async:false,
					success: function(oData,Response){
					//	MessageToast.show("Material Created");
					if(oData!=="" || oData!==undefined){
						that._oBusyDialog.close();
					//	sap.ui.core.BusyIndicator.hide();
						MessageToast.show("Material Created Successfully");
					}
					else{
						that._oBusyDialog.close();
					//	sap.ui.core.BusyIndicator.hide();
						MessageToast.show("Material not created");
					}
					},
					error: function(cc,vv){
						MessageToast.show("Error in Material Creation");	
					}
				});
			}
		});
});