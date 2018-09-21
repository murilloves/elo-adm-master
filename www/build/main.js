webpackJsonp([1],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeakerService = /** @class */ (function () {
    function SpeakerService(http, _platform) {
        this.http = http;
        this._platform = _platform;
    }
    SpeakerService.prototype.getSpeakers = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/speakers");
    };
    SpeakerService.prototype.getSpeakerById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/speakers/" + id);
    };
    SpeakerService.prototype.addSpeaker = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/speakers/", data);
    };
    SpeakerService.prototype.getSpeakersHardCode = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].dev + "/speakers.json");
    };
    SpeakerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], SpeakerService);
    return SpeakerService;
}());

//# sourceMappingURL=event-speaker.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRegisterQuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_register_questions_event_register_questions_service__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventRegisterQuestionsPage = /** @class */ (function () {
    function EventRegisterQuestionsPage(navCtrl, navParams, formBuilder, questionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.initialLoading = true;
        this.allQuestions = null;
        this.optionLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.optionStructure = {
            questionId: '',
            letter: '',
            description: '',
            correct: false
        };
        this.optionsArray = [];
        this.correctOptionNumber = 0;
        this.event = this.navParams.get('event');
        this.session = this.navParams.get('session');
        this.setClearForm();
        this.getAllQuestions();
    }
    EventRegisterQuestionsPage.prototype.setClearForm = function () {
        this.form = this.formBuilder.group({
            eventId: [this.event.eventId],
            sectionId: [this.session.id],
            speakerId: [this.session.speakerId],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            subtitle: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            description: [''],
            sequence: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
        });
        this.optionsArray = [];
        this.addOption();
    };
    EventRegisterQuestionsPage.prototype.getQuestionById = function (questionId) {
        this.questionsService.getQuestionById(questionId)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    EventRegisterQuestionsPage.prototype.getAllQuestions = function () {
        var _this = this;
        this.questionsService.getQuestions()
            .subscribe(function (response) {
            _this.initialLoading = false;
            _this.allQuestions = response;
        });
    };
    EventRegisterQuestionsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad EventRegisterQuestionsPage');
    };
    EventRegisterQuestionsPage.prototype.addOption = function () {
        var opt = {
            questionId: '',
            letter: this.optionLetters[this.optionsArray.length],
            description: '',
            correct: false
        };
        this.optionsArray.push(opt);
    };
    EventRegisterQuestionsPage.prototype.updateCorrect = function (letter) {
        this.correctOptionNumber = this.optionLetters.indexOf(letter);
        this.optionsArray.forEach(function (option) { return option.correct = false; });
        this.optionsArray[this.correctOptionNumber].correct = true;
    };
    EventRegisterQuestionsPage.prototype.removeOption = function () {
        this.optionsArray.pop();
    };
    EventRegisterQuestionsPage.prototype.save = function () {
        var _this = this;
        if (!this.bindOptionsDesc()) {
            alert('Preencha todas as alternativas');
            return;
        }
        if (!this.hasMarkedCorrectAnswer()) {
            alert('Marque a opção correta');
            return;
        }
        var data = this.form.value;
        data.options = this.optionsArray;
        // console.log(this.form.value);
        this.questionsService.addQuestion(data)
            .subscribe(function (response) {
            _this.getAllQuestions();
            _this.setClearForm();
        }, function (error) {
            // this.setClearForm();
        });
    };
    EventRegisterQuestionsPage.prototype.bindOptionsDesc = function () {
        var _this = this;
        var validDescriptions = true;
        var buffer = document.getElementsByClassName('question-option-description');
        Array.from(buffer).forEach(function (element, index) {
            _this.optionsArray[index].description = element.querySelectorAll('input')[0].value;
            if (_this.optionsArray[index].description.length < 1) {
                validDescriptions = false;
                // this.validationMessage = 'Preencha todas as alternativas';
            }
        });
        console.log(this.optionsArray);
        return validDescriptions;
    };
    EventRegisterQuestionsPage.prototype.hasMarkedCorrectAnswer = function () {
        var haveCorrectAnswer = false;
        this.optionsArray.forEach(function (element) {
            if (element.correct) {
                haveCorrectAnswer = true;
                // this.validationMessage = 'Marque a opção correta';
            }
        });
        return haveCorrectAnswer;
    };
    EventRegisterQuestionsPage.prototype.goToQuestionsSection = function (questionId) {
        this.getQuestionById(questionId);
    };
    EventRegisterQuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-register-questions',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-register-questions\event-register-questions.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item-divider color="info" text-center>\n\n      Perguntas da <strong>{{ session?.title }}</strong>\n\n  </ion-item-divider>\n\n  <div padding>\n\n    <ion-row padding *ngIf="initialLoading" text-center>\n\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n\n    </ion-row>\n\n    <ion-row padding *ngIf="!initialLoading && allQuestions === null" text-center>\n\n      <span>Nenhuma pergunta cadastrada para esta sessão.</span>\n\n    </ion-row>\n\n    <ion-grid *ngIf="!initialLoading && allQuestions && allQuestions.length > 0" class="mb-1">\n\n      <ion-row>\n\n        <ion-col>\n\n          <strong>Título</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n          <strong>Subtítulo</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n          <strong>Descrição</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr />\n\n      <ion-row class="table-striped" *ngFor="let question of allQuestions" (click)="goToQuestionsSection(question.id)">\n\n        <ion-col class="ellipsis">\n\n          {{ question.title }}\n\n        </ion-col>\n\n        <ion-col class="ellipsis">\n\n          {{ question.subtitle }}\n\n        </ion-col>\n\n        <ion-col class="ellipsis innerHTML" [innerHTML]="question.description"></ion-col>\n\n      </ion-row>\n\n      <hr />\n\n    </ion-grid>\n\n  </div>\n\n  <ion-item-divider color="info" text-center>\n\n    Cadastrar pergunta\n\n  </ion-item-divider>\n\n  <form [formGroup]="form" padding>\n\n    <ion-row class="mb-1">\n\n      <ion-col col-12 col-md-12>\n\n        <ion-label stacked>Título da pergunta</ion-label>\n\n        <div class="mh-16">\n\n          <ion-input type="text" value="{{ newQuestion?.title }}" formControlName="title"></ion-input>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-12>\n\n        <ion-label stacked>Subtítulo</ion-label>\n\n        <div class="mh-16">\n\n          <ion-input type="text" value="{{ newQuestion?.subtitle }}" formControlName="subtitle"></ion-input>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-12>\n\n        <ion-label stacked>Sequência (número da pergunta)</ion-label>\n\n        <div class="mh-16">\n\n          <ion-input type="number" value="{{ newQuestion?.sequence }}" min="1" formControlName="sequence"></ion-input>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-12>\n\n        <ion-label stacked>Descrição</ion-label>\n\n        <div class="mh-16">\n\n          <div class="pt-16" type="text" [froalaEditor] formControlName="description"></div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-12>\n\n        <ion-label stacked><strong>Opções.</strong> Para marcar a opção correta, clique sobre a letra correspondente</ion-label>\n\n        <div class="mh-16" *ngFor="let option of optionsArray">\n\n          <ion-row>\n\n            <div class="option-letter" (click)="updateCorrect(option.letter)"><span [class.correct]="option.correct">( {{ option.letter }} )</span></div>\n\n            <ion-input class="question-option-description" type="text" value="{{ option?.description }}"></ion-input>\n\n          </ion-row>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <button ion-button class="addRemoveOption" (click)="addOption()"><i class="fa fa-plus"></i></button>\n\n        <button ion-button class="addRemoveOption danger" (click)="removeOption()" [disabled]="optionsArray.length <= 1"><i class="fa fa-minus"></i></button>\n\n      </ion-col>\n\n      <ion-row padding class="w-100">\n\n        <ion-col col-12 col-md-12>\n\n          <button ion-button block (click)="save()" [disabled]="!form.valid">SALVAR QUESTÃO</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-row>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-register-questions\event-register-questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__event_register_questions_event_register_questions_service__["a" /* QuestionsService */]])
    ], EventRegisterQuestionsPage);
    return EventRegisterQuestionsPage;
}());

//# sourceMappingURL=event-register-questions.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-register-questions/event-register-questions.module": [
		513,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsService = /** @class */ (function () {
    function QuestionsService(http, _platform) {
        this.http = http;
        this._platform = _platform;
    }
    QuestionsService.prototype.getQuestions = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions");
    };
    QuestionsService.prototype.getQuestionById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions/" + id);
    };
    QuestionsService.prototype.getQuestionsBySessionId = function (sessionId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions/" + sessionId);
    };
    QuestionsService.prototype.addQuestion = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions/", data);
    };
    QuestionsService.prototype.getQuestionsHardCode = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].dev + "/questions.json");
    };
    QuestionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], QuestionsService);
    return QuestionsService;
}());

//# sourceMappingURL=event-register-questions.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\login\login.html"*/'<ion-content padding>\n\n  <ion-grid fixed>\n\n    <ion-row align-items-center justify-content-center>\n\n      <img src="/assets/imgs/logomarca.png" width="250" height="250">\n\n    </ion-row>\n\n    <ion-row align-items-center justify-content-center>\n\n      <ion-col col-12 col-sm-12 col-md-8>\n\n        <ion-card>\n\n          <ion-item-divider text-center>Autentique-se</ion-item-divider>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label stacked>E-mail</ion-label>\n\n              <ion-input type="text"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Senha</ion-label>\n\n              <ion-input type="password"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-card>\n\n        <ion-card>\n\n          <button class="btn-entrar" ion-button block (click)="login()">ENTRAR</button>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar text-center>\n\n    <p ion-text color="dark">Elo Eventos 2018 - Todos os direitos reservados</p>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_menu_event_menu__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, DB) {
        this.navCtrl = navCtrl;
        this.DB = DB;
        this.eventsCollection = DB.collection('events');
        this.events = this.eventsCollection.valueChanges();
    }
    HomePage.prototype.goToEvent = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_menu_event_menu__["a" /* EventMenuPage */], { event: event });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>Eventos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-3 *ngFor="let event of events | async" (click)="goToEvent(event)">\n\n        <ion-card>\n\n          <ion-card-header class="bold">\n\n            {{ event.name }}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            {{ event.date }}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore__["AngularFirestore"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_info_event_info__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_sponsor_event_sponsor__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_speaker_event_speaker__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_schedule_event_schedule__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_interactive_section_event_interactive_section__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_menu_service__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventMenuPage = /** @class */ (function () {
    function EventMenuPage(navCtrl, navParams, eventsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventsService = eventsService;
        this.initialLoading = true;
        this.event = this.navParams.get('event');
        this.getEvents();
    }
    EventMenuPage.prototype.getEvents = function () {
        var _this = this;
        this.eventsService.getEvents()
            .subscribe(function (response) {
            _this.allEvents = response;
            _this.initialLoading = false;
            // console.log('this.event', this.event);
            // console.log('this.allEvents', this.allEvents);
            _this.chosenEvent = _this.allEvents.filter(function (evt) {
                return !_this.event.name.indexOf(evt.name);
            });
            _this.chosenEvent = _this.chosenEvent[0];
            _this.event.eventId = _this.chosenEvent.id;
        });
    };
    EventMenuPage.prototype.info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_info_event_info__["a" /* EventInfoPage */], { event: this.event });
    };
    EventMenuPage.prototype.sponsors = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_sponsor_event_sponsor__["a" /* EventSponsorPage */], { event: this.event });
    };
    EventMenuPage.prototype.speakers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_speaker_event_speaker__["a" /* EventSpeakerPage */], { event: this.event });
    };
    EventMenuPage.prototype.schedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__event_schedule_event_schedule__["a" /* EventSchedulePage */], { event: this.event });
    };
    EventMenuPage.prototype.interactiveSection = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_interactive_section_event_interactive_section__["a" /* EventInteractiveSectionPage */], { event: this.event });
    };
    EventMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-menu',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-menu\event-menu.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card (click)="info()">\n\n          <ion-card-header class="bold">\n\n            Informações\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Informações gerais do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card (click)="sponsors()">\n\n          <ion-card-header class="bold">\n\n            Patrocinadores\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Patrocinadores do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card (click)="speakers()">\n\n          <ion-card-header class="bold">\n\n            Palestrantes\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Palestrantes do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card (click)="schedule()">\n\n          <ion-card-header class="bold">\n\n            Programação\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Programação do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card (click)="interactiveSection()">\n\n          <ion-card-header class="bold">\n\n            Sessão Interativa\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Perguntas e respostas para a Sessão Interativa\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-menu\event-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__event_menu_service__["a" /* EventsService */]])
    ], EventMenuPage);
    return EventMenuPage;
}());

//# sourceMappingURL=event-menu.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_firestore__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventInfoPage = /** @class */ (function () {
    function EventInfoPage(navCtrl, navParams, formBuilder, alertCtrl, DB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.DB = DB;
        this.event = this.navParams.get('event');
        this.form = this.formBuilder.group({
            city: [this.event.city],
            date: [this.event.date, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            description: [this.event.description],
            image: [''],
            name: [this.event.name, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            place: [this.event.place],
            state: [this.event.state]
        });
    }
    EventInfoPage.prototype.save = function () {
        var _this = this;
        this.DB.doc('events/' + this.event.UID).update({
            city: this.form.controls['city'].value,
            date: this.form.controls['date'].value,
            description: this.form.controls['description'].value,
            image: this.form.controls['image'].value,
            name: this.form.controls['name'].value,
            place: this.form.controls['place'].value,
            state: this.form.controls['state'].value
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'Tudo certo!',
                subTitle: 'As informações gerais da evento foram atualizadas com sucesso.',
                buttons: ['OK']
            });
            alert.present();
        }).catch(function () {
            var alert = _this.alertCtrl.create({
                title: 'Erro!',
                subTitle: 'Erro ao atualizar informações gerais do evento.',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    EventInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-info',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-info\event-info.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form [formGroup]="form">\n\n    <ion-grid fixed>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-card>\n\n            <ion-item-divider color="info" text-center>Informações Gerais do Evento</ion-item-divider>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-label stacked>Nome</ion-label>\n\n                <ion-input type="text" value="{{ event.name }}" formControlName="name"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label stacked>Resumo</ion-label>\n\n                <ion-input type="text" value="{{ event.description }}" formControlName="description"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label stacked>Data</ion-label>\n\n                <ion-input type="text" value="{{ event.date }}" formControlName="date"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label stacked>Estado</ion-label>\n\n                <ion-select formControlName="state">\n\n                  <ion-option value="AC">Acre</ion-option>\n\n                  <ion-option value="AL">Alagoas</ion-option>\n\n                  <ion-option value="AP">Amapá</ion-option>\n\n                  <ion-option value="AM">Amazonas</ion-option>\n\n                  <ion-option value="BA">Bahia</ion-option>\n\n                  <ion-option value="CE">Ceará</ion-option>\n\n                  <ion-option value="DF">Distrito Federal</ion-option>\n\n                  <ion-option value="ES">Espírito Santo</ion-option>\n\n                  <ion-option value="GO">Goiás</ion-option>\n\n                  <ion-option value="MA">Maranhão</ion-option>\n\n                  <ion-option value="MT">Mato Grosso</ion-option>\n\n                  <ion-option value="MS">Mato Grosso do Sul</ion-option>\n\n                  <ion-option value="MG">Minas Gerais</ion-option>\n\n                  <ion-option value="PA">Pará</ion-option>\n\n                  <ion-option value="PB">Paraíba</ion-option>\n\n                  <ion-option value="PR">Paraná</ion-option>\n\n                  <ion-option value="PE">Pernambuco</ion-option>\n\n                  <ion-option value="PI">Piauí</ion-option>\n\n                  <ion-option value="RJ">Rio de Janeiro</ion-option>\n\n                  <ion-option value="RN">Rio Grande do Norte</ion-option>\n\n                  <ion-option value="RS">Rio Grande do Sul</ion-option>\n\n                  <ion-option value="RO">Rondônia</ion-option>\n\n                  <ion-option value="RR">Roraima</ion-option>\n\n                  <ion-option value="SC">Santa Catarina</ion-option>\n\n                  <ion-option value="SP">São Paulo</ion-option>\n\n                  <ion-option value="SE">Sergipe</ion-option>\n\n                  <ion-option value="TO">Tocantins</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label stacked>Cidade</ion-label>\n\n                <ion-input type="text" value="{{ event.city }}" formControlName="city"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label stacked>Local</ion-label>\n\n                <ion-input type="text" value="{{ event.place }}" formControlName="place"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <button ion-button block (click)="save()" [disabled]="!form.valid">SALVAR INFORMAÇÕES</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-info\event-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_firestore__["AngularFirestore"]])
    ], EventInfoPage);
    return EventInfoPage;
}());

//# sourceMappingURL=event-info.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventSponsorPage = /** @class */ (function () {
    function EventSponsorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = this.navParams.get('event');
    }
    EventSponsorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-sponsor',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-sponsor\event-sponsor.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-sponsor\event-sponsor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EventSponsorPage);
    return EventSponsorPage;
}());

//# sourceMappingURL=event-sponsor.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSpeakerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_speaker_service__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventSpeakerPage = /** @class */ (function () {
    function EventSpeakerPage(camera, navCtrl, navParams, formBuilder, speakerService) {
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.speakerService = speakerService;
        this.initialLoading = true;
        this.isDesktop = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8100'));
        this.event = this.navParams.get('event');
        this.setClearFormAndImg();
    }
    EventSpeakerPage.prototype.ionViewDidLoad = function () {
        // console.log('event', this.event);
        this.froalaInit();
        this.getAllSpeakers();
    };
    EventSpeakerPage.prototype.froalaInit = function () {
        // $('div#froala-editor').froalaEditor({
        //   // Add the custom buttons in the toolbarButtons list, after the separator.
        //   toolbarButtons: ['undo', 'redo' , 'bold', 'underline', '|', 'alert', 'clear', 'insert']
        // })
    };
    EventSpeakerPage.prototype.getAllSpeakers = function () {
        var _this = this;
        this.speakerService.getSpeakers()
            .subscribe(function (speakers) {
            _this.allSpeakers = speakers;
            _this.initialLoading = false;
            // console.log(this.allSpeakers);
        });
    };
    EventSpeakerPage.prototype.getAllSpeakersHardCode = function () {
        var _this = this;
        this.speakerService.getSpeakersHardCode()
            .subscribe(function (speakers) {
            _this.allSpeakers = speakers;
            _this.initialLoading = false;
            // console.log(this.allSpeakers);
        });
    };
    EventSpeakerPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    EventSpeakerPage.prototype.uploadImageMobile = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    EventSpeakerPage.prototype.readImg = function ($event) {
        var _this = this;
        if (event.target && event.target['files'] && event.target['files'][0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.myphoto = event.target.result;
            };
            reader.readAsDataURL(event.target['files'][0]);
        }
    };
    EventSpeakerPage.prototype.setClearFormAndImg = function () {
        this.form = this.formBuilder.group({
            // eventId: [this.event.UID],
            eventId: [this.event.eventId],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            detail: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            resume: [''],
            image: [''],
        });
        this.myphoto = null;
    };
    EventSpeakerPage.prototype.uploadImageBrowser = function () {
        console.log('here ai em');
    };
    EventSpeakerPage.prototype.save = function () {
        var _this = this;
        this.form.controls.image.setValue(this.myphoto);
        // console.log('Data', this.form);
        this.speakerService.addSpeaker(this.form.value)
            .subscribe(function (response) {
            _this.getAllSpeakers();
            _this.setClearFormAndImg();
            console.log('deu certo');
        }, function (error) {
            _this.setClearFormAndImg();
            console.error('deu ruim', error);
        });
    };
    EventSpeakerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-speaker',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-speaker\event-speaker.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <!-- PALESTRANTES CADASTRADOS -->\n\n  <ion-item-divider color="info" text-center>\n\n    <strong>Palestrantes cadastrados</strong>\n\n  </ion-item-divider>\n\n  <div padding>\n\n    <ion-row padding *ngIf="initialLoading" text-center>\n\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n\n    </ion-row>\n\n    <ion-row padding *ngIf="!allSpeakers && !initialLoading" text-center>\n\n      <span>Nenhum palestrante cadastrado para este evento ainda.</span>\n\n    </ion-row>\n\n    <ion-grid *ngIf="allSpeakers && !initialLoading" class="mb-1">\n\n      <ion-row>\n\n        <ion-col>\n\n          <strong>Palestrante</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n          <strong>Tema</strong>\n\n        </ion-col>\n\n        <!-- <ion-col class="text-right">\n\n          <strong>Deletar</strong>\n\n        </ion-col> -->\n\n      </ion-row>\n\n      <hr />\n\n      <ion-row class="table-striped" *ngFor="let speaker of allSpeakers">\n\n        <ion-col class="ellipsis">\n\n          {{ speaker.name }}\n\n        </ion-col>\n\n        <ion-col class="ellipsis">\n\n          {{ speaker.detail }}\n\n        </ion-col>\n\n        <!-- <ion-col class="text-right">\n\n          <i class="fa fa-trash-o fa-lg danger"></i>\n\n        </ion-col> -->\n\n      </ion-row>\n\n      <hr />\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!-- CADASTRO -->\n\n  <ion-item-divider color="info" text-center>\n\n    <strong>Cadastrar novo palestrante</strong>\n\n  </ion-item-divider>\n\n  <form [formGroup]="form" padding>\n\n    <ion-grid fixed>\n\n      <ion-row align-items-center justify-content-center>\n\n        <!-- <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-item-divider color="info" (click)="newSpeaker()" text-center>Cadastrar Novo Palestrante</ion-item-divider>\n\n        </ion-col> -->\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Foto</ion-label>\n\n          <!-- <div *ngIf="isDesktop"> -->\n\n          <div>\n\n            <div class="m-16">\n\n              <label for=\'speakers-photo\'>Selecione uma foto...</label>\n\n            </div>\n\n            <input type="file" id="speakers-photo" name="speakers-photo" (change)="readImg($event)">\n\n          </div>\n\n          <!-- if is Cordova -->\n\n          <!-- <div *ngIf="!isDesktop" class="mh-16">\n\n            <button type="file" ion-button color="primary" (click)="uploadImageMobile()">Selecionar foto</button>\n\n          </div> -->\n\n          <div class="mt-32" *ngIf="myphoto">\n\n            <img class="speakers-photo"src="{{ myphoto }}">\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Nome</ion-label>\n\n          <div class="mh-16">\n\n            <ion-input type="text" value="{{ newSpeaker?.name }}" formControlName="name"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Tema da Palestra</ion-label>\n\n          <div class="mh-16">\n\n            <ion-input type="text" value="{{ newSpeaker?.detail }}" formControlName="detail"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Currículo</ion-label>\n\n          <!-- <ion-input type="text" value="{{ newSpeaker?.resume }}" formControlName="resume"></ion-input> -->\n\n          <div class="m-16">\n\n            <div id="froala-editor" [froalaEditor] formControlName="resume"></div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row padding>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <button ion-button block (click)="save()" [disabled]="!form.valid">SALVAR INFORMAÇÕES</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-speaker\event-speaker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__event_speaker_service__["a" /* SpeakerService */]])
    ], EventSpeakerPage);
    return EventSpeakerPage;
}());

//# sourceMappingURL=event-speaker.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventSchedulePage = /** @class */ (function () {
    function EventSchedulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = this.navParams.get('event');
    }
    EventSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-schedule',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-schedule\event-schedule.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-schedule\event-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EventSchedulePage);
    return EventSchedulePage;
}());

//# sourceMappingURL=event-schedule.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInteractiveSectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_register_questions_event_register_questions__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_speaker_event_speaker_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_interactive_section_service__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventInteractiveSectionPage = /** @class */ (function () {
    function EventInteractiveSectionPage(navCtrl, navParams, formBuilder, speakerService, interactiveSectionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.speakerService = speakerService;
        this.interactiveSectionsService = interactiveSectionsService;
        this.allSpeakers = null;
        this.allInterativeSections = null;
        this.initialLoading = true;
        this.event = this.navParams.get('event');
        this.setClearForm();
        this.getAllSpeakers();
        this.getAllInterativeSections();
    }
    EventInteractiveSectionPage.prototype.setClearForm = function () {
        this.form = this.formBuilder.group({
            eventId: [this.event.eventId],
            speakerId: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
        });
    };
    EventInteractiveSectionPage.prototype.getAllInterativeSections = function () {
        var _this = this;
        this.interactiveSectionsService.getSections()
            .subscribe(function (response) {
            _this.allInterativeSections = response;
            _this.initialLoading = false;
        });
    };
    EventInteractiveSectionPage.prototype.getAllSpeakers = function () {
        var _this = this;
        this.speakerService.getSpeakers()
            .subscribe(function (response) {
            _this.allSpeakers = response;
        });
    };
    EventInteractiveSectionPage.prototype.save = function () {
        // console.log(this.form);
        var _this = this;
        this.interactiveSectionsService.addSection(this.form.value)
            .subscribe(function (response) {
            _this.getAllInterativeSections();
            _this.setClearForm();
        }, function (error) {
            // this.setClearForm();
        });
    };
    EventInteractiveSectionPage.prototype.goToQuestionsSection = function (chosenSession) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_register_questions_event_register_questions__["a" /* EventRegisterQuestionsPage */], { event: this.event, session: chosenSession });
    };
    EventInteractiveSectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-interactive-section',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-interactive-section\event-interactive-section.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- SESSOES CADASTRADAS -->\n\n  <ion-item-divider color="info" text-center>\n\n    <strong>Sessão Interativa</strong>\n\n  </ion-item-divider>\n\n  <div padding>\n\n    <ion-row padding *ngIf="initialLoading" text-center>\n\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n\n    </ion-row>\n\n    <ion-row padding *ngIf="!initialLoading && allInterativeSections && allInterativeSections.length === 0" text-center>\n\n      <span>Nenhuma Sessão Interativa cadastrada até o momento.</span>\n\n    </ion-row>\n\n    <ion-grid *ngIf="!initialLoading && allInterativeSections && allInterativeSections.length > 0" class="mb-1">\n\n      <ion-row>\n\n        <ion-col>\n\n          <strong>Título</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n          <strong>Descrição</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr />\n\n      <div>\n\n        <ion-row class="table-striped pointer" *ngFor="let interactiveSection of allInterativeSections" (click)="goToQuestionsSection(interactiveSection)">\n\n          <ion-col class="ellipsis">\n\n            {{ interactiveSection.title }}\n\n          </ion-col>\n\n          <ion-col class="ellipsis">\n\n            {{ interactiveSection.description }}\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <hr />\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!-- CADASTRAR NOVA SESSAO -->\n\n  <ion-item-divider color="info" text-center>\n\n    <strong>Cadastrar Sessão</strong>\n\n  </ion-item-divider>\n\n  <form [formGroup]="form" padding>\n\n    <ion-grid>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Palestrante da sessão</ion-label>\n\n          <ion-item>\n\n            <ion-select formControlName="speakerId">\n\n              <ion-option *ngFor="let speaker of allSpeakers" [value]="speaker?.id">{{ speaker?.name }}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Título da sessão</ion-label>\n\n          <div class="mh-16">\n\n            <ion-input type="text" value="{{ newSession?.title }}" formControlName="title"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Descrição</ion-label>\n\n          <div class="mh-16">\n\n            <ion-input type="text" value="{{ newSession?.description }}" formControlName="description"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row padding>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <button ion-button block (click)="save()" [disabled]="!form.valid">SALVAR SESSÃO</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-interactive-section\event-interactive-section.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__event_speaker_event_speaker_service__["a" /* SpeakerService */],
            __WEBPACK_IMPORTED_MODULE_5__event_interactive_section_service__["a" /* InteractiveSectionsService */]])
    ], EventInteractiveSectionPage);
    return EventInteractiveSectionPage;
}());

//# sourceMappingURL=event-interactive-section.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractiveSectionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InteractiveSectionsService = /** @class */ (function () {
    function InteractiveSectionsService(http, _platform) {
        this.http = http;
        this._platform = _platform;
    }
    InteractiveSectionsService.prototype.getSections = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/sections");
    };
    InteractiveSectionsService.prototype.getSectionById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/sections/" + id);
    };
    InteractiveSectionsService.prototype.addSection = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/sections/", data);
    };
    InteractiveSectionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], InteractiveSectionsService);
    return InteractiveSectionsService;
}());

//# sourceMappingURL=event-interactive-section.service.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsService = /** @class */ (function () {
    function EventsService(http, _platform) {
        this.http = http;
        this._platform = _platform;
    }
    EventsService.prototype.getEvents = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/events");
    };
    EventsService.prototype.getEventById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/events/" + id);
    };
    EventsService.prototype.addEvent = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/events/", data);
    };
    EventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], EventsService);
    return EventsService;
}());

//# sourceMappingURL=event-menu.service.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(436);

window["$"] = __WEBPACK_IMPORTED_MODULE_0_jquery__;
window["jQuery"] = __WEBPACK_IMPORTED_MODULE_0_jquery__;


Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment_environment__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_event_menu_event_menu__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_event_info_event_info__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_event_interactive_section_event_interactive_section__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_event_schedule_event_schedule__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_event_speaker_event_speaker__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_event_sponsor_event_sponsor__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_event_register_questions_event_register_questions__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_event_menu_event_menu_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_event_speaker_event_speaker_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_event_register_questions_event_register_questions_service__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_event_interactive_section_event_interactive_section_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_froala_wysiwyg__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// Import Froala Editor // and // Import Angular2 plugin.


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_event_menu_event_menu__["a" /* EventMenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_event_info_event_info__["a" /* EventInfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_event_interactive_section_event_interactive_section__["a" /* EventInteractiveSectionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_event_register_questions_event_register_questions__["a" /* EventRegisterQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_event_schedule_event_schedule__["a" /* EventSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_event_speaker_event_speaker__["a" /* EventSpeakerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_event_sponsor_event_sponsor__["a" /* EventSponsorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/event-register-questions/event-register-questions.module#EventRegisterQuestionsPageModule', name: 'EventRegisterQuestionsPage', segment: 'event-register-questions', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environment_environment__["b" /* Environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_27_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_27_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_event_menu_event_menu__["a" /* EventMenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_event_info_event_info__["a" /* EventInfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_event_interactive_section_event_interactive_section__["a" /* EventInteractiveSectionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_event_register_questions_event_register_questions__["a" /* EventRegisterQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_event_schedule_event_schedule__["a" /* EventSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_event_speaker_event_speaker__["a" /* EventSpeakerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_event_sponsor_event_sponsor__["a" /* EventSponsorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__pages_event_menu_event_menu_service__["a" /* EventsService */],
                __WEBPACK_IMPORTED_MODULE_25__pages_event_interactive_section_event_interactive_section_service__["a" /* InteractiveSectionsService */],
                __WEBPACK_IMPORTED_MODULE_24__pages_event_register_questions_event_register_questions_service__["a" /* QuestionsService */],
                __WEBPACK_IMPORTED_MODULE_23__pages_event_speaker_event_speaker_service__["a" /* SpeakerService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Environment; });
// https://elo-api.azurewebsites.net/swagger
// https://elo-api.azurewebsites.net/v1/questions
var API = {
    dev: "http://localhost:8100/assets/json",
    baseDev: "/elo-api",
    prod: "https://elo-api.azurewebsites.net/v1",
    base: "https://elo-api.azurewebsites.net/v1",
    proxyUrl: "https://elo-api.azurewebsites.net/v1",
};
var Environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAYdhtGQER6QoNs6txa-UwAy1l526S7V5I",
        authDomain: "elo-eventos.firebaseapp.com",
        databaseURL: "https://elo-eventos.firebaseio.com",
        projectId: "elo-eventos",
        storageBucket: "elo-eventos.appspot.com",
        messagingSenderId: "36831031378"
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map