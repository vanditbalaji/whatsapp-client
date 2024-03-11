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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wavesurfer.js */ \"./node_modules/wavesurfer.js/dist/wavesurfer.esm.js\");\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n/* harmony import */ var _common_MessageStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/MessageStatus */ \"./src/components/common/MessageStatus.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst VoiceMessage = (param)=>{\n    let { message  } = param;\n    _s();\n    const [{ userInfo , currentUser , socket  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [audioMessage, setAudioMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [currentPlaybackTime, setCurrentPlaybackTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [totalDuration, settotalDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const waveFormRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const waveform = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (audioMessage) {\n            const updatePlaybackTime = ()=>{\n                setCurrentPlaybackTime(audioMessage.currentTime);\n            };\n            audioMessage.addEventListener(\"timeupdate\", updatePlaybackTime);\n            return ()=>{\n                audioMessage.removeEventListener(\"timeupdate\", updatePlaybackTime);\n            };\n        }\n    }, [\n        audioMessage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (waveform.current === null) {\n            waveform.current = wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n                container: waveFormRef.current,\n                waveColor: \"#ccc\",\n                progressColor: \"#4a9eff\",\n                cursorColor: \"#7ae3c3\",\n                barWidth: 2,\n                height: 30,\n                responsive: true\n            });\n            // setWaveForm(wavesurfer);\n            waveform.current.on(\"finish\", ()=>{\n                setIsPlaying(false);\n            });\n        }\n        return ()=>{\n            waveform.current.destroy();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const audioUrl = \"http://localhost:8080/\".concat(message.message);\n        const audio = new Audio(audioUrl);\n        audio.addEventListener(\"canplaythrough\", ()=>{\n            setAudioMessage(audio);\n            waveform.current.load(audioUrl);\n            waveform.current.on(\"ready\", ()=>{\n                settotalDuration(waveform.current.getDuration());\n            });\n        });\n    }, [\n        message.message\n    ]);\n    const formatTime = (time)=>{\n        if (isNaN(time)) return \"00:00\";\n        const minutes = Math.floor(time / 60);\n        const seconds = Math.floor(time % 60);\n        return \"\".concat(minutes.toString().padStart(2, \"0\"), \":\").concat(seconds.toString().padStart(2, \"0\"));\n    };\n    const handlePlayAudio = ()=>{\n        if (audioMessage) {\n            waveform.current.stop();\n            waveform.current.play();\n            audioMessage.play();\n            setIsPlaying(true);\n        }\n    };\n    const handlePauseAudio = ()=>{\n        waveform.current.stop();\n        audioMessage.pause();\n        setIsPlaying(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-5 text-white px-4 pr-2 py-4 text-sm rounded-md \".concat(message.senderId === currentUser.id ? \"bg-incoming-background\" : \"bg-outgoing-background\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    type: \"lg\",\n                    state: currentUser.photoUrl\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl cursor-pointer\",\n                children: !isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPlay, {\n                    onClick: handlePlayAudio\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaStop, {\n                    onClick: handlePauseAudio\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-60\",\n                    ref: waveFormRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-bubble-meta text-[11px] pt-1 flex justify-between absolute bottom-[-22px] w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: formatTime(isPlaying ? currentPlaybackTime : totalDuration)\n                            }, void 0, false, {\n                                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_5__.calculateTime)(message.createdAt)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    message.senderId === userInfo.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_MessageStatus__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        messageStatus: message.messageStatus\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ps-devmonali/Vandit/whatsapp/client/src/components/Chat/VoiceMessage.jsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoiceMessage, \"Ns+tbuejHmNKBs2OVSS35i90B78=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = VoiceMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoiceMessage);\nvar _c;\n$RefreshReg$(_c, \"VoiceMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L1ZvaWNlTWVzc2FnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNDO0FBQ3BCO0FBQ0Q7QUFDVTtBQUNNO0FBQ0Y7QUFFcEQsTUFBTVcsZUFBZSxTQUFpQjtRQUFoQixFQUFFQyxRQUFPLEVBQUU7O0lBRS9CLE1BQU0sQ0FBQyxFQUFFQyxTQUFRLEVBQUVDLFlBQVcsRUFBRUMsT0FBTSxFQUFFLEVBQUVDLFNBQVMsR0FBR2hCLHVFQUFnQkE7SUFFdEUsTUFBTSxDQUFDaUIsY0FBY0MsZ0JBQWdCLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFDckQsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU0sQ0FBQ2lCLHFCQUFxQkMsdUJBQXVCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUMvRCxNQUFNLENBQUNtQixlQUFlQyxpQkFBaUIsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1xQixjQUFjdEIsNkNBQU1BO0lBRTFCLE1BQU11QixXQUFXdkIsNkNBQU1BLENBQUMsSUFBSTtJQUU1QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUdkLElBQUllLGNBQWM7WUFDaEIsTUFBTVUscUJBQXFCLElBQU07Z0JBQy9CTCx1QkFBdUJMLGFBQWFXLFdBQVc7WUFDakQ7WUFDQVgsYUFBYVksZ0JBQWdCLENBQUMsY0FBY0Y7WUFDNUMsT0FBTyxJQUFNO2dCQUNYVixhQUFhYSxtQkFBbUIsQ0FBQyxjQUFjSDtZQUNqRDtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNWO0tBQWE7SUFFakJmLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJd0IsU0FBU0ssT0FBTyxLQUFLLElBQUksRUFBRTtZQUM3QkwsU0FBU0ssT0FBTyxHQUFHMUIsNERBQWlCLENBQUM7Z0JBQ25DNEIsV0FBV1IsWUFBWU0sT0FBTztnQkFDOUJHLFdBQVc7Z0JBQ1hDLGVBQWU7Z0JBQ2ZDLGFBQWE7Z0JBQ2JDLFVBQVU7Z0JBQ1ZDLFFBQVE7Z0JBQ1JDLFlBQVksSUFBSTtZQUNsQjtZQUNBLDJCQUEyQjtZQUUzQmIsU0FBU0ssT0FBTyxDQUFDUyxFQUFFLENBQUMsVUFBVSxJQUFNO2dCQUNsQ3BCLGFBQWEsS0FBSztZQUNwQjtRQUNGLENBQUM7UUFFRCxPQUFPLElBQU07WUFDWE0sU0FBU0ssT0FBTyxDQUFDVSxPQUFPO1FBQzFCO0lBQ0YsR0FBRyxFQUFFO0lBRVB2QyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTXdDLFdBQVcseUJBQXlDLE9BQWhCOUIsUUFBUUEsT0FBTztRQUN6RCxNQUFNK0IsUUFBUSxJQUFJQyxNQUFNRjtRQUN4QkMsTUFBTWQsZ0JBQWdCLENBQUMsa0JBQWtCLElBQU07WUFDN0NYLGdCQUFnQnlCO1lBQ2hCakIsU0FBU0ssT0FBTyxDQUFDYyxJQUFJLENBQUNIO1lBQ3RCaEIsU0FBU0ssT0FBTyxDQUFDUyxFQUFFLENBQUMsU0FBUyxJQUFNO2dCQUNqQ2hCLGlCQUFpQkUsU0FBU0ssT0FBTyxDQUFDZSxXQUFXO1lBQy9DO1FBQ0Y7SUFDRixHQUFHO1FBQUNsQyxRQUFRQSxPQUFPO0tBQUM7SUFHbEIsTUFBTW1DLGFBQWEsQ0FBQ0MsT0FBUztRQUMzQixJQUFJQyxNQUFNRCxPQUFPLE9BQU87UUFDeEIsTUFBTUUsVUFBVUMsS0FBS0MsS0FBSyxDQUFDSixPQUFPO1FBQ2xDLE1BQU1LLFVBQVVGLEtBQUtDLEtBQUssQ0FBQ0osT0FBTztRQUNsQyxPQUFPLEdBQTBDSyxPQUF2Q0gsUUFBUUksUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRyxNQUFLLEtBRTFCLE9BRjZCRixRQUM5Q0MsUUFBUSxHQUNSQyxRQUFRLENBQUMsR0FBRztJQUNqQjtJQUVBLE1BQU1DLGtCQUFrQixJQUFNO1FBQzVCLElBQUl2QyxjQUFjO1lBQ2hCUyxTQUFTSyxPQUFPLENBQUMwQixJQUFJO1lBQ3JCL0IsU0FBU0ssT0FBTyxDQUFDMkIsSUFBSTtZQUNyQnpDLGFBQWF5QyxJQUFJO1lBQ2pCdEMsYUFBYSxJQUFJO1FBQ25CLENBQUM7SUFDSDtJQUVBLE1BQU11QyxtQkFBbUIsSUFBTTtRQUM3QmpDLFNBQVNLLE9BQU8sQ0FBQzBCLElBQUk7UUFDckJ4QyxhQUFhMkMsS0FBSztRQUNsQnhDLGFBQWEsS0FBSztJQUNwQjtJQUNBLHFCQUNFLDhEQUFDeUM7UUFDQ0MsV0FBVyx3RUFJVixPQUhDbEQsUUFBUW1ELFFBQVEsS0FBS2pELFlBQVlrRCxFQUFFLEdBQy9CLDJCQUNBLHdCQUF3Qjs7MEJBRzlCLDhEQUFDSDswQkFDQyw0RUFBQ3ZELHNEQUFNQTtvQkFBQzJELE1BQUs7b0JBQUtDLE9BQU9wRCxZQUFZcUQsUUFBUTs7Ozs7Ozs7Ozs7MEJBRS9DLDhEQUFDTjtnQkFBSUMsV0FBVTswQkFDWixDQUFDM0MsMEJBQ0EsOERBQUNaLGtEQUFNQTtvQkFBQzZELFNBQVNaOzs7Ozs4Q0FFakIsOERBQUNoRCxrREFBTUE7b0JBQUM0RCxTQUFTVDs7Ozs7NkJBQ2xCOzs7Ozs7MEJBR0gsOERBQUNFO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTtvQkFBT08sS0FBSzVDOzhCQUN6Qiw0RUFBQ29DO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1E7MENBQ0V2QixXQUFXNUIsWUFBWUUsc0JBQXNCRSxhQUFhOzs7Ozs7MENBRTdELDhEQUFDc0M7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDUTtrREFBTTdELG1FQUFhQSxDQUFDRyxRQUFRMkQsU0FBUzs7Ozs7O29DQUNyQzNELFFBQVFtRCxRQUFRLEtBQUtsRCxTQUFTbUQsRUFBRSxrQkFDL0IsOERBQUN0RCw2REFBYUE7d0NBQUM4RCxlQUFlNUQsUUFBUTRELGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkU7R0ExSE03RDs7UUFFa0RYLG1FQUFnQkE7OztLQUZsRVc7QUE0SE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9Wb2ljZU1lc3NhZ2UuanN4P2RkNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2F2ZVN1cmZlciBmcm9tIFwid2F2ZXN1cmZlci5qc1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vY29tbW9uL0F2YXRhclwiO1xuaW1wb3J0IHsgRmFQbGF5LCBGYVN0b3AgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVRpbWUgfSBmcm9tIFwiQC91dGlscy9DYWxjdWxhdGVUaW1lXCI7XG5pbXBvcnQgTWVzc2FnZVN0YXR1cyBmcm9tIFwiLi4vY29tbW9uL01lc3NhZ2VTdGF0dXNcIjtcblxuY29uc3QgVm9pY2VNZXNzYWdlID0gKHsgbWVzc2FnZSB9KSA9PiB7XG4gIFxuICBjb25zdCBbeyB1c2VySW5mbywgY3VycmVudFVzZXIsIHNvY2tldCB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG5cbiAgY29uc3QgW2F1ZGlvTWVzc2FnZSwgc2V0QXVkaW9NZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VycmVudFBsYXliYWNrVGltZSwgc2V0Q3VycmVudFBsYXliYWNrVGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvdGFsRHVyYXRpb24sIHNldHRvdGFsRHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgd2F2ZUZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB3YXZlZm9ybSA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgXG4gICAgaWYgKGF1ZGlvTWVzc2FnZSkge1xuICAgICAgY29uc3QgdXBkYXRlUGxheWJhY2tUaW1lID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGxheWJhY2tUaW1lKGF1ZGlvTWVzc2FnZS5jdXJyZW50VGltZSk7XG4gICAgICB9O1xuICAgICAgYXVkaW9NZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIHVwZGF0ZVBsYXliYWNrVGltZSk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBhdWRpb01lc3NhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgdXBkYXRlUGxheWJhY2tUaW1lKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbYXVkaW9NZXNzYWdlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2F2ZWZvcm0uY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgd2F2ZWZvcm0uY3VycmVudCA9IFdhdmVTdXJmZXIuY3JlYXRlKHtcbiAgICAgICAgY29udGFpbmVyOiB3YXZlRm9ybVJlZi5jdXJyZW50LFxuICAgICAgICB3YXZlQ29sb3I6IFwiI2NjY1wiLFxuICAgICAgICBwcm9ncmVzc0NvbG9yOiBcIiM0YTllZmZcIixcbiAgICAgICAgY3Vyc29yQ29sb3I6IFwiIzdhZTNjM1wiLFxuICAgICAgICBiYXJXaWR0aDogMixcbiAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgLy8gc2V0V2F2ZUZvcm0od2F2ZXN1cmZlcik7XG5cbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQub24oXCJmaW5pc2hcIiwgKCkgPT4ge1xuICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQuZGVzdHJveSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3QgYXVkaW9VcmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7bWVzc2FnZS5tZXNzYWdlfWA7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGF1ZGlvVXJsKTtcbiAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXl0aHJvdWdoXCIsICgpID0+IHtcbiAgICBzZXRBdWRpb01lc3NhZ2UoYXVkaW8pO1xuICAgIHdhdmVmb3JtLmN1cnJlbnQubG9hZChhdWRpb1VybCk7XG4gICAgd2F2ZWZvcm0uY3VycmVudC5vbihcInJlYWR5XCIsICgpID0+IHtcbiAgICAgIHNldHRvdGFsRHVyYXRpb24od2F2ZWZvcm0uY3VycmVudC5nZXREdXJhdGlvbigpKTtcbiAgICB9KTtcbiAgfSk7XG59LCBbbWVzc2FnZS5tZXNzYWdlXSk7XG5cblxuICBjb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IHtcbiAgICBpZiAoaXNOYU4odGltZSkpIHJldHVybiBcIjAwOjAwXCI7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcih0aW1lICUgNjApO1xuICAgIHJldHVybiBgJHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfToke3NlY29uZHNcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGxheUF1ZGlvID0gKCkgPT4ge1xuICAgIGlmIChhdWRpb01lc3NhZ2UpIHtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQuc3RvcCgpO1xuICAgICAgd2F2ZWZvcm0uY3VycmVudC5wbGF5KCk7XG4gICAgICBhdWRpb01lc3NhZ2UucGxheSgpO1xuICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQYXVzZUF1ZGlvID0gKCkgPT4ge1xuICAgIHdhdmVmb3JtLmN1cnJlbnQuc3RvcCgpO1xuICAgIGF1ZGlvTWVzc2FnZS5wYXVzZSgpO1xuICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTUgdGV4dC13aGl0ZSBweC00IHByLTIgcHktNCB0ZXh0LXNtIHJvdW5kZWQtbWQgJHtcbiAgICAgICAgbWVzc2FnZS5zZW5kZXJJZCA9PT0gY3VycmVudFVzZXIuaWRcbiAgICAgICAgICA/IFwiYmctaW5jb21pbmctYmFja2dyb3VuZFwiXG4gICAgICAgICAgOiBcImJnLW91dGdvaW5nLWJhY2tncm91bmRcIlxuICAgICAgfWB9XG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEF2YXRhciB0eXBlPVwibGdcIiBzdGF0ZT17Y3VycmVudFVzZXIucGhvdG9Vcmx9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICB7IWlzUGxheWluZyA/IChcbiAgICAgICAgICA8RmFQbGF5IG9uQ2xpY2s9e2hhbmRsZVBsYXlBdWRpb30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8RmFTdG9wIG9uQ2xpY2s9e2hhbmRsZVBhdXNlQXVkaW99IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjBcIiByZWY9e3dhdmVGb3JtUmVmfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYnViYmxlLW1ldGEgdGV4dC1bMTFweF0gcHQtMSBmbGV4IGp1c3RpZnktYmV0d2VlbiBhYnNvbHV0ZSBib3R0b20tWy0yMnB4XSB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICB7Zm9ybWF0VGltZShpc1BsYXlpbmcgPyBjdXJyZW50UGxheWJhY2tUaW1lIDogdG90YWxEdXJhdGlvbil9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTFcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e2NhbGN1bGF0ZVRpbWUobWVzc2FnZS5jcmVhdGVkQXQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAge21lc3NhZ2Uuc2VuZGVySWQgPT09IHVzZXJJbmZvLmlkICYmIChcbiAgICAgICAgICAgICAgICA8TWVzc2FnZVN0YXR1cyBtZXNzYWdlU3RhdHVzPXttZXNzYWdlLm1lc3NhZ2VTdGF0dXN9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZvaWNlTWVzc2FnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZVByb3ZpZGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIldhdmVTdXJmZXIiLCJBdmF0YXIiLCJGYVBsYXkiLCJGYVN0b3AiLCJjYWxjdWxhdGVUaW1lIiwiTWVzc2FnZVN0YXR1cyIsIlZvaWNlTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1c2VySW5mbyIsImN1cnJlbnRVc2VyIiwic29ja2V0IiwiZGlzcGF0Y2giLCJhdWRpb01lc3NhZ2UiLCJzZXRBdWRpb01lc3NhZ2UiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJjdXJyZW50UGxheWJhY2tUaW1lIiwic2V0Q3VycmVudFBsYXliYWNrVGltZSIsInRvdGFsRHVyYXRpb24iLCJzZXR0b3RhbER1cmF0aW9uIiwid2F2ZUZvcm1SZWYiLCJ3YXZlZm9ybSIsInVwZGF0ZVBsYXliYWNrVGltZSIsImN1cnJlbnRUaW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiY3JlYXRlIiwiY29udGFpbmVyIiwid2F2ZUNvbG9yIiwicHJvZ3Jlc3NDb2xvciIsImN1cnNvckNvbG9yIiwiYmFyV2lkdGgiLCJoZWlnaHQiLCJyZXNwb25zaXZlIiwib24iLCJkZXN0cm95IiwiYXVkaW9VcmwiLCJhdWRpbyIsIkF1ZGlvIiwibG9hZCIsImdldER1cmF0aW9uIiwiZm9ybWF0VGltZSIsInRpbWUiLCJpc05hTiIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImhhbmRsZVBsYXlBdWRpbyIsInN0b3AiLCJwbGF5IiwiaGFuZGxlUGF1c2VBdWRpbyIsInBhdXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VuZGVySWQiLCJpZCIsInR5cGUiLCJzdGF0ZSIsInBob3RvVXJsIiwib25DbGljayIsInJlZiIsInNwYW4iLCJjcmVhdGVkQXQiLCJtZXNzYWdlU3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/VoiceMessage.jsx\n"));

/***/ })

});