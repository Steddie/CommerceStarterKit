//>>built
define("epi-cms/component/SharedBlocks",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/when","epi-cms/widget/HierarchicalList","epi-cms/component/SharedBlocksViewModel","epi/i18n!epi/cms/nls/episerver.cms.components.createblock","epi/i18n!epi/cms/nls/contenttypes.blockdata"],function(_1,_2,_3,on,_4,_5,_6,_7,_8){return _2([_5],{showCreateContentArea:true,modelClassName:_6,noDataMessage:_7.nocontent,hierarchicalListClass:"epi-blockList",createContentIcon:"epi-iconPlus",createContentText:_8.create,postCreate:function(){this.inherited(arguments);this.own(this.list.grid.on("dgrid-refresh-complete",_3.hitch(this,function(_9){_4(_9.results,_3.hitch(this,function(_a){var _b=_a.length>0?false:this.model.getCommand("newBlockDefault").get("canExecute");this._toggleCreateContentArea(_b);}));})));},_setupList:function(){this.inherited(arguments);var _c=this.model._commandRegistry,_d=this.list;this.own(on(_d,"copyOrCut",function copyOrCuthandler(_e){_e?_c.copy.command.execute():_c.cut.command.execute();}),on(_d,"delete",function(){_c["delete"].command.execute();}),on(_d,"createItemAction",function(){_c.newBlockDefault.command.execute();}),on(_d,"itemAction",function(){_c.edit.command.execute();}));}});});