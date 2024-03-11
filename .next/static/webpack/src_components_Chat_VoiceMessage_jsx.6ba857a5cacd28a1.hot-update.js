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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wavesurfer.js */ \"./node_modules/wavesurfer.js/dist/wavesurfer.esm.js\");\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n/* harmony import */ var _common_MessageStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/MessageStatus */ \"./src/components/common/MessageStatus.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst VoiceMessage = (param)=>{\n    let { message  } = param;\n    _s();\n    const [{ userInfo , currentUser , socket  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [audioMessage, setAudioMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [currentPlaybackTime, setCurrentPlaybackTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [totalDuration, settotalDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const waveFormRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const waveform = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (audioMessage) {\n            const updatePlaybackTime = ()=>{\n                setCurrentPlaybackTime(audioMessage.currentTime);\n            };\n            audioMessage.addEventListener(\"timeupdate\", updatePlaybackTime);\n            return ()=>{\n                audioMessage.removeEventListener(\"timeupdate\", updatePlaybackTime);\n            };\n        }\n    }, [\n        audioMessage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (waveform.current === null) {\n            waveform.current = wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n                container: waveFormRef.current,\n                waveColor: \"#ccc\",\n                progressColor: \"#4a9eff\",\n                cursorColor: \"#7ae3c3\",\n                barWidth: 2,\n                height: 30,\n                responsive: true\n            });\n            // setWaveForm(wavesurfer);\n            waveform.current.on(\"finish\", ()=>{\n                setIsPlaying(false);\n            });\n        }\n        return ()=>{\n            waveform.current.destroy();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const audioUrl = \"http://localhost:8080/\".concat(message.message);\n        console.log(audioUrl);\n        const audio = new Audio(audioUrl);\n        console.log(\"voice message audio\", audio);\n        setAudioMessage(audio);\n        waveform.current.load(audioUrl);\n        waveform.current.on(\"ready\", ()=>{\n            settotalDuration(waveform.current.getDuration());\n        });\n    }, [\n        message.message\n    ]);\n    const formatTime = (time)=>{\n        if (isNaN(time)) return \"00:00\";\n        const minutes = Math.floor(time / 60);\n        const seconds = Math.floor(time % 60);\n        return \"\".concat(minutes.toString().padStart(2, \"0\"), \":\").concat(seconds.toString().padStart(2, \"0\"));\n    };\n    const handlePlayAudio = ()=>{\n        if (audioMessage) {\n            waveform.current.stop();\n            waveform.current.play();\n            audioMessage.play();\n            setIsPlaying(true);\n        }\n    };\n    const handlePauseAudio = ()=>{\n        waveform.current.stop();\n        audioMessage.pause();\n        setIsPlaying(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-5 text-white px-4 pr-2 py-4 text-sm rounded-md \".concat(message.senderId === currentUser.id ? \"bg-incoming-background\" : \"bg-outgoing-background\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    type: \"lg\",\n                    state: currentUser.photoUrl\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl cursor-pointer\",\n                children: !isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPlay, {\n                    onClick: handlePlayAudio\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaStop, {\n                    onClick: handlePauseAudio\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-60\",\n                    ref: waveFormRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-bubble-meta text-[11px] pt-1 flex justify-between absolute bottom-[-22px] w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: formatTime(isPlaying ? currentPlaybackTime : totalDuration)\n                            }, void 0, false, {\n                                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_5__.calculateTime)(message.createdAt)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    message.senderId === userInfo.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_MessageStatus__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        messageStatus: message.messageStatus\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoiceMessage, \"Ns+tbuejHmNKBs2OVSS35i90B78=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = VoiceMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoiceMessage);\nvar _c;\n$RefreshReg$(_c, \"VoiceMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L1ZvaWNlTWVzc2FnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNDO0FBQ3BCO0FBQ0Q7QUFDVTtBQUNNO0FBQ0Y7QUFFcEQsTUFBTVcsZUFBZSxTQUFpQjtRQUFoQixFQUFFQyxRQUFPLEVBQUU7O0lBRS9CLE1BQU0sQ0FBQyxFQUFFQyxTQUFRLEVBQUVDLFlBQVcsRUFBRUMsT0FBTSxFQUFFLEVBQUVDLFNBQVMsR0FBR2hCLHVFQUFnQkE7SUFFdEUsTUFBTSxDQUFDaUIsY0FBY0MsZ0JBQWdCLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFDckQsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU0sQ0FBQ2lCLHFCQUFxQkMsdUJBQXVCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUMvRCxNQUFNLENBQUNtQixlQUFlQyxpQkFBaUIsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1xQixjQUFjdEIsNkNBQU1BO0lBRTFCLE1BQU11QixXQUFXdkIsNkNBQU1BLENBQUMsSUFBSTtJQUU1QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUdkLElBQUllLGNBQWM7WUFDaEIsTUFBTVUscUJBQXFCLElBQU07Z0JBQy9CTCx1QkFBdUJMLGFBQWFXLFdBQVc7WUFDakQ7WUFDQVgsYUFBYVksZ0JBQWdCLENBQUMsY0FBY0Y7WUFDNUMsT0FBTyxJQUFNO2dCQUNYVixhQUFhYSxtQkFBbUIsQ0FBQyxjQUFjSDtZQUNqRDtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNWO0tBQWE7SUFFakJmLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJd0IsU0FBU0ssT0FBTyxLQUFLLElBQUksRUFBRTtZQUM3QkwsU0FBU0ssT0FBTyxHQUFHMUIsNERBQWlCLENBQUM7Z0JBQ25DNEIsV0FBV1IsWUFBWU0sT0FBTztnQkFDOUJHLFdBQVc7Z0JBQ1hDLGVBQWU7Z0JBQ2ZDLGFBQWE7Z0JBQ2JDLFVBQVU7Z0JBQ1ZDLFFBQVE7Z0JBQ1JDLFlBQVksSUFBSTtZQUNsQjtZQUNBLDJCQUEyQjtZQUUzQmIsU0FBU0ssT0FBTyxDQUFDUyxFQUFFLENBQUMsVUFBVSxJQUFNO2dCQUNsQ3BCLGFBQWEsS0FBSztZQUNwQjtRQUNGLENBQUM7UUFFRCxPQUFPLElBQU07WUFDWE0sU0FBU0ssT0FBTyxDQUFDVSxPQUFPO1FBQzFCO0lBQ0YsR0FBRyxFQUFFO0lBRUx2QyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTXdDLFdBQVcseUJBQXlDLE9BQWhCOUIsUUFBUUEsT0FBTztRQUN6RCtCLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixNQUFNRyxRQUFRLElBQUlDLE1BQU1KO1FBQ3hCQyxRQUFRQyxHQUFHLENBQUMsdUJBQXNCQztRQUNsQzNCLGdCQUFnQjJCO1FBQ2hCbkIsU0FBU0ssT0FBTyxDQUFDZ0IsSUFBSSxDQUFDTDtRQUN0QmhCLFNBQVNLLE9BQU8sQ0FBQ1MsRUFBRSxDQUFDLFNBQVMsSUFBTTtZQUNqQ2hCLGlCQUFpQkUsU0FBU0ssT0FBTyxDQUFDaUIsV0FBVztRQUMvQztJQUNGLEdBQUc7UUFBQ3BDLFFBQVFBLE9BQU87S0FBQztJQUVwQixNQUFNcUMsYUFBYSxDQUFDQyxPQUFTO1FBQzNCLElBQUlDLE1BQU1ELE9BQU8sT0FBTztRQUN4QixNQUFNRSxVQUFVQyxLQUFLQyxLQUFLLENBQUNKLE9BQU87UUFDbEMsTUFBTUssVUFBVUYsS0FBS0MsS0FBSyxDQUFDSixPQUFPO1FBQ2xDLE9BQU8sR0FBMENLLE9BQXZDSCxRQUFRSSxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHLE1BQUssS0FFMUIsT0FGNkJGLFFBQzlDQyxRQUFRLEdBQ1JDLFFBQVEsQ0FBQyxHQUFHO0lBQ2pCO0lBRUEsTUFBTUMsa0JBQWtCLElBQU07UUFDNUIsSUFBSXpDLGNBQWM7WUFDaEJTLFNBQVNLLE9BQU8sQ0FBQzRCLElBQUk7WUFDckJqQyxTQUFTSyxPQUFPLENBQUM2QixJQUFJO1lBQ3JCM0MsYUFBYTJDLElBQUk7WUFDakJ4QyxhQUFhLElBQUk7UUFDbkIsQ0FBQztJQUNIO0lBRUEsTUFBTXlDLG1CQUFtQixJQUFNO1FBQzdCbkMsU0FBU0ssT0FBTyxDQUFDNEIsSUFBSTtRQUNyQjFDLGFBQWE2QyxLQUFLO1FBQ2xCMUMsYUFBYSxLQUFLO0lBQ3BCO0lBQ0EscUJBQ0UsOERBQUMyQztRQUNDQyxXQUFXLHdFQUlWLE9BSENwRCxRQUFRcUQsUUFBUSxLQUFLbkQsWUFBWW9ELEVBQUUsR0FDL0IsMkJBQ0Esd0JBQXdCOzswQkFHOUIsOERBQUNIOzBCQUNDLDRFQUFDekQsc0RBQU1BO29CQUFDNkQsTUFBSztvQkFBS0MsT0FBT3RELFlBQVl1RCxRQUFROzs7Ozs7Ozs7OzswQkFFL0MsOERBQUNOO2dCQUFJQyxXQUFVOzBCQUNaLENBQUM3QywwQkFDQSw4REFBQ1osa0RBQU1BO29CQUFDK0QsU0FBU1o7Ozs7OzhDQUVqQiw4REFBQ2xELGtEQUFNQTtvQkFBQzhELFNBQVNUOzs7Ozs2QkFDbEI7Ozs7OzswQkFHSCw4REFBQ0U7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVO29CQUFPTyxLQUFLOUM7OEJBQ3pCLDRFQUFDc0M7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUTswQ0FDRXZCLFdBQVc5QixZQUFZRSxzQkFBc0JFLGFBQWE7Ozs7OzswQ0FFN0QsOERBQUN3QztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNRO2tEQUFNL0QsbUVBQWFBLENBQUNHLFFBQVE2RCxTQUFTOzs7Ozs7b0NBQ3JDN0QsUUFBUXFELFFBQVEsS0FBS3BELFNBQVNxRCxFQUFFLGtCQUMvQiw4REFBQ3hELDZEQUFhQTt3Q0FBQ2dFLGVBQWU5RCxRQUFROEQsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuRTtHQXpITS9EOztRQUVrRFgsbUVBQWdCQTs7O0tBRmxFVztBQTJITiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0L1ZvaWNlTWVzc2FnZS5qc3g/ZGQ1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXYXZlU3VyZmVyIGZyb20gXCJ3YXZlc3VyZmVyLmpzXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XG5pbXBvcnQgeyBGYVBsYXksIEZhU3RvcCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlVGltZSB9IGZyb20gXCJAL3V0aWxzL0NhbGN1bGF0ZVRpbWVcIjtcbmltcG9ydCBNZXNzYWdlU3RhdHVzIGZyb20gXCIuLi9jb21tb24vTWVzc2FnZVN0YXR1c1wiO1xuXG5jb25zdCBWb2ljZU1lc3NhZ2UgPSAoeyBtZXNzYWdlIH0pID0+IHtcbiAgXG4gIGNvbnN0IFt7IHVzZXJJbmZvLCBjdXJyZW50VXNlciwgc29ja2V0IH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcblxuICBjb25zdCBbYXVkaW9NZXNzYWdlLCBzZXRBdWRpb01lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50UGxheWJhY2tUaW1lLCBzZXRDdXJyZW50UGxheWJhY2tUaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG90YWxEdXJhdGlvbiwgc2V0dG90YWxEdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCB3YXZlRm9ybVJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHdhdmVmb3JtID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBcbiAgICBpZiAoYXVkaW9NZXNzYWdlKSB7XG4gICAgICBjb25zdCB1cGRhdGVQbGF5YmFja1RpbWUgPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRQbGF5YmFja1RpbWUoYXVkaW9NZXNzYWdlLmN1cnJlbnRUaW1lKTtcbiAgICAgIH07XG4gICAgICBhdWRpb01lc3NhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgdXBkYXRlUGxheWJhY2tUaW1lKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGF1ZGlvTWVzc2FnZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCB1cGRhdGVQbGF5YmFja1RpbWUpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFthdWRpb01lc3NhZ2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3YXZlZm9ybS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICB3YXZlZm9ybS5jdXJyZW50ID0gV2F2ZVN1cmZlci5jcmVhdGUoe1xuICAgICAgICBjb250YWluZXI6IHdhdmVGb3JtUmVmLmN1cnJlbnQsXG4gICAgICAgIHdhdmVDb2xvcjogXCIjY2NjXCIsXG4gICAgICAgIHByb2dyZXNzQ29sb3I6IFwiIzRhOWVmZlwiLFxuICAgICAgICBjdXJzb3JDb2xvcjogXCIjN2FlM2MzXCIsXG4gICAgICAgIGJhcldpZHRoOiAyLFxuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICAvLyBzZXRXYXZlRm9ybSh3YXZlc3VyZmVyKTtcblxuICAgICAgd2F2ZWZvcm0uY3VycmVudC5vbihcImZpbmlzaFwiLCAoKSA9PiB7XG4gICAgICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2F2ZWZvcm0uY3VycmVudC5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXVkaW9VcmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7bWVzc2FnZS5tZXNzYWdlfWA7XG4gICAgY29uc29sZS5sb2coYXVkaW9VcmwpXG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYXVkaW9VcmwpO1xuICAgIGNvbnNvbGUubG9nKFwidm9pY2UgbWVzc2FnZSBhdWRpb1wiLGF1ZGlvKVxuICAgIHNldEF1ZGlvTWVzc2FnZShhdWRpbyk7XG4gICAgd2F2ZWZvcm0uY3VycmVudC5sb2FkKGF1ZGlvVXJsKTtcbiAgICB3YXZlZm9ybS5jdXJyZW50Lm9uKFwicmVhZHlcIiwgKCkgPT4ge1xuICAgICAgc2V0dG90YWxEdXJhdGlvbih3YXZlZm9ybS5jdXJyZW50LmdldER1cmF0aW9uKCkpO1xuICAgIH0pO1xuICB9LCBbbWVzc2FnZS5tZXNzYWdlXSk7XG5cbiAgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lKSA9PiB7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSByZXR1cm4gXCIwMDowMFwiO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAlIDYwKTtcbiAgICByZXR1cm4gYCR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtzZWNvbmRzXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBsYXlBdWRpbyA9ICgpID0+IHtcbiAgICBpZiAoYXVkaW9NZXNzYWdlKSB7XG4gICAgICB3YXZlZm9ybS5jdXJyZW50LnN0b3AoKTtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQucGxheSgpO1xuICAgICAgYXVkaW9NZXNzYWdlLnBsYXkoKTtcbiAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGF1c2VBdWRpbyA9ICgpID0+IHtcbiAgICB3YXZlZm9ybS5jdXJyZW50LnN0b3AoKTtcbiAgICBhdWRpb01lc3NhZ2UucGF1c2UoKTtcbiAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC01IHRleHQtd2hpdGUgcHgtNCBwci0yIHB5LTQgdGV4dC1zbSByb3VuZGVkLW1kICR7XG4gICAgICAgIG1lc3NhZ2Uuc2VuZGVySWQgPT09IGN1cnJlbnRVc2VyLmlkXG4gICAgICAgICAgPyBcImJnLWluY29taW5nLWJhY2tncm91bmRcIlxuICAgICAgICAgIDogXCJiZy1vdXRnb2luZy1iYWNrZ3JvdW5kXCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBdmF0YXIgdHlwZT1cImxnXCIgc3RhdGU9e2N1cnJlbnRVc2VyLnBob3RvVXJsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgeyFpc1BsYXlpbmcgPyAoXG4gICAgICAgICAgPEZhUGxheSBvbkNsaWNrPXtoYW5kbGVQbGF5QXVkaW99IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZhU3RvcCBvbkNsaWNrPXtoYW5kbGVQYXVzZUF1ZGlvfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYwXCIgcmVmPXt3YXZlRm9ybVJlZn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJ1YmJsZS1tZXRhIHRleHQtWzExcHhdIHB0LTEgZmxleCBqdXN0aWZ5LWJldHdlZW4gYWJzb2x1dGUgYm90dG9tLVstMjJweF0gdy1mdWxsXCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAge2Zvcm1hdFRpbWUoaXNQbGF5aW5nID8gY3VycmVudFBsYXliYWNrVGltZSA6IHRvdGFsRHVyYXRpb24pfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XG4gICAgICAgICAgICAgIDxzcGFuPntjYWxjdWxhdGVUaW1lKG1lc3NhZ2UuY3JlYXRlZEF0KX08L3NwYW4+XG4gICAgICAgICAgICAgIHttZXNzYWdlLnNlbmRlcklkID09PSB1c2VySW5mby5pZCAmJiAoXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VTdGF0dXMgbWVzc2FnZVN0YXR1cz17bWVzc2FnZS5tZXNzYWdlU3RhdHVzfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWb2ljZU1lc3NhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGVQcm92aWRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJXYXZlU3VyZmVyIiwiQXZhdGFyIiwiRmFQbGF5IiwiRmFTdG9wIiwiY2FsY3VsYXRlVGltZSIsIk1lc3NhZ2VTdGF0dXMiLCJWb2ljZU1lc3NhZ2UiLCJtZXNzYWdlIiwidXNlckluZm8iLCJjdXJyZW50VXNlciIsInNvY2tldCIsImRpc3BhdGNoIiwiYXVkaW9NZXNzYWdlIiwic2V0QXVkaW9NZXNzYWdlIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiY3VycmVudFBsYXliYWNrVGltZSIsInNldEN1cnJlbnRQbGF5YmFja1RpbWUiLCJ0b3RhbER1cmF0aW9uIiwic2V0dG90YWxEdXJhdGlvbiIsIndhdmVGb3JtUmVmIiwid2F2ZWZvcm0iLCJ1cGRhdGVQbGF5YmFja1RpbWUiLCJjdXJyZW50VGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsImNyZWF0ZSIsImNvbnRhaW5lciIsIndhdmVDb2xvciIsInByb2dyZXNzQ29sb3IiLCJjdXJzb3JDb2xvciIsImJhcldpZHRoIiwiaGVpZ2h0IiwicmVzcG9uc2l2ZSIsIm9uIiwiZGVzdHJveSIsImF1ZGlvVXJsIiwiY29uc29sZSIsImxvZyIsImF1ZGlvIiwiQXVkaW8iLCJsb2FkIiwiZ2V0RHVyYXRpb24iLCJmb3JtYXRUaW1lIiwidGltZSIsImlzTmFOIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiaGFuZGxlUGxheUF1ZGlvIiwic3RvcCIsInBsYXkiLCJoYW5kbGVQYXVzZUF1ZGlvIiwicGF1c2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzZW5kZXJJZCIsImlkIiwidHlwZSIsInN0YXRlIiwicGhvdG9VcmwiLCJvbkNsaWNrIiwicmVmIiwic3BhbiIsImNyZWF0ZWRBdCIsIm1lc3NhZ2VTdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chat/VoiceMessage.jsx\n"));

/***/ })

});