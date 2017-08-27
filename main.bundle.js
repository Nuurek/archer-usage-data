webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col s12 l10 offset-l1\">\n        <div class=\"section z-depth-1\">\n            <app-chart></app-chart>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Archer Usage Data';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_jobs_module__ = __webpack_require__("../../../../../src/app/jobs/jobs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_2__jobs_jobs_module__["a" /* JobsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/jobs/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [class.valign-wrapper]=\"valignWrapper\">\n    <div class=\"col s12 l4\">\n        <form [formGroup]=\"chartForm\" materialize class=\"container\">\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <select formControlName=\"period\" materialize=\"material_select\" [materializeSelectOptions]=\"chartOptions.periodOptions\">\n                            <option *ngFor=\"let option of chartOptions.periodOptions\" [value]=\"option.value\">{{option.name}}</option>\n                        </select>\n                    <label>Period</label>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <select formControlName=\"property\" materialize=\"material_select\" [materializeSelectOptions]=\"chartOptions.propertyOptions\">\n                            <option \n                                *ngFor=\"let option of chartOptions.propertyOptions\"\n                                [value]=\"option.value\"\n                            >{{option.name}}</option>\n                        </select>\n                    <label>Property</label>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12 l8\">\n                    <select formControlName=\"xAxis\" materialize=\"material_select\" [materializeSelectOptions]=\"chartOptions.axisOptions\">\n                        <option\n                            *ngFor=\"let option of chartOptions.axisOptions\"\n                            [value]=\"option.value\"\n                        >{{option.name}}</option>\n                    </select>\n                    <label>X Axis</label>\n                </div>\n                <div class=\"col s12 l4\">\n                    <div class=\"row\">\n                        <div class=\"col s6 l12\">\n                            <input formControlName=\"xAxisFunction\" type=\"radio\" id=\"xAxisSum\" value=\"sum\" />\n                            <label for=\"xAxisSum\">Sum</label>\n                        </div>\n                        <div class=\"col s6 l12\">\n                            <input formControlName=\"xAxisFunction\" type=\"radio\" id=\"xAxisAvg\" value=\"avg\" />\n                            <label for=\"xAxisAvg\">Avg.</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12 l8\">\n                    <select formControlName=\"yAxis\" materialize=\"material_select\" [materializeSelectOptions]=\"chartOptions.axisOptions\">\n                        <option *ngFor=\"let option of chartOptions.axisOptions\" [value]=\"option.value\">{{option.name}}</option>\n                    </select>\n                    <label>Y Axis</label>\n                </div>\n                <div class=\"col s12 l4\">\n                    <div class=\"row\">\n                        <div class=\"col s6 l12\">\n                            <input formControlName=\"yAxisFunction\" type=\"radio\" id=\"yAxisSum\" value=\"sum\" />\n                            <label for=\"yAxisSum\">Sum</label>\n                        </div>\n                        <div class=\"col s6 l12\">\n                            <input formControlName=\"yAxisFunction\" type=\"radio\" id=\"yAxisAvg\" value=\"avg\" />\n                            <label for=\"yAxisAvg\">Avg.</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12 l8\">\n                    <select formControlName=\"bubbleSize\" materialize=\"material_select\" [materializeSelectOptions]=\"chartOptions.axisOptions\">\n                        <option *ngFor=\"let option of chartOptions.axisOptions\" [value]=\"option.value\">{{option.name}}</option>\n                    </select>\n                    <label>Bubble Size</label>\n                </div>\n                <div class=\"col s12 l4\">\n                    <div class=\"row\">\n                        <div class=\"col s6 l12\">\n                            <input formControlName=\"bubbleSizeFunction\" type=\"radio\" id=\"bubbleSizeSum\" value=\"sum\" />\n                            <label for=\"bubbleSizeSum\">Sum</label>\n                        </div>\n                        <div class=\"col s6 l12\">\n                            <input formControlName=\"bubbleSizeFunction\" type=\"radio\" id=\"bubbleSizeAvg\" value=\"avg\" />\n                            <label for=\"bubbleSizeAvg\">Avg.</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"col s12 l8\">\n        <div class=\"bubble-chart container\">\n            <ngx-charts-bubble-chart #bubbleChart \n                [view]=\"[chartWidth, chartHeight]\"\n                [results]=\"jobs\"\n                [autoScale]=\"true\"\n                [showXAxisLabel]=\"showXAxisLabel\"\n                [showYAxisLabel]=\"showYAxisLabel\"\n                [xAxisLabel]=\"xAxisLabel\"\n                [yAxisLabel]=\"yAxisLabel\"\n                [minRadius]=\"5\"\n                [maxRadius]=\"30\"\n                [scheme]=\"colorScheme\"\n                [legend]=\"true\">\n                <ng-template #tooltipTemplate let-model=\"model\">\n                    <div class=\"tooltip\">\n                        <p class=\"title\">\n                            {{ model.name }}\n                        </p>\n                        <p class=\"value\">\n                            {{ getTooltipValue(model.radius) }}\n                        </p>\n                        <p class=\"label\">\n                            {{ getAxisName(chartForm.controls['bubbleSize'].value) }}\n                        </p>\n                    </div>\n                </ng-template>\n            </ngx-charts-bubble-chart>\n            <div class=\"container\">\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row slider-row\">\n    <div class=\"col s10 m12\">\n        <div class=\"container\">\n            <nouislider #sliderRef [config]=\"sliderConfig\" [(ngModel)]=\"range\" (ngModelChange)=\"onSliderChanges($event)\"></nouislider>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/jobs/chart/chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bubble-chart.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.tooltip p {\n  line-height: 1em;\n  margin: 0.3em 0; }\n\n.tooltip .title {\n  font-size: 1.5em; }\n\n.tooltip .value {\n  font-size: 2em;\n  font-weight: bold; }\n\n.tooltip .label {\n  font-size: 0.8em;\n  color: darkgray; }\n\n.row.slider-row {\n  margin-top: 10vh;\n  cursor: pointer; }\n  .row.slider-row .noUi-handle {\n    cursor: pointer; }\n\n.noUi-handle {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jobs/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LocaleDateTimeFormatter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_nouislider_src_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_nouislider_src_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_nouislider_src_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobs_options__ = __webpack_require__("../../../../../src/app/jobs/jobs-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobs_service__ = __webpack_require__("../../../../../src/app/jobs/jobs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LocaleDateTimeFormatter = (function () {
    function LocaleDateTimeFormatter() {
    }
    LocaleDateTimeFormatter.prototype.to = function (value) {
        var date = new Date(value);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString().replace(' ', '');
    };
    ;
    LocaleDateTimeFormatter.prototype.from = function (value) {
        return 0;
    };
    ;
    return LocaleDateTimeFormatter;
}());

var ChartComponent = (function () {
    function ChartComponent(jobsService, formBuilder, ref) {
        this.jobsService = jobsService;
        this.formBuilder = formBuilder;
        this.ref = ref;
        this.jobs = [];
        this.chartWidth = 800;
        this.chartHeight = 450;
        this.valignWrapper = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Memory usage [MB]';
        this.yAxisLabel = 'Nodes [pc.]';
        this.colorScheme = {
            domain: [
                '#3FB8AF', '#EA3546', '#084C61', '#F9C80E', '#F87337',
                '#2E8680', '#D53140', '#063847', '#FCE691', '#FBBFA4',
                '#A7DEDA', '#F3909A', '#4B7C8C', '#FAD74F', '#F9996D'
            ]
        };
        this.distinctFields = ['xAxis', 'yAxis', 'bubbleSize'];
        this.disabled = false;
        this.sliderConfig = {
            formatter: __WEBPACK_IMPORTED_MODULE_0_ng2_nouislider_src_nouislider__["DefaultFormatter"],
            connect: true,
            range: {
                'min': [0],
                'max': [1]
            },
            start: [],
            step: 1,
            tooltips: [new LocaleDateTimeFormatter(), new LocaleDateTimeFormatter()]
        };
        this.range = [0, 1];
        this.chartOptions = new __WEBPACK_IMPORTED_MODULE_1__jobs_options__["a" /* JobOptions */]();
        this.createForm();
    }
    ChartComponent.prototype.createForm = function () {
        var _this = this;
        var initialValues = {
            period: this.chartOptions.periodOptions[0].value,
            property: this.chartOptions.propertyOptions[0].value,
            xAxis: this.chartOptions.axisOptions[0].value,
            xAxisFunction: 'sum',
            yAxis: this.chartOptions.axisOptions[1].value,
            yAxisFunction: 'avg',
            bubbleSize: this.chartOptions.axisOptions[2].value,
            bubbleSizeFunction: 'avg'
        };
        this.chartForm = this.formBuilder.group(initialValues);
        this.settings = this.chartForm.getRawValue();
        this.chartForm.valueChanges
            .subscribe(function (data) { return _this.onChartChanges(data); });
        this.chartForm.controls['period'].valueChanges.subscribe(function (data) { return _this.onPeriodChanges(data); });
    };
    ChartComponent.prototype.onChartChanges = function (data) {
        this.patchDistinctFields(data);
        this.updateJobs();
        // update settings so that it can be compared after next change
        this.settings = this.chartForm.getRawValue();
    };
    ChartComponent.prototype.patchDistinctFields = function (data) {
        var _this = this;
        var changes = Object.keys(data).filter(function (key) { return data[key] !== _this.settings[key]; });
        changes.map(function (change) {
            // if one of distinct fields changed
            if (_this.distinctFields.includes(change)) {
                // if one or more distinct fields have the same value push them to colliders array
                var colliders = [];
                _this.distinctFields.reduce(function (acc, key) {
                    if (key !== change && data[key] === data[change]) {
                        acc.push(key);
                    }
                    return acc;
                }, colliders);
                // swap values with colliding fields
                colliders.map(function (collider) { return data[collider] = _this.settings[change]; });
            }
            ;
        });
        this.chartForm.patchValue(data, { emitEvent: false });
    };
    ChartComponent.prototype.onPeriodChanges = function (data) {
        this.updatePeriodSettings();
    };
    ChartComponent.prototype.onResize = function (event) {
        this.resizeChart();
    };
    ChartComponent.prototype.resizeChart = function () {
        if (window.innerWidth > 992) {
            this.chartWidth = 0.5 * window.innerWidth;
            this.chartHeight = 0.6 * window.innerHeight;
            this.valignWrapper = true;
        }
        else {
            this.chartWidth = 0.9 * window.innerWidth;
            this.chartHeight = 0.7 * window.innerHeight;
            this.valignWrapper = false;
        }
    };
    ChartComponent.prototype.updatePeriodSettings = function () {
        var _this = this;
        this.jobsService.getPeriodSettings(this.chartForm.getRawValue())
            .then(function (periodSettings) {
            var oldMinTimestamp = _this.sliderConfig['range']['min'][0];
            var oldMaxTimestamp = _this.sliderConfig['range']['max'][0];
            var oldPeriod = (oldMaxTimestamp - oldMinTimestamp);
            var oldStartFraction = (_this.range[0] - oldMinTimestamp) / oldPeriod;
            var oldEndFraction = (_this.range[1] - oldMinTimestamp) / oldPeriod;
            var resolution = periodSettings['resolution'] * 1000;
            var minTimestamp = new Date(periodSettings['min']).getTime();
            var maxTimestamp = new Date(periodSettings['max']).getTime() + resolution;
            _this.sliderConfig['range']['min'] = [minTimestamp];
            _this.sliderConfig['range']['max'] = [maxTimestamp];
            _this.sliderConfig['step'] = resolution;
            var period = maxTimestamp - minTimestamp;
            _this.range = [
                Math.round((Math.round(minTimestamp + oldStartFraction * period) / resolution)) * resolution,
                Math.round((Math.round(minTimestamp + oldEndFraction * period) / resolution)) * resolution
            ];
            _this.sliderConfig['start'] = _this.range;
            _this.sliderRef.slider.updateOptions(_this.sliderConfig);
        });
    };
    ChartComponent.prototype.ngOnInit = function () {
        this.resizeChart();
    };
    ChartComponent.prototype.ngAfterContentInit = function () {
        this.updatePeriodSettings();
        this.updateJobs();
        this.ref.markForCheck();
    };
    ChartComponent.prototype.onSliderChanges = function (event) {
        this.updateJobs();
    };
    ChartComponent.prototype.updateJobs = function () {
        var _this = this;
        this.jobsService.getJobs(this.chartForm.getRawValue(), this.range).then(function (jobs) {
            _this.xAxisLabel = _this.getAxisName(_this.chartForm.controls['xAxis'].value);
            _this.yAxisLabel = _this.getAxisName(_this.chartForm.controls['yAxis'].value);
            _this.jobs = jobs;
        });
    };
    ChartComponent.prototype.getAxisName = function (value) {
        return this.chartOptions.axisOptions.filter(function (option) { return option['value'] === value; })[0]['name'];
    };
    ChartComponent.prototype.getTooltipValue = function (value) {
        var axis = this.chartForm.controls['bubbleSize'].value;
        var hourAndMinutesFormatter = function (val) {
            var h = (val / 60).toFixed(0);
            var m = (val % 60).toFixed(0);
            return h + 'h ' + m + 'm';
        };
        var formatters = {
            nodes: function (val) { return val; },
            jobs: function (val) { return val; },
            memory: function (val) { return val.toFixed(1); },
            power: function (val) { return val.toFixed(2); },
            runtime: hourAndMinutesFormatter,
            queue_time: hourAndMinutesFormatter
        };
        return formatters[axis](value);
    };
    return ChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('sliderRef'),
    __metadata("design:type", Object)
], ChartComponent.prototype, "sliderRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChartComponent.prototype, "onResize", null);
ChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__("../../../../../src/app/jobs/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/jobs/chart/chart.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__jobs_service__["a" /* JobsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jobs_service__["a" /* JobsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], ChartComponent);

var _d, _a, _b, _c;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/jobs/jobs-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOptions; });
var JobOptions = (function () {
    function JobOptions() {
        this.periodOptions = [
            { value: 'last_day', name: 'Last Day' },
            { value: 'last_7_days', name: 'Last 7 Days' },
            { value: 'last_30_days', name: 'Last 30 Days' }
        ];
        this.propertyOptions = [
            { value: 'project_name', name: 'Project' },
            { value: 'research_area', name: 'Research Area' },
            { value: 'institution', name: 'Institution' },
            { value: 'application_name', name: 'Application Name' },
            { value: 'language', name: 'Language' },
            { value: 'model', name: 'Model' },
            { value: 'licence', name: 'Licence' }
        ];
        this.axisOptions = [
            { value: 'jobs', name: 'Jobs', disabled: true },
            { value: 'nodes', name: 'Nodes' },
            { value: 'memory', name: 'Memory [GB]' },
            { value: 'power', name: 'Power [W]' },
            { value: 'runtime', name: 'Runtime [h]' },
            { value: 'queue_time', name: 'Queue time [h]' }
        ];
    }
    return JobOptions;
}());

;
//# sourceMappingURL=jobs-options.js.map

/***/ }),

/***/ "../../../../../src/app/jobs/jobs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts_release__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts_release___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts_release__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobs_service__ = __webpack_require__("../../../../../src/app/jobs/jobs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chart_chart_component__ = __webpack_require__("../../../../../src/app/jobs/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var JobsModule = (function () {
    function JobsModule() {
    }
    return JobsModule;
}());
JobsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts_release__["BubbleChartModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["a" /* MaterializeModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__chart_chart_component__["a" /* ChartComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__chart_chart_component__["a" /* ChartComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__jobs_service__["a" /* JobsService */]
        ]
    })
], JobsModule);

//# sourceMappingURL=jobs.module.js.map

/***/ }),

/***/ "../../../../../src/app/jobs/jobs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobsService = (function () {
    function JobsService(http) {
        this.http = http;
        this.axisMapping = {
            x: 'xAxis',
            y: 'yAxis',
            r: 'bubbleSize'
        };
    }
    JobsService.prototype.getRawData = function (settings) {
        return this.http.get('assets/' + settings['period'] + '_dummy_data.json').toPromise();
    };
    JobsService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    JobsService.prototype.getJobs = function (settings, range) {
        var _this = this;
        return this.getRawData(settings)
            .then(function (response) { return response.json().jobs.map(function (job) {
            job['timestamp'] = new Date(job['timestamp']).getTime();
            job['values']['jobs'] = 1;
            return job;
        }); })
            .then(function (jobs) { return jobs
            .filter(function (job) { return job['timestamp'] >= range[0] && job['timestamp'] <= range[1]; }); })
            .then(function (jobs) { return jobs
            .reduce(function (acc, job) {
            var key = job['properties'][settings['property']];
            acc[key] = acc[key] || { name: key, series: [] };
            acc[key]['series'].push(job);
            return acc;
        }, []); })
            .then(function (groups) { return Object.keys(groups)
            .map(function (key) { return groups[key]; }); })
            .then(function (groups) { return groups
            .map(function (group) {
            group['series'] = [group['series']
                    .reduce(function (acc, job) {
                    var values = job['values'];
                    acc['x'] += values[settings['xAxis']];
                    acc['y'] += values[settings['yAxis']];
                    acc['r'] += values[settings['bubbleSize']];
                    acc['number_of_jobs']++;
                    return acc;
                }, { 'x': 0, 'y': 0, 'r': 0, 'name': group['name'], number_of_jobs: 0 })];
            return group;
        }); })
            .then(function (groups) { return groups
            .map(function (group) {
            var series = {};
            Object.keys(group['series'][0])
                .map(function (axis) {
                var func = settings[_this.axisMapping[axis] + 'Function'];
                if (func === 'avg') {
                    series[axis] = group['series'][0][axis] / group['series'][0]['number_of_jobs'];
                }
                else {
                    series[axis] = group['series'][0][axis];
                }
            });
            group['series'][0] = series;
            return group;
        }); })
            .catch(this.handleError);
    };
    JobsService.prototype.getPeriodSettings = function (settings) {
        return this.getRawData(settings)
            .then(function (response) {
            var object = response.json();
            var periodSettings = object.jobs.reduce(function (acc, job) {
                acc['min'] = (acc['min'] === undefined || job['timestamp'] < acc['min']) ? job['timestamp'] : acc['min'];
                acc['max'] = (acc['max'] === undefined || job['timestamp'] > acc['max']) ? job['timestamp'] : acc['max'];
                return acc;
            }, {});
            periodSettings['resolution'] = object.resolution_in_minutes * 60;
            return periodSettings;
        })
            .catch(this.handleError);
    };
    return JobsService;
}());
JobsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], JobsService);

var _a;
//# sourceMappingURL=jobs.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map