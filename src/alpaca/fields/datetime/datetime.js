(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["alpaca/Alpaca", "jquery"], factory);
    } else {
        factory(window.Alpaca, window.$);
    }
}(this, function (Alpaca, $) {

    /**
     * @lends Alpaca.Fields.DatetimeField.prototype
     *
     * @constructs
     * @augments Alpaca.Fields.ObjectField
     *
     * @class A combo field for rendering a standard US range. It also comes up with support for Google Map
     * which would requires including Google Map JS file for the form that uses this class.
     */
    Alpaca.Fields.DatetimeField = Alpaca.Fields.TextField.extend({

        /**
         * @see Alpaca.Fields.TextField#setup
         */
        setup: function() {
            this.base();
        },

        /**
         * @see Alpaca.Fields.TextField#postRender
         */
        postRender: function(callback) {

            var self = this;

            this.base(function() {

                if (self.field)
                {
                    if (self.field.datetimepicker) {
                        self.field.hover(function() {
                            if (!$(this).hasClass('hasDatepicker')) {

                                var timePickerOptions = self.options.timepicker;
                                if (!timePickerOptions)
                                {
                                    timePickerOptions = self.options.timepicker;
                                }
                                if (!timePickerOptions)
                                {
                                    timePickerOptions = {
                                        "changeYear": true,
                                        "changeMonth": true
                                    };
                                }
                                $(this).datetimepicker(timePickerOptions);
                            }
                        });
                        if (self.fieldContainer) {
                            self.fieldContainer.addClass('alpaca-controlfield-datetime');
                        }
                    }
                }

                callback();

            });
        },

        /**
         *@see Alpaca.Fields.TextField#setValue
         */
        setValue: function(value) {
            if (value) {
                if (Alpaca.isNumber()) {
                    value = new Date(value);
                }
                if (Object.prototype.toString.call(value) == "[object Date]") {
                    this.base((value.getMonth() + 1) + "/" + value.getDate() + "/" + value.getFullYear() + " " + value.getHours() + ":" + value.getMinutes());
                } else {
                    this.base(value);
                }
            } else {
                this.base(value);
            }
        },

        /**
         * @see Alpaca.Fields.TextField#getValue
         */
        getValue: function() {
            return this.base();
        },

        /**
         * Returns field value in datetime.
         *
         * @returns {Date} Field value.
         */
        getDatetime: function() {
            try {
                return this.field.datetimepicker('getDate');
            } catch (e) {
                return this.getValue();
            }
        },//__BUILDER_HELPERS

        /**
         * @private
         * @see Alpaca.ControlField#getSchemaOfOptions
         */
        getSchemaOfOptions: function() {
            return Alpaca.merge(this.base(), {
                "properties": {
                    "timepicker": {
                        "title": "Timepicker options",
                        "description": "Options that are supported by the <a href='http://trentrichardson.com/examples/timepicker/'>jQuery timepicker addon</a>.",
                        "type": "any"
                    }
                }
            });
        },

        /**
         * @private
         * @see Alpaca.ControlField#getOptionsForOptions
         */
        getOptionsForOptions: function() {
            return Alpaca.merge(this.base(), {
                "fields": {
                    "timepicker": {
                        "type": "any"
                    }
                }
            });
        },

        /**
         * @see Alpaca.Fields.TextField#getTitle
         */
        getTitle: function() {
            return "Datetime Field";
        },

        /**
         * @see Alpaca.Fields.TextField#getDescription
         */
        getDescription: function() {
            return "Datetime Field based on Trent Richardson's <a href='http://trentrichardson.com/examples/timepicker/'>jQuery timepicker addon</a>.";
        },

        /**
         * @see Alpaca.Fields.TextField#getFieldType
         */
        getFieldType: function() {
            return "datetime";
        }//__END_OF_BUILDER_HELPERS
    });

    Alpaca.registerFieldClass("datetime", Alpaca.Fields.DatetimeField);
    Alpaca.registerDefaultFormatFieldMapping("datetime", "datetime");

    return Alpaca.Fields.DatetimeField;
}));
