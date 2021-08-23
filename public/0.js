(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ChatComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/ChatComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
$(function () {
  var localVideo = document.getElementById('localVideo');
  var remoteVideo = document.getElementById('remoteVideo'); //var answerButton = document.getElementById('answerCallButton');
  //answerButton.onclick = answerCall;
  //$('input[type=file]').on('change', prepareUpload);
});
var files;
var conversationID;
var leftUID;
var rightUID;
var startTime;
var localStream;
var pc;
var offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 1
};
var isCaller = false;
var peerConnectionDidCreate = false;
var candidateDidReceived = false;

function trace(arg) {
  var now = (window.performance.now() / 1000).toFixed(3);
  console.log(now + ': ', arg);
} //import Modals from './modals/Modals';


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'conversation'],
  components: {//Modals,
  },
  data: function data() {
    return {
      loading: false,
      loadingMessage: "",
      messages: [],
      newMessage: "",
      typing: false,
      typingUser: null,
      videoCalling: false,
      errors: {
        message: ""
      }
    };
  },
  computed: {
    noChatSelected: function noChatSelected() {
      return this.conversation == null; //return Object.keys(this.authUser).length === 0 ||  Object.keys(this.otherUser).length === 0; //check empty obj
      //return this.authUser.length == 0 || this.otherUser.length == 0; //check empty arr
    },
    emptyMessage: function emptyMessage() {
      return this.newMessage == "";
    }
  },
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.$parent.$on('chat_selected', _this2.getMessages);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    check: function check(id) {
      return id === this.user.id;
    },
    getMessages: function getMessages() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this, conversation_id, url, chat_body;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = _this3;
                _this3.loading = true;
                _this3.loadingMessage = "fetching messages...";
                conversation_id = _this3.conversation.id;
                url = "/messages/".concat(conversation_id);
                chat_body = _this3.$el.querySelector("#chatbody");
                axios.get(url).then(function (response) {
                  _this3.messages = response.data.messages;
                  _this3.loading = false;
                  _this3.loadingMessage = "";
                  setTimeout(function () {
                    chat_body.scrollTop = chat_body.scrollHeight;
                  }, 200);
                });
                Echo["private"]('chat').listen('MessageSent', function (e) {
                  console.log(e);

                  _this3.messages.push({
                    id: e.message.id,
                    user_id: e.message.user_id,
                    user: e.message.user,
                    body: e.message.body,
                    created_at: e.message.created_at
                  });

                  setTimeout(function () {
                    chat_body.scrollTop = chat_body.scrollHeight;
                  }, 200);
                }).listenForWhisper('typing', function (e) {
                  _this3.typingUser = e.typingUser;
                  _this3.typing = e.typing; // remove is typing indicator after 0.9s

                  setTimeout(function () {
                    _this.typing = false;
                  }, 900);
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    isTyping: function isTyping() {
      var channel = Echo["private"]('chat');
      var self = this;
      setTimeout(function () {
        channel.whisper('typing', {
          typingUser: self.user.name,
          typing: true
        });
      }, 300);
    },
    notTyping: function notTyping() {
      this.typing = false;
    },
    sendMessage: function sendMessage() {
      var _this4 = this;

      if (this.conversation == null) {
        return;
      }

      if (this.newMessage == "") {
        return;
      }

      var conversation_id = this.conversation.id;
      var message = this.newMessage;
      var url = "/send-message/".concat(conversation_id);
      axios.post(url, {
        conversation_id: conversation_id,
        message: message
      }).then(function (response) {
        _this4.messages.push(response.data.message);

        _this4.newMessage = "";

        var chat_body = _this4.$el.querySelector("#chatbody");

        setTimeout(function () {
          chat_body.scrollTop = chat_body.scrollHeight;
        }, 200);
      })["catch"](function (error) {
        error.response.data.error.message ? _this4.errors.message = error.response.data.error.message : null;
      });
    },
    requestVideoCall: function requestVideoCall() {
      if (this.conversation.length === 0) {
        return;
      }

      this.videoCalling = true;
      Cookies.set('uuid', this.user.id);
      Cookies.set('conversationID', this.conversation.id);
      Cookies.set('remoteUUID', this.conversation.person.id);
      window.remoteUUID = this.conversation.person.id;
      leftUID = Cookies.get('uuid');
      rightUID = Cookies.get('remoteUUID');
      isCaller = true;
      start();
    }
  }
});

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            trace('Requesting local stream');
            _context3.next = 3;
            return getUserMedia();

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _start.apply(this, arguments);
}

function getUserMedia() {
  return _getUserMedia.apply(this, arguments);
}

function _getUserMedia() {
  _getUserMedia = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            navigator.mediaDevices.getUserMedia({
              audio: true,
              video: {
                width: {
                  min: 1280
                },
                height: {
                  min: 720
                }
              }
            }).then(gotStream)["catch"](function (e) {
              alert('getUserMedia() error: ' + e.name);
            });

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getUserMedia.apply(this, arguments);
}

function gotStream(stream) {
  trace('Received local stream');
  localVideo.srcObject = stream;
  localStream = stream;
  call();
}

function call() {
  conversationID = Cookies.get('conversationID');
  trace('Starting call');
  startTime = window.performance.now();
  var videoTracks = localStream.getVideoTracks();
  var audioTracks = localStream.getAudioTracks();

  if (videoTracks.length > 0) {
    trace('Using video device: ' + videoTracks[0].label);
  }

  if (audioTracks.length > 0) {
    trace('Using audio device: ' + audioTracks[0].label);
  }

  var configuration = {
    "iceServers": [{
      "urls": "stun:stun.ideasip.com"
    }]
  };
  pc = new RTCPeerConnection(configuration);
  trace('Created local peer connection object pc');

  pc.onicecandidate = function (e) {
    onIceCandidate(pc, e);
  };

  pc.oniceconnectionstatechange = function (e) {
    onIceStateChange(pc, e);
  };

  pc.onaddstream = gotRemoteStream; //return alert('this far')

  pc.addStream(localStream);
  trace('Added local stream to pc');
  peerConnectionDidCreate = true;

  if (isCaller) {
    trace('createOffer start');
    trace('pc createOffer start');
    pc.createOffer(offerOptions).then(onCreateOfferSuccess, onCreateSessionDescriptionError);
  } else {
    onAnswer();
  }
}

function onAnswer() {
  var remoteOffer = Cookies.getJSON('offer');
  pc.setRemoteDescription(remoteOffer).then(function () {
    onSetRemoteSuccess(pc);
  }, onSetSessionDescriptionError);
  pc.createAnswer().then(onCreateAnswerSuccess, onCreateSessionDescriptionError);
}

function onCreateAnswerSuccess(desc) {
  trace('Answer from pc:\n' + desc.sdp);
  trace('pc setLocalDescription start');
  pc.setLocalDescription(desc).then(function () {
    onSetLocalSuccess(pc);
  }, onSetSessionDescriptionError);
  conversationID = Cookies.get('conversationID');
  var message = {
    from: leftUID,
    to: rightUID,
    type: 'signal',
    subtype: 'answer',
    content: desc,
    time: new Date()
  }; //axios.post('/trigger/' + conversationID , message );
}

function onCreateSessionDescriptionError(error) {
  trace('Failed to create session description: ' + error.toString());
}

function onIceCandidate(pc, event) {
  if (event.candidate) {
    trace(pc + ' ICE candidate: \n' + (event.candidate ? event.candidate.candidate : '(null)'));
    conversationID = Cookies.get('conversationID');
    var message = {
      from: leftUID,
      to: rightUID,
      type: 'signal',
      subtype: 'candidate',
      content: event.candidate,
      time: new Date()
    }; //axios.post('/trigger/' + conversationID , message );
  }
}

function onAddIceCandidateSuccess(pc) {
  trace(pc + ' addIceCandidate success');
}

function onAddIceCandidateError(pc, error) {
  trace(pc + ' failed to add ICE Candidate: ' + error.toString());
}

function onIceStateChange(pc, event) {
  if (pc) {
    trace(pc + ' ICE state: ' + pc.iceConnectionState);
    console.log('ICE state change event: ', event);
  }
}

function onCreateOfferSuccess(desc) {
  trace('Offer from pc\n' + desc.sdp);
  trace('pc setLocalDescription start');
  pc.setLocalDescription(desc).then(function () {
    onSetLocalSuccess(pc);
  }, onSetSessionDescriptionError);
  conversationID = Cookies.get('conversationID');
  var message = {
    from: leftUID,
    to: rightUID,
    type: 'signal',
    subtype: 'offer',
    content: desc,
    time: new Date()
  }; //axios.post('/trigger/' + conversationID , message );
}

function onSetLocalSuccess(pc) {
  trace(pc + ' setLocalDescription complete');
}

function onSetSessionDescriptionError(error) {
  trace('Failed to set session description: ' + error.toString());
}

function gotRemoteStream(e) {
  if (remoteVideo.srcObject !== e.stream) {
    remoteVideo.srcObject = e.stream;
    trace('pc received remote stream');
  }
}

function onSetRemoteSuccess(pc) {
  trace(pc + ' setRemoteDescription complete');
  applyRemoteCandidates();
}

function applyRemoteCandidates() {
  var candidates = Cookies.getJSON('candidate');

  for (var candidate in candidates) {
    addRemoteCandidate(candidates[candidate]);
  }

  Cookies.remove('candidate');
}

function addRemoteCandidate(candidate) {
  pc.addIceCandidate(candidate).then(function () {
    onAddIceCandidateSuccess(pc);
  }, function (err) {
    onAddIceCandidateError(pc, err);
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatComponent */ "./resources/js/components/dashboard/ChatComponent.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'conversations'],
  components: {
    ChatComponent: _ChatComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      openChat: null
    };
  },
  methods: {
    select: function select(conversation) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.openChat == conversation)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                conversation.has_unread = 0;
                _context.next = 5;
                return _this.set(conversation).then(function () {
                  if (_this.openChat != null) {
                    _this.$emit('chat_selected');
                  }
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    set: function set(conversation) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.openChat = conversation;

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"text\"][data-v-9d524aa2]:disabled, button[data-v-9d524aa2]:disabled {\r\n    cursor: not-allowed! important;\n}\n.videoRID[data-v-9d524aa2] {\r\n    width: 100%;\n}\n.video[data-v-9d524aa2] {\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    pointer-events: auto;\n}\n.videoUID[data-v-9d524aa2] {\r\n    position: relative;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    padding: 0 !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ChatComponent.vue?vue&type=template&id=9d524aa2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/ChatComponent.vue?vue&type=template&id=9d524aa2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "chat" }, [
    _c("div", { staticClass: "chat-header" }, [
      !_vm.noChatSelected
        ? _c("div", { staticClass: "chat-header-user" }, [
            _c("figure", { staticClass: "avatar" }, [
              _c("img", {
                staticClass: "rounded-circle",
                attrs: {
                  src: _vm.conversation.person.photo_url,
                  alt: _vm.conversation.person.name
                }
              })
            ]),
            _vm._v(" "),
            _c("div", [
              _c("h5", [_vm._v(_vm._s(_vm.conversation.person.name))]),
              _vm._v(" "),
              _c("small", { staticClass: "text-success" }, [
                _vm.typingUser != null
                  ? _c(
                      "i",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.typing,
                            expression: "typing"
                          }
                        ]
                      },
                      [_vm._v(" " + _vm._s(_vm.typingUser) + " is typing...")]
                    )
                  : _vm._e()
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "chat-header-action" }, [
        _c("ul", { staticClass: "list-inline" }, [
          _c("li", { staticClass: "list-inline-item d-xl-none d-inline" }, [
            _c(
              "button",
              { staticClass: "btn btn-outline-light mobile-navigation-button" },
              [
                _c(
                  "svg",
                  {
                    staticClass: "feather feather-menu",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  },
                  [
                    _c("line", {
                      attrs: { x1: "3", y1: "12", x2: "21", y2: "12" }
                    }),
                    _c("line", {
                      attrs: { x1: "3", y1: "6", x2: "21", y2: "6" }
                    }),
                    _c("line", {
                      attrs: { x1: "3", y1: "18", x2: "21", y2: "18" }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "list-inline-item",
              attrs: {
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Voice call"
              }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-light text-success",
                  attrs: {
                    disabled: _vm.noChatSelected,
                    "data-toggle": "modal",
                    "data-target": "#call"
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "feather feather-phone",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        }
                      })
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "list-inline-item",
              attrs: {
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Video call"
              }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-light text-warning",
                  attrs: {
                    disabled: _vm.noChatSelected,
                    "data-toggle": "modal",
                    "data-target": "#videoCall"
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "feather feather-video",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    },
                    [
                      _c("polygon", {
                        attrs: { points: "23 7 16 12 23 17 23 7" }
                      }),
                      _c("rect", {
                        attrs: {
                          x: "1",
                          y: "5",
                          width: "15",
                          height: "14",
                          rx: "2",
                          ry: "2"
                        }
                      })
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("li", { staticClass: "list-inline-item" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-outline-light",
                attrs: {
                  disabled: _vm.noChatSelected,
                  "data-toggle": "dropdown",
                  "aria-expanded": "false"
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "feather feather-more-horizontal",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  },
                  [
                    _c("circle", { attrs: { cx: "12", cy: "12", r: "1" } }),
                    _c("circle", { attrs: { cx: "19", cy: "12", r: "1" } }),
                    _c("circle", { attrs: { cx: "5", cy: "12", r: "1" } })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("button", {
            on: {
              click: function($event) {
                return _vm.requestVideoCall()
              }
            }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.videoCalling
      ? _c(
          "div",
          {
            staticClass: "container video",
            staticStyle: {
              background: "rgba(21, 20, 20, 0.61)",
              overflow: "auto"
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-12 col-md-12 mb-4" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-lg-12 text-center",
                    staticStyle: {
                      right: "0",
                      "margin-bottom": "20px",
                      "margin-top": "20px"
                    }
                  },
                  [
                    _c("div", { staticClass: "action-button" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-floating btn-lg",
                          attrs: { type: "button", "data-dismiss": "modal" }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "feather feather-x",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }
                            },
                            [
                              _c("line", {
                                attrs: { x1: "18", y1: "6", x2: "6", y2: "18" }
                              }),
                              _vm._v(" "),
                              _c("line", {
                                attrs: { x1: "6", y1: "6", x2: "18", y2: "18" }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      : _c(
          "div",
          {
            staticClass: "chatbody",
            class: { "no-message": _vm.noChatSelected },
            staticStyle: {
              overflow: "auto",
              outline: "currentcolor none medium"
            },
            attrs: { id: "chatbody", tabindex: "1" }
          },
          [
            _vm.noChatSelected
              ? _c("div", { staticClass: "no-message-container" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("p", { staticClass: "lead" }, [
                    _vm._v("Select a chat to read messages")
                  ])
                ])
              : _vm.loading
              ? _c(
                  "div",
                  {
                    staticClass: "col-md-12",
                    staticStyle: {
                      "text-align": "center",
                      "margin-top": "70px"
                    }
                  },
                  [
                    _c("span", {
                      staticClass: "spinner-border spinner-border-lg",
                      attrs: { role: "status", "aria-hidden": "true" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "text-align": "center",
                          "white-space": "nowrap",
                          "font-size": "16px",
                          "font-weight": "100"
                        }
                      },
                      [_vm._v(_vm._s(_vm.loadingMessage))]
                    )
                  ]
                )
              : _c(
                  "div",
                  { staticClass: "messages" },
                  [
                    _vm._l(_vm.messages, function(message) {
                      return _vm.messages.length > 0
                        ? _c(
                            "div",
                            {
                              key: message.id,
                              staticClass: "message-item",
                              class: {
                                "outgoing-message":
                                  message.user_id === _vm.user.id
                              }
                            },
                            [
                              _c("div", { staticClass: "message-avatar" }, [
                                _c("figure", { staticClass: "avatar" }, [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: message.user.photo_url,
                                      alt: message.user.name
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c("h5", [_vm._v(_vm._s(message.user.name))]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "time" },
                                    [
                                      _c("timeago", {
                                        attrs: {
                                          datetime: message.created_at,
                                          "auto-update": 60
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "message-content" }, [
                                _vm._v(
                                  "\r\n                    " +
                                    _vm._s(message.body) +
                                    "\r\n                "
                                )
                              ])
                            ]
                          )
                        : _vm._e()
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-10" })
                  ],
                  2
                )
          ]
        ),
    _vm._v(" "),
    _c("div", { staticClass: "chat-footer" }, [
      _c("form", [
        _c("div", [
          _c(
            "button",
            {
              staticClass: "btn btn-light mr-3",
              attrs: {
                disabled: _vm.noChatSelected,
                "data-toggle": "tooltip",
                title: "",
                type: "button",
                "data-original-title": "Emoji"
              }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "feather feather-smile",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                },
                [
                  _c("circle", { attrs: { cx: "12", cy: "12", r: "10" } }),
                  _c("path", { attrs: { d: "M8 14s1.5 2 4 2 4-2 4-2" } }),
                  _c("line", {
                    attrs: { x1: "9", y1: "9", x2: "9.01", y2: "9" }
                  }),
                  _c("line", {
                    attrs: { x1: "15", y1: "9", x2: "15.01", y2: "9" }
                  })
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newMessage,
              expression: "newMessage"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            disabled: _vm.noChatSelected,
            placeholder: "Type your message..."
          },
          domProps: { value: _vm.newMessage },
          on: {
            keydown: _vm.isTyping,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newMessage = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "field-error" }, [
          _vm._v(_vm._s(String(_vm.errors.message)))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-buttons" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-light",
              attrs: {
                disabled: _vm.noChatSelected,
                "data-toggle": "tooltip",
                title: "",
                type: "button",
                "data-original-title": "Add files"
              }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "feather feather-paperclip",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-light d-sm-none d-block",
              attrs: {
                disabled: _vm.noChatSelected,
                "data-toggle": "tooltip",
                title: "",
                type: "button",
                "data-original-title": "Send a voice record"
              }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "feather feather-mic",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
                    }
                  }),
                  _c("path", { attrs: { d: "M19 10v2a7 7 0 0 1-14 0v-2" } }),
                  _c("line", {
                    attrs: { x1: "12", y1: "19", x2: "12", y2: "23" }
                  }),
                  _c("line", {
                    attrs: { x1: "8", y1: "23", x2: "16", y2: "23" }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: {
                type: "button",
                disabled: _vm.noChatSelected || _vm.emptyMessage
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.sendMessage($event)
                }
              }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "feather feather-send",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                },
                [
                  _c("line", {
                    attrs: { x1: "22", y1: "2", x2: "11", y2: "13" }
                  }),
                  _c("polygon", {
                    attrs: { points: "22 2 15 22 11 13 2 9 22 2" }
                  })
                ]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "dropdown-menu dropdown-menu-right",
        staticStyle: {
          position: "absolute",
          "will-change": "transform",
          top: "0px",
          left: "0px",
          transform: "translate3d(968px, 53px, 0px)"
        },
        attrs: { "x-placement": "bottom-end" }
      },
      [
        _c(
          "a",
          {
            staticClass: "dropdown-item active",
            attrs: {
              href: "#",
              "data-navigation-target": "contact-information"
            }
          },
          [_vm._v("Profile")]
        ),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Add to archive")
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("Delete")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-divider" }),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
          [_vm._v("Block")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-lg-12 text-right",
        staticStyle: {
          right: "0",
          "margin-bottom": "20px",
          "margin-top": "20px"
        }
      },
      [
        _c("video", {
          staticClass: "img-responsive",
          attrs: { width: "100", autoplay: "", id: "localVideo" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card", attrs: { tabindex: "-1" } }, [
      _c("div", { staticClass: "card-body mb-0 p-0" }, [
        _c(
          "div",
          {
            staticClass:
              "embed-responsive embed-responsive-16by9 z-depth-1-half"
          },
          [
            _c("video", {
              staticClass: "img-responsive",
              attrs: { width: "100", autoplay: "", id: "remoteVideo" }
            })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mb-5" }, [
      _c(
        "div",
        {
          staticClass:
            "col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-6 offset-3"
        },
        [
          _c("img", {
            staticClass: "img-fluid",
            attrs: {
              src: "/images/dashboard/undraw_empty_xct9.svg",
              alt: "image"
            }
          })
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "layout" }, [
    _c("nav", { staticClass: "navigation" }, [
      _c("div", { staticClass: "nav-group" }, [
        _c("ul", [
          _c("li", { staticClass: "logo" }, [
            _c("a", { attrs: { href: "#" } }, [
              _c(
                "svg",
                {
                  staticStyle: { "enable-background": "new 0 0 612 612" },
                  attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    width: "612px",
                    height: "612px",
                    viewBox: "0 0 612 612",
                    "xml:space": "preserve"
                  }
                },
                [
                  _c("g", [
                    _c("g", { attrs: { id: "_x32__26_" } }, [
                      _c("g", [
                        _c("path", {
                          attrs: {
                            d:
                              "M401.625,325.125h-191.25c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h191.25\r\n                                    c10.557,0,19.125-8.568,19.125-19.125S412.182,325.125,401.625,325.125z M439.875,210.375h-267.75\r\n                                    c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h267.75c10.557,0,19.125-8.568,19.125-19.125\r\n                                    S450.432,210.375,439.875,210.375z M306,0C137.012,0,0,119.875,0,267.75c0,84.514,44.848,159.751,114.75,208.826V612\r\n                                    l134.047-81.339c18.552,3.061,37.638,4.839,57.203,4.839c169.008,0,306-119.875,306-267.75C612,119.875,475.008,0,306,0z\r\n                                    M306,497.25c-22.338,0-43.911-2.601-64.643-7.019l-90.041,54.123l1.205-88.701C83.5,414.133,38.25,345.513,38.25,267.75\r\n                                    c0-126.741,119.875-229.5,267.75-229.5c147.875,0,267.75,102.759,267.75,229.5S453.875,497.25,306,497.25z"
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g"),
                  _vm._v(" "),
                  _c("g")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: {
                  "data-navigation-target": "chats",
                  href: "#",
                  "data-toggle": "tooltip",
                  title: "",
                  "data-placement": "right",
                  "data-original-title": "Chats"
                }
              },
              [
                _c("span", { staticClass: "badge badge-warning" }),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "feather feather-message-circle",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                      }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: {
                  "data-navigation-target": "friends",
                  href: "#",
                  "data-toggle": "tooltip",
                  title: "",
                  "data-placement": "right",
                  "data-original-title": "Friends"
                }
              },
              [
                _c("span", { staticClass: "badge badge-danger" }),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "feather feather-user",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  },
                  [
                    _c("path", {
                      attrs: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }
                    }),
                    _c("circle", { attrs: { cx: "12", cy: "7", r: "4" } })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: {
                  "data-navigation-target": "favorites",
                  "data-toggle": "tooltip",
                  title: "",
                  "data-placement": "right",
                  href: "#",
                  "data-original-title": "Favorites"
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "feather feather-star",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  },
                  [
                    _c("polygon", {
                      attrs: {
                        points:
                          "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "brackets" }, [
            _c(
              "a",
              {
                attrs: {
                  "data-navigation-target": "archived",
                  href: "#",
                  "data-toggle": "tooltip",
                  title: "",
                  "data-placement": "right",
                  "data-original-title": "Archived"
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "feather feather-archive",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  },
                  [
                    _c("polyline", {
                      attrs: { points: "21 8 21 21 3 21 3 8" }
                    }),
                    _c("rect", {
                      attrs: { x: "1", y: "3", width: "22", height: "5" }
                    }),
                    _c("line", {
                      attrs: { x1: "10", y1: "12", x2: "14", y2: "12" }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "dark-light-switcher",
                attrs: {
                  href: "#",
                  "data-toggle": "tooltip",
                  title: "",
                  "data-placement": "right",
                  "data-original-title": "Light mode"
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "feather feather-moon",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                      }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "content" },
      [
        _c("div", { staticClass: "sidebar-group" }, [
          _c("div", { staticClass: "sidebar active", attrs: { id: "chats" } }, [
            _c("header", [
              _c("span", [_vm._v("Chats")]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-inline" }, [
                _c(
                  "li",
                  {
                    staticClass: "list-inline-item",
                    attrs: {
                      "data-toggle": "tooltip",
                      title: "",
                      "data-original-title": "New group"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-outline-light",
                        attrs: {
                          href: "#",
                          "data-toggle": "modal",
                          "data-target": "#newGroup"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-users",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                              }
                            }),
                            _c("circle", {
                              attrs: { cx: "9", cy: "7", r: "4" }
                            }),
                            _c("path", {
                              attrs: { d: "M23 21v-2a4 4 0 0 0-3-3.87" }
                            }),
                            _c("path", {
                              attrs: { d: "M16 3.13a4 4 0 0 1 0 7.75" }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("li", { staticClass: "list-inline-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-outline-light",
                      attrs: {
                        "data-toggle": "tooltip",
                        title: "",
                        href: "#",
                        "data-navigation-target": "friends",
                        "data-original-title": "New chat"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "feather feather-plus-circle",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }
                        },
                        [
                          _c("circle", {
                            attrs: { cx: "12", cy: "12", r: "10" }
                          }),
                          _c("line", {
                            attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
                          }),
                          _c("line", {
                            attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
                          })
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "list-inline-item d-xl-none d-inline" },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "btn btn-outline-light text-danger sidebar-close",
                        attrs: { href: "#" }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-x",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("line", {
                              attrs: { x1: "18", y1: "6", x2: "6", y2: "18" }
                            }),
                            _c("line", {
                              attrs: { x1: "6", y1: "6", x2: "18", y2: "18" }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "sidebar-body",
                staticStyle: {
                  overflow: "hidden",
                  outline: "currentcolor none medium"
                },
                attrs: { tabindex: "2" }
              },
              [
                _c(
                  "ul",
                  { staticClass: "list-group list-group-flush" },
                  _vm._l(_vm.conversations, function(conversation) {
                    return _c(
                      "li",
                      {
                        key: conversation.person.id,
                        staticClass: "list-group-item",
                        class: { "open-chat": _vm.openChat == conversation },
                        on: {
                          click: function($event) {
                            return _vm.select(conversation)
                          }
                        }
                      },
                      [
                        _c(
                          "figure",
                          { staticClass: "avatar avatar-state-success" },
                          [
                            _c("img", {
                              staticClass: "rounded-circle",
                              attrs: {
                                src: conversation.person.photo_url,
                                alt: conversation.person.name
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-body" }, [
                          _c("div", [
                            _c(
                              "h5",
                              {
                                class: {
                                  "text-primary": conversation.has_unread > 0
                                }
                              },
                              [_vm._v(_vm._s(conversation.person.name))]
                            ),
                            _vm._v(" "),
                            conversation.last_message[0] != null
                              ? _c("p", [
                                  _vm._v(
                                    _vm._s(
                                      conversation.last_message[0].body.substring(
                                        0,
                                        50
                                      )
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "users-list-action" }, [
                            conversation.has_unread > 0
                              ? _c(
                                  "div",
                                  { staticClass: "new-message-count" },
                                  [_vm._v(_vm._s(conversation.has_unread))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            conversation.last_message[0] != null
                              ? _c(
                                  "small",
                                  {
                                    class: {
                                      "text-primary":
                                        conversation.has_unread > 0
                                    }
                                  },
                                  [
                                    _c("timeago", {
                                      attrs: {
                                        datetime:
                                          conversation.last_message[0]
                                            .created_at,
                                        "auto-update": 60
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e()
                          ])
                        ])
                      ]
                    )
                  }),
                  0
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "sidebar", attrs: { id: "friends" } }, [
            _c("header", [
              _c("span", [_vm._v("Friends")]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-inline" }, [
                _c(
                  "li",
                  {
                    staticClass: "list-inline-item",
                    attrs: {
                      "data-toggle": "tooltip",
                      title: "",
                      "data-original-title": "Add friends"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-outline-light",
                        attrs: {
                          href: "#",
                          "data-toggle": "modal",
                          "data-target": "#addFriends"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-user-plus",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                              }
                            }),
                            _c("circle", {
                              attrs: { cx: "8.5", cy: "7", r: "4" }
                            }),
                            _c("line", {
                              attrs: { x1: "20", y1: "8", x2: "20", y2: "14" }
                            }),
                            _c("line", {
                              attrs: { x1: "23", y1: "11", x2: "17", y2: "11" }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "list-inline-item d-xl-none d-inline" },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "btn btn-outline-light text-danger sidebar-close",
                        attrs: { href: "#" }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-x",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("line", {
                              attrs: { x1: "18", y1: "6", x2: "6", y2: "18" }
                            }),
                            _c("line", {
                              attrs: { x1: "6", y1: "6", x2: "18", y2: "18" }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "sidebar-body",
                staticStyle: {
                  overflow: "hidden",
                  outline: "currentcolor none medium"
                },
                attrs: { tabindex: "3" }
              },
              [
                _c("ul", { staticClass: "list-group list-group-flush" }, [
                  _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      attrs: { "data-navigation-target": "chats" }
                    },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(5)
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      attrs: { "data-navigation-target": "chats" }
                    },
                    [
                      _vm._m(6),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(7),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(8)
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      attrs: { "data-navigation-target": "chats" }
                    },
                    [
                      _vm._m(9),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(10),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(11)
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      attrs: { "data-navigation-target": "chats" }
                    },
                    [
                      _vm._m(12),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(13),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(14)
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      attrs: { "data-navigation-target": "chats" }
                    },
                    [
                      _vm._m(15),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(16),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(17)
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      attrs: { "data-navigation-target": "chats" }
                    },
                    [
                      _vm._m(18),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(19),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(20)
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      attrs: { "data-navigation-target": "chats" }
                    },
                    [
                      _vm._m(21),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(22),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(23)
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      attrs: { "data-navigation-target": "chats" }
                    },
                    [
                      _vm._m(24),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(25),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(26)
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      attrs: { "data-navigation-target": "chats" }
                    },
                    [
                      _vm._m(27),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(28),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(29)
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "list-group-item",
                      attrs: { "data-navigation-target": "chats" }
                    },
                    [
                      _vm._m(30),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(31),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(32)
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "sidebar", attrs: { id: "favorites" } }, [
            _c("header", [
              _c("span", [_vm._v("Favorites")]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-inline" }, [
                _c(
                  "li",
                  { staticClass: "list-inline-item d-xl-none d-inline" },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "btn btn-outline-light text-danger sidebar-close",
                        attrs: { href: "#" }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-x",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("line", {
                              attrs: { x1: "18", y1: "6", x2: "6", y2: "18" }
                            }),
                            _c("line", {
                              attrs: { x1: "6", y1: "6", x2: "18", y2: "18" }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(33),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "sidebar-body",
                staticStyle: {
                  overflow: "hidden",
                  outline: "currentcolor none medium"
                },
                attrs: { tabindex: "4" }
              },
              [
                _c(
                  "ul",
                  { staticClass: "list-group list-group-flush users-list" },
                  [
                    _c("li", { staticClass: "list-group-item" }, [
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(34),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(35)
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "list-group-item" }, [
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(36),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(37)
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "list-group-item" }, [
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(38),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(39)
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "list-group-item" }, [
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(40),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(41)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "sidebar", attrs: { id: "archived" } }, [
            _c("header", [
              _c("span", [_vm._v("Archived")]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-inline" }, [
                _c(
                  "li",
                  { staticClass: "list-inline-item d-xl-none d-inline" },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "btn btn-outline-light text-danger sidebar-close",
                        attrs: { href: "#" }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-x",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("line", {
                              attrs: { x1: "18", y1: "6", x2: "6", y2: "18" }
                            }),
                            _c("line", {
                              attrs: { x1: "6", y1: "6", x2: "18", y2: "18" }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(42),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "sidebar-body",
                staticStyle: {
                  overflow: "hidden",
                  outline: "currentcolor none medium"
                },
                attrs: { tabindex: "5" }
              },
              [
                _c(
                  "ul",
                  { staticClass: "list-group list-group-flush users-list" },
                  [
                    _c("li", { staticClass: "list-group-item" }, [
                      _vm._m(43),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(44),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(45)
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "list-group-item" }, [
                      _vm._m(46),
                      _vm._v(" "),
                      _c("div", { staticClass: "users-list-body" }, [
                        _vm._m(47),
                        _vm._v(" "),
                        _c("div", { staticClass: "users-list-action" }, [
                          _c("div", { staticClass: "action-toggle" }, [
                            _c("div", { staticClass: "dropdown" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    "data-toggle": "dropdown",
                                    href: "#"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "feather feather-more-horizontal",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "12", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "19", cy: "12", r: "1" }
                                      }),
                                      _c("circle", {
                                        attrs: { cx: "5", cy: "12", r: "1" }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(48)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("chat-component", {
          attrs: { user: _vm.user, conversation: _vm.openChat }
        }),
        _vm._v(" "),
        _vm.openChat != null
          ? _c("div", { staticClass: "sidebar-group mobile-open" }, [
              _c(
                "div",
                {
                  staticClass: "sidebar active",
                  attrs: { id: "contact-information" }
                },
                [
                  _c("header", [
                    _c("span", [_vm._v("Profile")]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "list-inline" }, [
                      _c("li", { staticClass: "list-inline-item" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "btn btn-outline-light text-danger sidebar-close",
                            attrs: { href: "#" }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-x",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("line", {
                                  attrs: {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "sidebar-body", attrs: { tabindex: "6" } },
                    [
                      _c("div", { staticClass: "pl-4 pr-4" }, [
                        _c("div", { staticClass: "text-center" }, [
                          _c(
                            "figure",
                            { staticClass: "avatar avatar-xl mb-4" },
                            [
                              _c("img", {
                                staticClass: "rounded-circle",
                                attrs: {
                                  src: _vm.openChat.person.photo_url,
                                  alt: _vm.openChat.person.name
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("h5", { staticClass: "mb-1" }, [
                            _vm._v(_vm._s(_vm.openChat.person.name))
                          ]),
                          _vm._v(" "),
                          _c(
                            "small",
                            { staticClass: "text-muted font-italic" },
                            [_vm._v("Last seen: Today")]
                          ),
                          _vm._v(" "),
                          _vm._m(49)
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-content",
                            attrs: { id: "myTabContent" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "tab-pane fade show active",
                                attrs: {
                                  id: "home",
                                  role: "tabpanel",
                                  "aria-labelledby": "home-tab"
                                }
                              },
                              [
                                _c("p", { staticClass: "text-muted" }, [
                                  _vm._v(_vm._s(_vm.openChat.person.about))
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-4 mb-4" }, [
                                  _c("h6", [_vm._v("Gender")]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(_vm._s(_vm.openChat.person.gender))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-4 mb-4" }, [
                                  _c("h6", [_vm._v("Interested In")]),
                                  _vm._v(" "),
                                  _vm.openChat.person.interest ==
                                  "male_interest"
                                    ? _c("p", { staticClass: "text-muted" }, [
                                        _vm._v("Men")
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.openChat.person.interest ==
                                  "female_interest"
                                    ? _c("p", { staticClass: "text-muted" }, [
                                        _vm._v("Women")
                                      ])
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _vm._m(50),
                                _vm._v(" "),
                                _vm._m(51),
                                _vm._v(" "),
                                _vm._m(52)
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "tab-pane fade",
                                attrs: {
                                  id: "profile",
                                  role: "tabpanel",
                                  "aria-labelledby": "profile-tab"
                                }
                              },
                              [
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "mb-3 d-flex align-items-center justify-content-between"
                                  },
                                  [
                                    _c("span", [_vm._v("Recent Files")]),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass: "btn btn-link small",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            staticClass:
                                              "feather feather-upload mr-2",
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              width: "24",
                                              height: "24",
                                              viewBox: "0 0 24 24",
                                              fill: "none",
                                              stroke: "currentColor",
                                              "stroke-width": "2",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round"
                                            }
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d:
                                                  "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                              }
                                            }),
                                            _c("polyline", {
                                              attrs: { points: "17 8 12 3 7 8" }
                                            }),
                                            _c("line", {
                                              attrs: {
                                                x1: "12",
                                                y1: "3",
                                                x2: "12",
                                                y2: "15"
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(
                                          " Upload\r\n                                    "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(53)
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ]
              )
            ])
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        attrs: {
          "data-toggle": "tooltip",
          title: "",
          "data-placement": "right",
          "data-original-title": "User menu"
        }
      },
      [
        _c(
          "a",
          { attrs: { href: "./login.html", "data-toggle": "dropdown" } },
          [_c("figure", { staticClass: "avatar" })]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-menu" }, [
          _c(
            "a",
            {
              staticClass: "dropdown-item",
              attrs: {
                href: "#",
                "data-toggle": "modal",
                "data-target": "#editProfileModal"
              }
            },
            [_vm._v("Edit\r\n                            profile")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item active",
              attrs: {
                href: "#",
                "data-navigation-target": "contact-information"
              }
            },
            [_vm._v("Profile")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item",
              attrs: {
                href: "#",
                "data-toggle": "modal",
                "data-target": "#settingModal"
              }
            },
            [_vm._v("Settings")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item text-danger",
              attrs: { href: "login.html" }
            },
            [_vm._v("Logout")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Search chats" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Search friends" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("figure", { staticClass: "avatar" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Harrietta Souten")]),
      _vm._v(" "),
      _c("p", [_vm._v("Dental Hygienist")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("New chat")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "dropdown-item active",
          attrs: { href: "#", "data-navigation-target": "contact-information" }
        },
        [_vm._v("Profile")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Block")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("figure", { staticClass: "avatar avatar-state-warning" }, [
        _c("span", { staticClass: "avatar-title bg-success rounded-circle" }, [
          _vm._v("A")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Aline McShee")]),
      _vm._v(" "),
      _c("p", [_vm._v("Marketing Assistant")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("New chat")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "dropdown-item active",
          attrs: { href: "#", "data-navigation-target": "contact-information" }
        },
        [_vm._v("Profile")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Block")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("figure", { staticClass: "avatar avatar-state-success" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Brietta Blogg")]),
      _vm._v(" "),
      _c("p", [_vm._v("Actuary")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("New chat")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "dropdown-item active",
          attrs: { href: "#", "data-navigation-target": "contact-information" }
        },
        [_vm._v("Profile")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Block")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("figure", { staticClass: "avatar avatar-state-success" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Karl Hubane")]),
      _vm._v(" "),
      _c("p", [_vm._v("Chemical Engineer")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("New chat")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "dropdown-item active",
          attrs: { href: "#", "data-navigation-target": "contact-information" }
        },
        [_vm._v("Profile")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Block")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("figure", { staticClass: "avatar" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Jillana Tows")]),
      _vm._v(" "),
      _c("p", [_vm._v("Project Manager")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("New chat")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "dropdown-item active",
          attrs: { href: "#", "data-navigation-target": "contact-information" }
        },
        [_vm._v("Profile")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Block")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("figure", { staticClass: "avatar avatar-state-success" }, [
        _c("span", { staticClass: "avatar-title bg-info rounded-circle" }, [
          _vm._v("AD")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Alina Derington")]),
      _vm._v(" "),
      _c("p", [_vm._v("Nurse")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("New chat")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "dropdown-item active",
          attrs: { href: "#", "data-navigation-target": "contact-information" }
        },
        [_vm._v("Profile")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Block")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("figure", { staticClass: "avatar avatar-state-secondary" }, [
        _c("span", { staticClass: "avatar-title bg-warning rounded-circle" }, [
          _vm._v("S")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Stevy Kermeen")]),
      _vm._v(" "),
      _c("p", [_vm._v("Associate Professor")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("New chat")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "dropdown-item active",
          attrs: { href: "#", "data-navigation-target": "contact-information" }
        },
        [_vm._v("Profile")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Block")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("figure", { staticClass: "avatar" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Stevy Kermeen")]),
      _vm._v(" "),
      _c("p", [_vm._v("Senior Quality Engineer")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("New chat")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "dropdown-item active",
          attrs: { href: "#", "data-navigation-target": "contact-information" }
        },
        [_vm._v("Profile")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Block")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("figure", { staticClass: "avatar" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Gloriane Shimmans")]),
      _vm._v(" "),
      _c("p", [_vm._v("Web Designer")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("New chat")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "dropdown-item active",
          attrs: { href: "#", "data-navigation-target": "contact-information" }
        },
        [_vm._v("Profile")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Block")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("figure", { staticClass: "avatar avatar-state-warning" }, [
        _c(
          "span",
          { staticClass: "avatar-title bg-secondary rounded-circle" },
          [_vm._v("B")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Bernhard Perrett")]),
      _vm._v(" "),
      _c("p", [_vm._v("Software Engineer")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("New chat")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "dropdown-item active",
          attrs: { href: "#", "data-navigation-target": "contact-information" }
        },
        [_vm._v("Profile")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Block")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Search favorites" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Jennica Kindred")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("I know how important this file is to you. You can trust me ;)")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Open")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Remove favorites")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Marvin Rohan")]),
      _vm._v(" "),
      _c("p", [_vm._v("Lorem ipsum dolor sitsdc sdcsdc sdcsdcs")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Open")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Remove favorites")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Frans Hanscombe")]),
      _vm._v(" "),
      _c("p", [_vm._v("Lorem ipsum dolor sitsdc sdcsdc sdcsdcs")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Open")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Remove favorites")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Karl Hubane")]),
      _vm._v(" "),
      _c("p", [_vm._v("Lorem ipsum dolor sitsdc sdcsdc sdcsdcs")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Open")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Remove favorites")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Search archived" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("figure", { staticClass: "avatar" }, [
      _c("span", { staticClass: "avatar-title bg-danger rounded-circle" }, [
        _vm._v("M")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Mercedes Pllu")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("I know how important this file is to you. You can trust me ;)")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Open")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Restore")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Delete")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("figure", { staticClass: "avatar" }, [
      _c("span", { staticClass: "avatar-title bg-secondary rounded-circle" }, [
        _vm._v("R")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", [_vm._v("Rochelle Golley")]),
      _vm._v(" "),
      _c("p", [_vm._v("Lorem ipsum dolor sitsdc sdcsdc sdcsdcs")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Open")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Restore")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown-divider" }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
        [_vm._v("Delete")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      {
        staticClass: "nav nav-tabs justify-content-center mt-5",
        attrs: { id: "myTab", role: "tablist" }
      },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "home-tab",
                "data-toggle": "tab",
                href: "#home",
                role: "tab",
                "aria-controls": "home",
                "aria-selected": "true"
              }
            },
            [_vm._v("About")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "profile-tab",
                "data-toggle": "tab",
                href: "#profile",
                role: "tab",
                "aria-controls": "profile",
                "aria-selected": "false"
              }
            },
            [_vm._v("Media")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-4 mb-4" }, [
      _c("h6", [_vm._v("City")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted" }, [_vm._v("Germany / Berlin")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-4 mb-4" }, [
      _c("h6", { staticClass: "mb-3" }, [_vm._v("Social media accounts")]),
      _vm._v(" "),
      _c("ul", { staticClass: "list-inline social-links" }, [
        _c("li", { staticClass: "list-inline-item" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm btn-floating btn-facebook",
              attrs: {
                href: "#",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Facebook"
              }
            },
            [_c("i", { staticClass: "fa fa-facebook" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm btn-floating btn-twitter",
              attrs: {
                href: "#",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Twitter"
              }
            },
            [_c("i", { staticClass: "fa fa-twitter" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm btn-floating btn-dribbble",
              attrs: {
                href: "#",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Dribbble"
              }
            },
            [_c("i", { staticClass: "fa fa-dribbble" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm btn-floating btn-whatsapp",
              attrs: {
                href: "#",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Whatsapp"
              }
            },
            [_c("i", { staticClass: "fa fa-whatsapp" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm btn-floating btn-linkedin",
              attrs: {
                href: "#",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Linkedin"
              }
            },
            [_c("i", { staticClass: "fa fa-linkedin" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm btn-floating btn-google",
              attrs: {
                href: "#",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Google"
              }
            },
            [_c("i", { staticClass: "fa fa-google" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm btn-floating btn-behance",
              attrs: {
                href: "#",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Behance"
              }
            },
            [_c("i", { staticClass: "fa fa-behance" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-inline-item" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm btn-floating btn-instagram",
              attrs: {
                href: "#",
                "data-toggle": "tooltip",
                title: "",
                "data-original-title": "Instagram"
              }
            },
            [_c("i", { staticClass: "fa fa-instagram" })]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-4 mb-4" }, [
      _c("h6", { staticClass: "mb-3" }, [_vm._v("Settings")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "form-item custom-control custom-switch" }, [
          _c("input", {
            staticClass: "custom-control-input",
            attrs: { type: "checkbox", id: "customSwitch11" }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customSwitch11" }
            },
            [_vm._v("Block")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "form-item custom-control custom-switch" }, [
          _c("input", {
            staticClass: "custom-control-input",
            attrs: { type: "checkbox", checked: "", id: "customSwitch12" }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customSwitch12" }
            },
            [_vm._v("Mute")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "form-item custom-control custom-switch" }, [
          _c("input", {
            staticClass: "custom-control-input",
            attrs: { type: "checkbox", id: "customSwitch13" }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customSwitch13" }
            },
            [
              _vm._v(
                "Get\r\n                                                notification"
              )
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("ul", { staticClass: "list-group list-group-flush" }, [
        _c(
          "li",
          {
            staticClass: "list-group-item pl-0 pr-0 d-flex align-items-center"
          },
          [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-file-pdf-o text-danger mr-2" }),
              _vm._v(
                " report4221.pdf\r\n                                            "
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "list-group-item pl-0 pr-0 d-flex align-items-center"
          },
          [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-image text-muted mr-2" }),
              _vm._v(
                " avatar_image.png\r\n                                            "
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "list-group-item pl-0 pr-0 d-flex align-items-center"
          },
          [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-file-excel-o text-success mr-2" }),
              _vm._v(
                "\r\n                                                excel_report_file2020.xlsx\r\n                                            "
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "list-group-item pl-0 pr-0 d-flex align-items-center"
          },
          [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-file-text-o text-warning mr-2" }),
              _vm._v(
                " articles342133.txt\r\n                                            "
              )
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/ChatComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/dashboard/ChatComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatComponent_vue_vue_type_template_id_9d524aa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatComponent.vue?vue&type=template&id=9d524aa2&scoped=true& */ "./resources/js/components/dashboard/ChatComponent.vue?vue&type=template&id=9d524aa2&scoped=true&");
/* harmony import */ var _ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/ChatComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatComponent_vue_vue_type_style_index_0_id_9d524aa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css& */ "./resources/js/components/dashboard/ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatComponent_vue_vue_type_template_id_9d524aa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatComponent_vue_vue_type_template_id_9d524aa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9d524aa2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/ChatComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/ChatComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/dashboard/ChatComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ChatComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_style_index_0_id_9d524aa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ChatComponent.vue?vue&type=style&index=0&id=9d524aa2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_style_index_0_id_9d524aa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_style_index_0_id_9d524aa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_style_index_0_id_9d524aa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_style_index_0_id_9d524aa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_style_index_0_id_9d524aa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/dashboard/ChatComponent.vue?vue&type=template&id=9d524aa2&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/ChatComponent.vue?vue&type=template&id=9d524aa2&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_9d524aa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatComponent.vue?vue&type=template&id=9d524aa2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ChatComponent.vue?vue&type=template&id=9d524aa2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_9d524aa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_9d524aa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/Dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/dashboard/Dashboard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_376ddb84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=376ddb84& */ "./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_376ddb84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_376ddb84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_376ddb84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=376ddb84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_376ddb84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_376ddb84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);