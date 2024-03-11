"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Chat_VoiceMessage_jsx",{

/***/ "./src/components/Chat/VoiceMessage.jsx":
/*!**********************************************!*\
  !*** ./src/components/Chat/VoiceMessage.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wavesurfer.js */ \"./node_modules/wavesurfer.js/dist/wavesurfer.esm.js\");\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n/* harmony import */ var _common_MessageStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/MessageStatus */ \"./src/components/common/MessageStatus.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst VoiceMessage = (param)=>{\n    let { message  } = param;\n    _s();\n    const [{ userInfo , currentUser , socket  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [audioMessage, setAudioMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [currentPlaybackTime, setCurrentPlaybackTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [totalDuration, settotalDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const waveFormRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const waveform = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (audioMessage) {\n            const updatePlaybackTime = ()=>{\n                setCurrentPlaybackTime(audioMessage.currentTime);\n            };\n            audioMessage.addEventListener(\"timeupdate\", updatePlaybackTime);\n            return ()=>{\n                audioMessage.removeEventListener(\"timeupdate\", updatePlaybackTime);\n            };\n        }\n    }, [\n        audioMessage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (waveform.current === null) {\n            waveform.current = wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n                container: waveFormRef.current,\n                waveColor: \"#ccc\",\n                progressColor: \"#4a9eff\",\n                cursorColor: \"#7ae3c3\",\n                barWidth: 2,\n                height: 30,\n                responsive: true\n            });\n            // setWaveForm(wavesurfer);\n            waveform.current.on(\"finish\", ()=>{\n                setIsPlaying(false);\n            });\n        }\n        return ()=>{\n            waveform.current.destroy();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const audioUrl = \"http://localhost:8080/\".concat(message.message);\n        const audio = new Audio(audioUrl);\n        console.log(audio.src);\n        setAudioMessage(audio.src);\n        waveform.current.load(audioUrl);\n        waveform.current.on(\"ready\", ()=>{\n            settotalDuration(waveform.current.getDuration());\n        });\n    }, [\n        message.message\n    ]);\n    const formatTime = (time)=>{\n        if (isNaN(time)) return \"00:00\";\n        const minutes = Math.floor(time / 60);\n        const seconds = Math.floor(time % 60);\n        return \"\".concat(minutes.toString().padStart(2, \"0\"), \":\").concat(seconds.toString().padStart(2, \"0\"));\n    };\n    const handlePlayAudio = ()=>{\n        if (audioMessage) {\n            waveform.current.stop();\n            waveform.current.play();\n            audioMessage.play();\n            setIsPlaying(true);\n        }\n    };\n    const handlePauseAudio = ()=>{\n        waveform.current.stop();\n        audioMessage.pause();\n        setIsPlaying(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-5 text-white px-4 pr-2 py-4 text-sm rounded-md \".concat(message.senderId === currentUser.id ? \"bg-incoming-background\" : \"bg-outgoing-background\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    type: \"lg\",\n                    state: currentUser.photoUrl\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl cursor-pointer\",\n                children: !isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPlay, {\n                    onClick: handlePlayAudio\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaStop, {\n                    onClick: handlePauseAudio\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-60\",\n                    ref: waveFormRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-bubble-meta text-[11px] pt-1 flex justify-between absolute bottom-[-22px] w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: formatTime(isPlaying ? currentPlaybackTime : totalDuration)\n                            }, void 0, false, {\n                                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_5__.calculateTime)(message.createdAt)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    message.senderId === userInfo.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_MessageStatus__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        messageStatus: message.messageStatus\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoiceMessage, \"Ns+tbuejHmNKBs2OVSS35i90B78=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = VoiceMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoiceMessage);\nvar _c;\n$RefreshReg$(_c, \"VoiceMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L1ZvaWNlTWVzc2FnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNDO0FBQ3BCO0FBQ0Q7QUFDVTtBQUNNO0FBQ0Y7QUFFcEQsTUFBTVcsZUFBZSxTQUFpQjtRQUFoQixFQUFFQyxRQUFPLEVBQUU7O0lBRS9CLE1BQU0sQ0FBQyxFQUFFQyxTQUFRLEVBQUVDLFlBQVcsRUFBRUMsT0FBTSxFQUFFLEVBQUVDLFNBQVMsR0FBR2hCLHVFQUFnQkE7SUFFdEUsTUFBTSxDQUFDaUIsY0FBY0MsZ0JBQWdCLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFDckQsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU0sQ0FBQ2lCLHFCQUFxQkMsdUJBQXVCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUMvRCxNQUFNLENBQUNtQixlQUFlQyxpQkFBaUIsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1xQixjQUFjdEIsNkNBQU1BO0lBRTFCLE1BQU11QixXQUFXdkIsNkNBQU1BLENBQUMsSUFBSTtJQUU1QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUdkLElBQUllLGNBQWM7WUFDaEIsTUFBTVUscUJBQXFCLElBQU07Z0JBQy9CTCx1QkFBdUJMLGFBQWFXLFdBQVc7WUFDakQ7WUFDQVgsYUFBYVksZ0JBQWdCLENBQUMsY0FBY0Y7WUFDNUMsT0FBTyxJQUFNO2dCQUNYVixhQUFhYSxtQkFBbUIsQ0FBQyxjQUFjSDtZQUNqRDtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNWO0tBQWE7SUFFakJmLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJd0IsU0FBU0ssT0FBTyxLQUFLLElBQUksRUFBRTtZQUM3QkwsU0FBU0ssT0FBTyxHQUFHMUIsNERBQWlCLENBQUM7Z0JBQ25DNEIsV0FBV1IsWUFBWU0sT0FBTztnQkFDOUJHLFdBQVc7Z0JBQ1hDLGVBQWU7Z0JBQ2ZDLGFBQWE7Z0JB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Z2UuanN4P2RkNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2F2ZVN1cmZlciBmcm9tIFwid2F2ZXN1cmZlci5qc1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vY29tbW9uL0F2YXRhclwiO1xuaW1wb3J0IHsgRmFQbGF5LCBGYVN0b3AgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVRpbWUgfSBmcm9tIFwiQC91dGlscy9DYWxjdWxhdGVUaW1lXCI7XG5pbXBvcnQgTWVzc2FnZVN0YXR1cyBmcm9tIFwiLi4vY29tbW9uL01lc3NhZ2VTdGF0dXNcIjtcblxuY29uc3QgVm9pY2VNZXNzYWdlID0gKHsgbWVzc2FnZSB9KSA9PiB7XG4gIFxuICBjb25zdCBbeyB1c2VySW5mbywgY3VycmVudFVzZXIsIHNvY2tldCB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG5cbiAgY29uc3QgW2F1ZGlvTWVzc2FnZSwgc2V0QXVkaW9NZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VycmVudFBsYXliYWNrVGltZSwgc2V0Q3VycmVudFBsYXliYWNrVGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvdGFsRHVyYXRpb24sIHNldHRvdGFsRHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgd2F2ZUZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB3YXZlZm9ybSA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgXG4gICAgaWYgKGF1ZGlvTWVzc2FnZSkge1xuICAgICAgY29uc3QgdXBkYXRlUGxheWJhY2tUaW1lID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGxheWJhY2tUaW1lKGF1ZGlvTWVzc2FnZS5jdXJyZW50VGltZSk7XG4gICAgICB9O1xuICAgICAgYXVkaW9NZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIHVwZGF0ZVBsYXliYWNrVGltZSk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBhdWRpb01lc3NhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgdXBkYXRlUGxheWJhY2tUaW1lKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbYXVkaW9NZXNzYWdlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2F2ZWZvcm0uY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgd2F2ZWZvcm0uY3VycmVudCA9IFdhdmVTdXJmZXIuY3JlYXRlKHtcbiAgICAgICAgY29udGFpbmVyOiB3YXZlRm9ybVJlZi5jdXJyZW50LFxuICAgICAgICB3YXZlQ29sb3I6IFwiI2NjY1wiLFxuICAgICAgICBwcm9ncmVzc0NvbG9yOiBcIiM0YTllZmZcIixcbiAgICAgICAgY3Vyc29yQ29sb3I6IFwiIzdhZTNjM1wiLFxuICAgICAgICBiYXJXaWR0aDogMixcbiAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgLy8gc2V0V2F2ZUZvcm0od2F2ZXN1cmZlcik7XG5cbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQub24oXCJmaW5pc2hcIiwgKCkgPT4ge1xuICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQuZGVzdHJveSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF1ZGlvVXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8ke21lc3NhZ2UubWVzc2FnZX1gO1xuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGF1ZGlvVXJsKTtcbiAgICBjb25zb2xlLmxvZyhhdWRpby5zcmMpXG4gICAgc2V0QXVkaW9NZXNzYWdlKGF1ZGlvLnNyYyk7XG4gICAgd2F2ZWZvcm0uY3VycmVudC5sb2FkKGF1ZGlvVXJsKTtcbiAgICB3YXZlZm9ybS5jdXJyZW50Lm9uKFwicmVhZHlcIiwgKCkgPT4ge1xuICAgICAgc2V0dG90YWxEdXJhdGlvbih3YXZlZm9ybS5jdXJyZW50LmdldER1cmF0aW9uKCkpO1xuICAgIH0pO1xuICB9LCBbbWVzc2FnZS5tZXNzYWdlXSk7XG5cbiAgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lKSA9PiB7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSByZXR1cm4gXCIwMDowMFwiO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAlIDYwKTtcbiAgICByZXR1cm4gYCR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtzZWNvbmRzXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBsYXlBdWRpbyA9ICgpID0+IHtcbiAgICBpZiAoYXVkaW9NZXNzYWdlKSB7XG4gICAgICB3YXZlZm9ybS5jdXJyZW50LnN0b3AoKTtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQucGxheSgpO1xuICAgICAgYXVkaW9NZXNzYWdlLnBsYXkoKTtcbiAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGF1c2VBdWRpbyA9ICgpID0+IHtcbiAgICB3YXZlZm9ybS5jdXJyZW50LnN0b3AoKTtcbiAgICBhdWRpb01lc3NhZ2UucGF1c2UoKTtcbiAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC01IHRleHQtd2hpdGUgcHgtNCBwci0yIHB5LTQgdGV4dC1zbSByb3VuZGVkLW1kICR7XG4gICAgICAgIG1lc3NhZ2Uuc2VuZGVySWQgPT09IGN1cnJlbnRVc2VyLmlkXG4gICAgICAgICAgPyBcImJnLWluY29taW5nLWJhY2tncm91bmRcIlxuICAgICAgICAgIDogXCJiZy1vdXRnb2luZy1iYWNrZ3JvdW5kXCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBdmF0YXIgdHlwZT1cImxnXCIgc3RhdGU9e2N1cnJlbnRVc2VyLnBob3RvVXJsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgeyFpc1BsYXlpbmcgPyAoXG4gICAgICAgICAgPEZhUGxheSBvbkNsaWNrPXtoYW5kbGVQbGF5QXVkaW99IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZhU3RvcCBvbkNsaWNrPXtoYW5kbGVQYXVzZUF1ZGlvfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYwXCIgcmVmPXt3YXZlRm9ybVJlZn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJ1YmJsZS1tZXRhIHRleHQtWzExcHhdIHB0LTEgZmxleCBqdXN0aWZ5LWJldHdlZW4gYWJzb2x1dGUgYm90dG9tLVstMjJweF0gdy1mdWxsXCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAge2Zvcm1hdFRpbWUoaXNQbGF5aW5nID8gY3VycmVudFBsYXliYWNrVGltZSA6IHRvdGFsRHVyYXRpb24pfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XG4gICAgICAgICAgICAgIDxzcGFuPntjYWxjdWxhdGVUaW1lKG1lc3NhZ2UuY3JlYXRlZEF0KX08L3NwYW4+XG4gICAgICAgICAgICAgIHttZXNzYWdlLnNlbmRlcklkID09PSB1c2VySW5mby5pZCAmJiAoXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VTdGF0dXMgbWVzc2FnZVN0YXR1cz17bWVzc2FnZS5tZXNzYWdlU3RhdHVzfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWb2ljZU1lc3NhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGVQcm92aWRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJXYXZlU3VyZmVyIiwiQXZhdGFyIiwiRmFQbGF5IiwiRmFTdG9wIiwiY2FsY3VsYXRlVGltZSIsIk1lc3NhZ2VTdGF0dXMiLCJWb2ljZU1lc3NhZ2UiLCJtZXNzYWdlIiwidXNlckluZm8iLCJjdXJyZW50VXNlciIsInNvY2tldCIsImRpc3BhdGNoIiwiYXVkaW9NZXNzYWdlIiwic2V0QXVkaW9NZXNzYWdlIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiY3VycmVudFBsYXliYWNrVGltZSIsInNldEN1cnJlbnRQbGF5YmFja1RpbWUiLCJ0b3RhbER1cmF0aW9uIiwic2V0dG90YWxEdXJhdGlvbiIsIndhdmVGb3JtUmVmIiwid2F2ZWZvcm0iLCJ1cGRhdGVQbGF5YmFja1RpbWUiLCJjdXJyZW50VGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsImNyZWF0ZSIsImNvbnRhaW5lciIsIndhdmVDb2xvciIsInByb2dyZXNzQ29sb3IiLCJjdXJzb3JDb2xvciIsImJhcldpZHRoIiwiaGVpZ2h0IiwicmVzcG9uc2l2ZSIsIm9uIiwiZGVzdHJveSIsImF1ZGlvVXJsIiwiYXVkaW8iLCJBdWRpbyIsImNvbnNvbGUiLCJsb2ciLCJzcmMiLCJsb2FkIiwiZ2V0RHVyYXRpb24iLCJmb3JtYXRUaW1lIiwidGltZSIsImlzTmFOIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiaGFuZGxlUGxheUF1ZGlvIiwic3RvcCIsInBsYXkiLCJoYW5kbGVQYXVzZUF1ZGlvIiwicGF1c2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzZW5kZXJJZCIsImlkIiwidHlwZSIsInN0YXRlIiwicGhvdG9VcmwiLCJvbkNsaWNrIiwicmVmIiwic3BhbiIsImNyZWF0ZWRBdCIsIm1lc3NhZ2VTdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chat/VoiceMessage.jsx\n"));

/***/ })

});