function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"header\">\r\n        <img src=\"assets/imges/bg.jpg\" id=\"overlay\" alt=\"\">\r\n        <div class=\"textBx\">\r\n            <h1>\r\n                Todo Lists\r\n            </h1>\r\n            <h4>\r\n                {{showDate}}\r\n            </h4>\r\n        </div>\r\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n            <ion-fab-button color=\"light\" (click)=\"addNewItemAlert()\">\r\n                <ion-icon name=\"add\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab>\r\n    </div>\r\n\r\n    <!-- my todo lists -->\r\n    <ion-list>\r\n        <ion-card *ngFor=\"let item of items; index as i\">\r\n            <ion-card-header>\r\n                <ion-card-title>\r\n                    <span>\r\n                        {{ item.itemName }}\r\n                    </span>\r\n                    <ion-icon name=\"trash-outline\" (click)=\"deleteItem(i)\"></ion-icon>\r\n                </ion-card-title>\r\n                <ion-card-subtitle>\r\n                    <ion-icon name=\"calendar-outline\"></ion-icon>\r\n                    {{ item.noteTime }}\r\n                </ion-card-subtitle>\r\n            </ion-card-header>\r\n        </ion-card>\r\n\r\n    </ion-list>\r\n\r\n    <!-- my todo lists -->\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  /*header ends */\n}\nion-content .header {\n  width: 100%;\n  height: 250px;\n  position: relative;\n}\nion-content .header img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n}\nion-content .header .textBx {\n  position: absolute;\n  bottom: 0;\n  padding-left: 20px;\n  color: white;\n}\nion-content .header .textBx h1 {\n  font-weight: 400;\n  font-size: 40px;\n}\nion-content .header .textBx h4 {\n  font-size: 20px;\n  margin-top: -5px;\n  font-weight: 100;\n  padding-bottom: 10px;\n}\nion-content .header ion-fab {\n  margin-bottom: 18px;\n  margin-right: 20px;\n}\nion-content ion-list ion-card ion-card-header ion-card-title {\n  display: flex;\n  align-items: top;\n  justify-content: space-between;\n}\nion-content ion-list ion-card ion-card-header ion-card-title span {\n  width: 90%;\n}\nion-content ion-list ion-card ion-card-header ion-card-title ion-icon {\n  width: 10%;\n  text-align: right;\n}\nion-content ion-list ion-card ion-card-header ion-card-subtitle {\n  display: flex;\n  align-items: center;\n}\nion-content ion-list ion-card ion-card-header ion-card-subtitle ion-icon {\n  margin-right: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcaW9uaWNcXHRvZG9cXGFwcGxpY2F0aW9uL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtFQWdDQSxlQUFBO0FDOUJKO0FEREk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDR1I7QURGUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDSVo7QURGUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0laO0FESFk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNLaEI7QURIWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNLaEI7QURGUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNJWjtBREdnQjtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDRHBCO0FERW9CO0VBQ0ksVUFBQTtBQ0F4QjtBREVvQjtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ0F4QjtBREdnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0RwQjtBREVvQjtFQUNJLGlCQUFBO0FDQXhCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHRCeCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1mYWIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLypoZWFkZXIgZW5kcyAqL1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAvKmhlYWRlciBlbmRzICovXG59XG5pb24tY29udGVudCAuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIgLnRleHRCeCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIgLnRleHRCeCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIgLnRleHRCeCBoNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuaGVhZGVyIGlvbi1mYWIge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogdG9wO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUgc3BhbiB7XG4gIHdpZHRoOiA5MCU7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUgaW9uLWljb24ge1xuICB3aWR0aDogMTAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtc3VidGl0bGUgaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/date.service */
    "./src/app/services/date.service.ts");
    /* harmony import */


    var _services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(dateService, todoService, alertService, toastService, alertController) {
        _classCallCheck(this, HomePage);

        this.dateService = dateService;
        this.todoService = todoService;
        this.alertService = alertService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.showDate = '';
        this.items = [];
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // getting date
          this.showDate = this.dateService.getDate(); // getting all todo items

          this.todoService.todoItems$.subscribe(function (res) {
            _this.items = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(index) {
          var _this2 = this;

          var itemIndex = index;
          this.alertService.presentAlertConfirm().then(function (res) {
            if (res.role == 'Delete') {
              _this2.todoService.deleteItemConfirm(itemIndex);

              _this2.toastService.presentToast('SUCCESS! Todo item deleted.');
            }
          });
        }
      }, {
        key: "addNewItemAlert",
        value: function addNewItemAlert() {
          var _this3 = this;

          var formData;
          this.alertService.presentAlertPrompt().then(function (res) {
            if (res) {
              _this3.todoService.addNewItem(res);

              _this3.toastService.presentToast('SUCCESS! New todo item added.');
            }
          });
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]
      }, {
        type: _services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(alertController) {
        _classCallCheck(this, AlertService);

        this.alertController = alertController;
      }

      _createClass(AlertService, [{
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var choice, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Delete this item?',
                      message: '<strong>You won\'t be able to revert this!</strong>',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Delete',
                        role: 'Delete',
                        handler: function handler() {// console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                    _context.next = 7;
                    return alert.onDidDismiss().then(function (data) {
                      choice = data;
                    });

                  case 7:
                    return _context.abrupt("return", choice);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlertPrompt",
        value: function presentAlertPrompt() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var formData, alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Add new todo item',
                      inputs: [{
                        name: 'itemName',
                        type: 'text',
                        placeholder: 'Item name'
                      }, {
                        name: 'noteTime',
                        type: 'date',
                        min: '2017-03-01',
                        max: '2018-01-12'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {// console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler(alertData) {// console.log('Confirm Ok');
                          // console.log(alertData.name1);
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                    _context2.next = 7;
                    return alert.onDidDismiss().then(function (data) {
                      if (data === null || data === void 0 ? void 0 : data.data) {
                        if (data.data.values.itemName != '' && data.data.values.noteTime) {
                          formData = data.data.values;
                        }
                      } // console

                    });

                  case 7:
                    return _context2.abrupt("return", formData);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/services/date.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/date.service.ts ***!
    \******************************************/

  /*! exports provided: DateService */

  /***/
  function srcAppServicesDateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateService", function () {
      return DateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DateService = /*#__PURE__*/function () {
      function DateService() {
        _classCallCheck(this, DateService);
      }

      _createClass(DateService, [{
        key: "getDate",
        value: function getDate() {
          var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          };
          var prnDt = new Date().toLocaleTimeString('en-us', options).split(',');
          return prnDt[0] + ', ' + prnDt[1] + ', ' + prnDt[2];
        }
      }]);

      return DateService;
    }();

    DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DateService);
    /***/
  },

  /***/
  "./src/app/services/toast.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/toast.service.ts ***!
    \*******************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ToastService = /*#__PURE__*/function () {
      function ToastService(toastController) {
        _classCallCheck(this, ToastService);

        this.toastController = toastController;
      }

      _createClass(ToastService, [{
        key: "presentToast",
        value: function presentToast(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ToastService;
    }();

    ToastService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ToastService);
    /***/
  },

  /***/
  "./src/app/services/todo.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/todo.service.ts ***!
    \******************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppServicesTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TodoService = /*#__PURE__*/function () {
      function TodoService() {
        _classCallCheck(this, TodoService);

        this.todoItemsArray = [{
          _id: 1,
          itemName: 'Must learn Ionic within 15th August',
          noteTime: '2 Aug, 2020',
          status: true
        }, {
          _id: 2,
          itemName: 'Develop a todo app using ionic, Angular & rest api',
          noteTime: '14 Aug, 2019',
          status: true
        }, {
          _id: 3,
          itemName: 'Hult prize recuiting developer in September. Study for it',
          noteTime: '25 July, 2017',
          status: true
        }, {
          _id: 4,
          itemName: 'Take medicine for keeping good health',
          noteTime: '9 May, 2020',
          status: true
        }, {
          _id: 5,
          itemName: 'Learn advanced wordpress with in August month',
          noteTime: '14 Aug, 2019',
          status: true
        }];
        this.todoItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.todoItems$.next(this.todoItemsArray);
      }

      _createClass(TodoService, [{
        key: "deleteItemConfirm",
        value: function deleteItemConfirm(itemIndex) {
          this.todoItemsArray.splice(itemIndex, 1);
          this.todoItems$.next(this.todoItemsArray);
        }
      }, {
        key: "addNewItem",
        value: function addNewItem(item) {
          item._id = this.todoItemsArray.length + 1;
          item.status = true;
          var stringDate = new Date(item.noteTime).toString().split(' ');
          item.noteTime = stringDate[2] + ' ' + stringDate[1] + ', ' + stringDate[3];
          this.todoItemsArray.unshift(item);
          this.todoItems$.next(this.todoItemsArray);
        }
      }]);

      return TodoService;
    }();

    TodoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TodoService);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map