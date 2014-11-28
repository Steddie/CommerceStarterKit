/* jshint -W099 */
/* global jQuery:false */

(function($, Oxx, commercestarterkit){

	"use strict";

//********************************************************************************
//*NAMESPACES ********************************************************************
//********************************************************************************
	commercestarterkit = window.commercestarterkit = (!commercestarterkit) ? {} : commercestarterkit;

//********************************************************************************
//*CLASS VARIABLES****************************************************************
//********************************************************************************

//********************************************************************************
//*CONSTRUCTOR********************************************************************
//********************************************************************************
	commercestarterkit.Registration = {


//********************************************************************************
//*PROTOTYPE/PUBLIC FUNCTIONS*****************************************************
//********************************************************************************

		/**
		 * Init the registration view
		 * @param {string} id
		 */
		init: function(id) {

			/** @var {jQuery} */
			this._$el = $((id || '#registration'));

			if(this._$el.length === 0) {
				return;
			}

			/** @type {jQuery} */
			this._$interests = this._$el.find('.interests');

			/** @type {jQuery} */
			this._$joinMemberClubOptions = this._$el.find('.join-member-club input[type=radio]');



			this._$joinMemberClubOptions.on('change', $.proxy(this._onJoinMemberClubChange, this));

		},

//********************************************************************************
//*PRIVATE OBJECT METHODS ********************************************************
//********************************************************************************



//********************************************************************************
//*CALLBACK METHODS **************************************************************
//********************************************************************************




//********************************************************************************
//*EVENT METHODS******************************************************************
//********************************************************************************

		/**
		 *
		 * @param event
		 * @private
		 */
		_onJoinMemberClubChange: function(event) {
			if($(event.target).val() === 'True') {
				this._$interests.show();
			} else {
				this._$interests.hide();
			}

		}


	};


})(jQuery, window.Oxx, window.commercestarterkit);
