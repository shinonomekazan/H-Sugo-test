function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }
    g.aez_bundle_main = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }
          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }
        return n[i].exports;
      }
      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
      return o;
    }
    return r;
  }()({
    1: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.parse = void 0;
      /**
       * 文字列からルビをパースする。
       * このパーサは、akashic-labelのデフォルトルビ記法のためのパーサである。
       *
       * このパーサを使う場合、ラベルに与える文字列にJSONのオブジェクトを表す文字列を含むことができる。
       * 文字列中のオブジェクトはルビを表す要素として扱われる。
       * オブジェクトのメンバーには、ルビを表す `rt` と、本文を表す `rb` を含む必要がある。
       * これらのメンバー以外に、RubyOptions型が持つメンバーを含むことができる。
       *
       * 入力の例として、
       * 'これは{"rb":"本文","rt":"ルビ", "rubyFontSize": 2}です。'
       * という文字列が与えられた場合、このパーサは
       * ["これは", {rb:"本文", rt: "ルビ", rubyFontSize: 2}, "です。"]
       * という配列を返す。
       * また、 `{` や `}` は `\\` でエスケープする必要がある。
       * 例として、括弧は `\\{` 、 バックスラッシュは `\\` を用いて表現する。
       * 注意すべき点として、オブジェクトのプロパティ名はダブルクォートでくくられている必要がある。
       */
      function parse(text) {
        var pattern = /^((?:[^\\{]|\\+.)*?)({(?:[^\\}]|\\+.)*?})([\s\S]*)/;
        // ((?:[^\\{]|\\+.)*?) -> オブジェクトリテラルの直前まで
        // ({(?:[^\\}]|\\+.)*?}) -> 最前のオブジェクトリテラル
        // ([\s\S]*) -> オブジェクトリテラル以降の、改行を含む文字列
        var result = [];
        while (text.length > 0) {
          var parsedText = text.match(pattern);
          if (parsedText !== null) {
            var headStr = parsedText[1];
            var rubyStr = parsedText[2];
            text = parsedText[3];
            if (headStr.length > 0) {
              result.push(headStr.replace(/\\{/g, "{").replace(/\\}/g, "}"));
            }
            var parseResult = JSON.parse(rubyStr.replace(/\\/g, "\\\\"));
            if (parseResult.hasOwnProperty("rt") && parseResult.hasOwnProperty("rb")) {
              parseResult.rt = parseResult.rt.replace(/\\{/g, "{").replace(/\\}/g, "}");
              parseResult.rb = parseResult.rb.replace(/\\{/g, "{").replace(/\\}/g, "}");
              parseResult.text = rubyStr;
              result.push(parseResult);
            } else {
              throw g.ExceptionFactory.createTypeMismatchError("parse", "RubyFragment");
            }
          } else {
            result.push(text.replace(/\\{/g, "{").replace(/\\}/g, "}"));
            break;
          }
        }
        return result;
      }
      exports.parse = parse;
    }, {}],
    2: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RubyFragmentDrawInfo = exports.StringDrawInfo = void 0;
      /**
       * 行に含まれる文字列要素。
       */
      var StringDrawInfo = /*#__PURE__*/_createClass(function StringDrawInfo(text, width, glyphs) {
        _classCallCheck(this, StringDrawInfo);
        this.text = text;
        this.width = width;
        this.glyphs = glyphs;
      });
      exports.StringDrawInfo = StringDrawInfo;
      /**
       * 行に含まれるルビ要素。
       */
      var RubyFragmentDrawInfo = /*#__PURE__*/_createClass(function RubyFragmentDrawInfo(fragment, width, rbWidth, rtWidth, glyphs, rubyGlyphs) {
        _classCallCheck(this, RubyFragmentDrawInfo);
        this.text = fragment.text;
        this.fragment = fragment;
        this.width = width;
        this.rbWidth = rbWidth;
        this.rtWidth = rtWidth;
        this.glyphs = glyphs;
        this.rubyGlyphs = rubyGlyphs;
      });
      exports.RubyFragmentDrawInfo = RubyFragmentDrawInfo;
    }, {}],
    3: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Label = void 0;
      var dr = require("./DefaultRubyParser");
      var fr = require("./FragmentDrawInfo");
      var rp = require("./RubyParser");
      /**
       * 複数行のテキストを描画するエンティティ。
       * 文字列内の"\r\n"、"\n"、"\r"を区切りとして改行を行う。
       * また、自動改行が有効な場合はエンティティの幅に合わせて改行を行う。
       * 本クラスの利用にはg.Fontが必要となる。
       */
      var Label = /*#__PURE__*/function (_g$CacheableE) {
        _inherits(Label, _g$CacheableE);
        var _super = _createSuper(Label);
        /**
         * 各種パラメータを指定して `Label` のインスタンスを生成する。
         * @param param このエンティティに対するパラメータ
         */
        function Label(param) {
          var _this2;
          _classCallCheck(this, Label);
          _this2 = _super.call(this, param);
          _this2.text = param.text;
          _this2.font = param.font;
          _this2.fontSize = param.fontSize || param.font.size;
          _this2._lineBreakWidth = param.width;
          _this2.lineBreak = "lineBreak" in param ? param.lineBreak : true;
          _this2.lineGap = param.lineGap || 0;
          _this2.textAlign = "textAlign" in param ? param.textAlign : "left";
          _this2.textColor = param.textColor;
          _this2.trimMarginTop = "trimMarginTop" in param ? param.trimMarginTop : false;
          _this2.widthAutoAdjust = "widthAutoAdjust" in param ? param.widthAutoAdjust : false;
          _this2.rubyEnabled = "rubyEnabled" in param ? param.rubyEnabled : false;
          _this2.fixLineGap = "fixLineGap" in param ? param.fixLineGap : false;
          _this2.rubyParser = "rubyParser" in param ? param.rubyParser : dr.parse;
          _this2.lineBreakRule = "lineBreakRule" in param ? param.lineBreakRule : undefined;
          if (!param.rubyOptions) {
            param.rubyOptions = {};
          }
          _this2.rubyOptions = param.rubyOptions;
          _this2.rubyOptions.rubyFontSize = "rubyFontSize" in param.rubyOptions ? param.rubyOptions.rubyFontSize : param.fontSize / 2;
          _this2.rubyOptions.rubyFont = "rubyFont" in param.rubyOptions ? param.rubyOptions.rubyFont : _this2.font;
          _this2.rubyOptions.rubyGap = "rubyGap" in param.rubyOptions ? param.rubyOptions.rubyGap : 0;
          _this2.rubyOptions.rubyAlign = "rubyAlign" in param.rubyOptions ? param.rubyOptions.rubyAlign : rp.RubyAlign.SpaceAround;
          _this2._lines = [];
          _this2._beforeText = undefined;
          _this2._beforeTextAlign = undefined;
          _this2._beforeFontSize = undefined;
          _this2._beforeLineBreak = undefined;
          _this2._beforeFont = undefined;
          _this2._beforeWidth = undefined;
          _this2._beforeRubyEnabled = undefined;
          _this2._beforeFixLineGap = undefined;
          _this2._beforeTrimMarginTop = undefined;
          _this2._beforeWidthAutoAdjust = undefined;
          _this2._beforeRubyOptions = {};
          _this2._invalidateSelf();
          return _this2;
        }
        /**
         * このエンティティの描画キャッシュ無効化をエンジンに通知する。
         * このメソッドを呼び出し後、描画キャッシュの再構築が行われ、各 `g.Renderer` に描画内容の変更が反映される。
         */
        _createClass(Label, [{
          key: "invalidate",
          value: function invalidate() {
            this._invalidateSelf();
            _get(_getPrototypeOf(Label.prototype), "invalidate", this).call(this);
          }
        }, {
          key: "renderCache",
          value: function renderCache(renderer) {
            if (!this.rubyEnabled && this.fontSize === 0) return;
            renderer.save();
            var currentLineHeight = 0;
            for (var i = 0; i < this._lines.length; ++i) {
              if (this._lines[i].width > 0 && this._lines[i].height > 0) {
                renderer.drawImage(this._lines[i].surface, 0, 0, this._lines[i].width, this._lines[i].height, this._offsetX(this._lines[i].width), currentLineHeight);
              }
              currentLineHeight += this._lines[i].height + this.lineGap;
            }
            if (this.textColor) {
              renderer.setCompositeOperation("source-atop");
              renderer.fillRect(0, 0, this._lineBreakWidth, this.height, this.textColor);
            }
            renderer.restore();
          }
          /**
           * 利用している `g.Surface` を破棄した上で、このエンティティを破棄する。
           * 利用している `g.Font` の破棄は行わないため、 `g.Font` の破棄はコンテンツ製作者が明示的に行う必要がある。
           */
        }, {
          key: "destroy",
          value: function destroy() {
            this._destroyLines();
            _get(_getPrototypeOf(Label.prototype), "destroy", this).call(this);
          }
          /**
           * 禁則処理によって行幅が this.width を超える場合があるため、 `g.CacheableE` のメソッドをオーバーライドする
           */
        }, {
          key: "calculateCacheSize",
          value: function calculateCacheSize() {
            // TODO: 最大値の候補に this.width を使用するのは textAlign が "center" か "right" の場合に描画に必要なキャッシュサイズを確保するためであり、
            // 最大行幅に対して this.width が大きい場合、余分なキャッシュ領域を確保することになる。
            // これは g.CacheableE にキャッシュ描画位置を調整する cacheOffsetX を導入することで解決される。
            var maxWidth = Math.ceil(this._lines.reduce(function (width, line) {
              return Math.max(width, line.width);
            }, this.width));
            return {
              width: maxWidth,
              height: this.height
            };
          }
          /**
           * 描画内容の行数を返す
           */
        }, {
          key: "lineCount",
          get: function get() {
            return this._lines.length;
          }
        }, {
          key: "_offsetX",
          value: function _offsetX(width) {
            switch (this.textAlign) {
              case "left":
              case g.TextAlign.Left:
                return 0;
              case "right":
              case g.TextAlign.Right:
                return this._lineBreakWidth - width;
              case "center":
              case g.TextAlign.Center:
                return (this._lineBreakWidth - width) / 2;
              default:
                return 0;
            }
          }
        }, {
          key: "_destroyLines",
          value: function _destroyLines() {
            for (var i = 0; i < this._lines.length; i++) {
              if (this._lines[i].surface && !this._lines[i].surface.destroyed()) {
                this._lines[i].surface.destroy();
              }
            }
            this._lines = undefined;
          }
        }, {
          key: "_invalidateSelf",
          value: function _invalidateSelf() {
            if (this.fontSize < 0) throw g.ExceptionFactory.createAssertionError("Label#_invalidateSelf: fontSize must not be negative.");
            if (this.lineGap < -1 * this.fontSize) throw g.ExceptionFactory.createAssertionError("Label#_invalidateSelf: lineGap must be greater than -1 * fontSize.");
            // this.width がユーザから変更された場合、this._lineBreakWidth は this.width に追従する。
            if (this._beforeWidth !== this.width) this._lineBreakWidth = this.width;
            if (this._beforeText !== this.text || this._beforeFontSize !== this.fontSize || this._beforeFont !== this.font || this._beforeLineBreak !== this.lineBreak || this._beforeWidth !== this.width && this._beforeLineBreak === true || this._beforeTextAlign !== this.textAlign || this._beforeRubyEnabled !== this.rubyEnabled || this._beforeFixLineGap !== this.fixLineGap || this._beforeTrimMarginTop !== this.trimMarginTop || this._beforeWidthAutoAdjust !== this.widthAutoAdjust || this._isDifferentRubyOptions(this._beforeRubyOptions, this.rubyOptions)) {
              this._updateLines();
            }
            if (this.widthAutoAdjust) {
              // this.widthAutoAdjust が真の場合、 this.width は描画幅に応じてトリミングされる。
              this.width = Math.ceil(this._lines.reduce(function (width, line) {
                return Math.max(width, line.width);
              }, 0));
            }
            var height = this.lineGap * (this._lines.length - 1);
            for (var i = 0; i < this._lines.length; i++) {
              height += this._lines[i].height;
            }
            this.height = height;
            this._beforeText = this.text;
            this._beforeTextAlign = this.textAlign;
            this._beforeFontSize = this.fontSize;
            this._beforeLineBreak = this.lineBreak;
            this._beforeFont = this.font;
            this._beforeWidth = this.width;
            this._beforeRubyEnabled = this.rubyEnabled;
            this._beforeFixLineGap = this.fixLineGap;
            this._beforeTrimMarginTop = this.trimMarginTop;
            this._beforeWidthAutoAdjust = this.widthAutoAdjust;
            this._beforeRubyOptions.rubyFontSize = this.rubyOptions.rubyFontSize;
            this._beforeRubyOptions.rubyFont = this.rubyOptions.rubyFont;
            this._beforeRubyOptions.rubyGap = this.rubyOptions.rubyGap;
            this._beforeRubyOptions.rubyAlign = this.rubyOptions.rubyAlign;
          }
        }, {
          key: "_updateLines",
          value: function _updateLines() {
            // ユーザのパーサを適用した後にも揃えるが、渡す前に改行記号を replace して統一する
            var fragments;
            if (this.rubyEnabled) {
              try {
                fragments = this.rubyParser(this.text.replace(/\r\n|\n/g, "\r"));
              } catch (error) {
                console.warn("Label#_updateLines(): failed to parse a text '".concat(this.text, "'"), error);
                fragments = [this.text];
              }
            } else {
              fragments = [this.text];
            }
            // Fragment のうち文字列のものを一文字ずつに分解する
            fragments = rp.flatmap(fragments, function (f) {
              if (typeof f !== "string") return f;
              // サロゲートペア文字を正しく分割する
              return f.replace(/\r\n|\n/g, "\r").match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
            });
            var undrawnLineInfos = this._divideToLines(fragments);
            var lines = [];
            var hasNotChanged = this._beforeFontSize === this.fontSize && this._beforeFont === this.font && !this._isDifferentRubyOptions(this._beforeRubyOptions, this.rubyOptions);
            for (var i = 0; i < undrawnLineInfos.length; i++) {
              var undrawnLineInfo = undrawnLineInfos[i];
              var line = this._lines[i];
              if (hasNotChanged && line !== undefined && undrawnLineInfo.sourceText === line.sourceText && undrawnLineInfo.width === line.width && undrawnLineInfo.height === line.height) {
                lines.push(line);
              } else {
                if (line && line.surface && !line.surface.destroyed()) {
                  line.surface.destroy();
                }
                this._drawLineInfoSurface(undrawnLineInfo);
                lines.push(undrawnLineInfo);
              }
            }
            // 行数が減った場合、使われない行のSurfaceをdestroyする。
            for (var _i = lines.length; _i < this._lines.length; _i++) {
              var _line = this._lines[_i];
              if (_line.surface && !_line.surface.destroyed()) {
                _line.surface.destroy();
              }
            }
            this._lines = lines;
          }
        }, {
          key: "_drawLineInfoSurface",
          value: function _drawLineInfoSurface(lineInfo) {
            var lineDrawInfo = lineInfo.fragmentDrawInfoArray;
            var rhi = this._calcRubyHeightInfo(lineDrawInfo);
            var lineSurface = this.scene.game.resourceFactory.createSurface(Math.ceil(lineInfo.width), Math.ceil(lineInfo.height));
            var lineRenderer = lineSurface.renderer();
            lineRenderer.begin();
            lineRenderer.save();
            var rbOffsetY = rhi.hasRubyFragmentDrawInfo || this.fixLineGap ? this.rubyOptions.rubyGap + rhi.maxRubyGlyphHeightWithOffsetY : 0;
            var minMinusOffsetY = lineInfo.minMinusOffsetY;
            for (var i = 0; i < lineDrawInfo.length; i++) {
              var drawInfo = lineDrawInfo[i];
              if (drawInfo instanceof fr.RubyFragmentDrawInfo) {
                this._drawRubyFragmentDrawInfo(lineRenderer, drawInfo, rbOffsetY - minMinusOffsetY, -rhi.minRubyMinusOffsetY);
              } else if (drawInfo instanceof fr.StringDrawInfo) {
                this._drawStringGlyphs(lineRenderer, this.font, drawInfo.glyphs, this.fontSize, 0, rbOffsetY - minMinusOffsetY, 0);
              }
              lineRenderer.translate(drawInfo.width, 0);
            }
            lineRenderer.restore();
            lineRenderer.end();
            lineInfo.surface = lineSurface;
          }
          // 文字列の等幅描画
        }, {
          key: "_drawStringGlyphs",
          value: function _drawStringGlyphs(renderer, font, glyphs, fontSize, offsetX, offsetY) {
            var margin = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
            renderer.save();
            renderer.translate(offsetX, offsetY);
            for (var i = 0; i < glyphs.length; i++) {
              var glyph = glyphs[i];
              var glyphScale = fontSize / font.size;
              var glyphWidth = glyph.advanceWidth * glyphScale;
              if (!glyph.isSurfaceValid) {
                glyph = this._createGlyph(glyph.code, font);
                if (!glyph) continue;
              }
              renderer.save();
              renderer.transform([glyphScale, 0, 0, glyphScale, 0, 0]);
              if (glyph.width > 0 && glyph.height > 0) {
                renderer.drawImage(glyph.surface, glyph.x, glyph.y, glyph.width, glyph.height, glyph.offsetX, glyph.offsetY);
              }
              renderer.restore();
              renderer.translate(glyphWidth + margin, 0);
            }
            renderer.restore();
          }
          // ルビベースとルビテキストの描画
        }, {
          key: "_drawRubyFragmentDrawInfo",
          value: function _drawRubyFragmentDrawInfo(renderer, rubyDrawInfo, rbOffsetY, rtOffsetY) {
            var f = rubyDrawInfo.fragment;
            var rubyFontSize = "rubyFontSize" in f ? f.rubyFontSize : this.rubyOptions.rubyFontSize;
            var rubyAlign = "rubyAlign" in f ? f.rubyAlign : this.rubyOptions.rubyAlign;
            var rubyFont = "rubyFont" in f ? f.rubyFont : this.rubyOptions.rubyFont;
            var isRtWideThanRb = rubyDrawInfo.rtWidth > rubyDrawInfo.rbWidth;
            var width = rubyDrawInfo.width;
            var rtWidth = rubyDrawInfo.rtWidth;
            var rbWidth = rubyDrawInfo.rbWidth;
            var rtStartPositionX;
            var rbStartPositionX;
            var rtUnitMargin;
            var rbUnitMargin;
            switch (rubyAlign) {
              case rp.RubyAlign.Center:
                rtUnitMargin = 0;
                rbUnitMargin = 0;
                rtStartPositionX = isRtWideThanRb ? 0 : (width - rtWidth) / 2;
                rbStartPositionX = isRtWideThanRb ? (width - rbWidth) / 2 : 0;
                break;
              case rp.RubyAlign.SpaceAround:
                rtUnitMargin = rubyDrawInfo.rubyGlyphs.length > 0 ? (width - rtWidth) / rubyDrawInfo.rubyGlyphs.length : 0;
                rbUnitMargin = 0;
                rtStartPositionX = isRtWideThanRb ? 0 : rtUnitMargin / 2;
                rbStartPositionX = isRtWideThanRb ? (width - rbWidth) / 2 : 0;
                break;
              default:
                throw g.ExceptionFactory.createAssertionError("Label#_drawRubyFragmentDrawInfo: unknown rubyAlign.");
            }
            this._drawStringGlyphs(renderer, this.font, rubyDrawInfo.glyphs, this.fontSize, rbStartPositionX, rbOffsetY, rbUnitMargin);
            this._drawStringGlyphs(renderer, rubyFont, rubyDrawInfo.rubyGlyphs, rubyFontSize, rtStartPositionX, rtOffsetY, rtUnitMargin);
          }
        }, {
          key: "_calcRubyHeightInfo",
          value: function _calcRubyHeightInfo(drawInfoArray) {
            var maxRubyFontSize = this.rubyOptions.rubyFontSize;
            var maxRubyGlyphHeightWithOffsetY = 0;
            var maxRubyGap = this.rubyOptions.rubyGap;
            var hasRubyFragmentDrawInfo = false;
            var maxRealDrawHeight = 0;
            var realOffsetY;
            for (var i = 0; i < drawInfoArray.length; i++) {
              var ri = drawInfoArray[i];
              if (ri instanceof fr.RubyFragmentDrawInfo) {
                var f = ri.fragment;
                if (f.rubyFontSize > maxRubyFontSize) {
                  maxRubyFontSize = f.rubyFontSize;
                }
                if (f.rubyGap > maxRubyGap) {
                  maxRubyGap = f.rubyGap;
                }
                var fontSize = f.rubyFontSize ? f.rubyFontSize : this.rubyOptions.rubyFontSize;
                var size = f.rubyFont ? f.rubyFont.size : this.rubyOptions.rubyFont.size;
                var rubyGlyphScale = fontSize / size;
                var currentMaxRubyGlyphHeightWithOffsetY = Math.max.apply(Math, ri.rubyGlyphs.map(function (glyph) {
                  return glyph.offsetY > 0 ? glyph.height + glyph.offsetY : glyph.height;
                }));
                var currentMinRubyOffsetY = Math.min.apply(Math, ri.rubyGlyphs.map(function (glyph) {
                  return glyph.offsetY > 0 ? glyph.offsetY : 0;
                }));
                if (maxRubyGlyphHeightWithOffsetY < currentMaxRubyGlyphHeightWithOffsetY * rubyGlyphScale) {
                  maxRubyGlyphHeightWithOffsetY = currentMaxRubyGlyphHeightWithOffsetY * rubyGlyphScale;
                }
                var rubyFont = f.rubyFont ? f.rubyFont : this.rubyOptions.rubyFont;
                var currentRubyStandardOffsetY = this._calcStandardOffsetY(rubyFont);
                var currentFragmentRealDrawHeight = (currentMaxRubyGlyphHeightWithOffsetY - Math.min(currentMinRubyOffsetY, currentRubyStandardOffsetY)) * rubyGlyphScale;
                if (maxRealDrawHeight < currentFragmentRealDrawHeight) {
                  maxRealDrawHeight = currentFragmentRealDrawHeight;
                  // その行で描画されるルビのうち、もっとも実描画高さが高い文字が持つoffsetYを求める
                  realOffsetY = Math.min(currentMinRubyOffsetY, currentRubyStandardOffsetY) * rubyGlyphScale;
                }
                hasRubyFragmentDrawInfo = true;
              }
            }
            // ルビが無い行でもfixLineGapが真の場合ルビの高さを使う
            if (maxRubyGlyphHeightWithOffsetY === 0) {
              maxRubyGlyphHeightWithOffsetY = this.rubyOptions.rubyFontSize;
            }
            var minRubyMinusOffsetY = this.trimMarginTop ? realOffsetY : 0;
            return {
              maxRubyFontSize: maxRubyFontSize,
              maxRubyGlyphHeightWithOffsetY: maxRubyGlyphHeightWithOffsetY,
              minRubyMinusOffsetY: minRubyMinusOffsetY,
              maxRubyGap: maxRubyGap,
              hasRubyFragmentDrawInfo: hasRubyFragmentDrawInfo
            };
          }
        }, {
          key: "_divideToLines",
          value: function _divideToLines(fragmentArray) {
            var state = {
              resultLines: [],
              currentStringDrawInfo: new fr.StringDrawInfo("", 0, []),
              currentLineInfo: {
                sourceText: "",
                fragmentDrawInfoArray: [],
                width: 0,
                height: 0,
                minMinusOffsetY: 0,
                surface: undefined
              },
              reservedLineBreakPosition: null
            };
            for (var i = 0; i < fragmentArray.length; i++) {
              this._addFragmentToState(state, fragmentArray, i);
            }
            this._flushCurrentStringDrawInfo(state);
            this._feedLine(state); // 行末ではないが、状態をflushするため改行処理を呼ぶ
            return state.resultLines;
          }
        }, {
          key: "_addFragmentToState",
          value: function _addFragmentToState(state, fragments, index) {
            var fragment = fragments[index];
            if (state.reservedLineBreakPosition !== null) {
              state.reservedLineBreakPosition--;
            }
            if (state.reservedLineBreakPosition === 0) {
              this._flushCurrentStringDrawInfo(state);
              this._feedLine(state);
              state.reservedLineBreakPosition = null;
            }
            if (typeof fragment === "string" && fragment === "\r") {
              /*
              // 行末に改行記号が来た場合、禁則処理によって改行すべきかは判断を保留し、一旦禁則処理による改行はしないことにする
              if (this._needFixLineBreakByRule(state)) {
                  this._applyLineBreakRule(index, state);
              }
              */
              this._flushCurrentStringDrawInfo(state);
              this._feedLine(state);
            } else if (typeof fragment === "string") {
              var code = g.Util.charCodeAt(fragment, 0);
              if (!code) return;
              var glyph = this._createGlyph(code, this.font);
              if (!glyph) return;
              var glyphScale = this.fontSize / this.font.size;
              var glyphWidth = glyph.advanceWidth * glyphScale;
              if (this._needBreakLine(state, glyphWidth)) {
                this._breakLine(state, fragments, index);
              }
              state.currentStringDrawInfo.width += glyphWidth;
              state.currentStringDrawInfo.glyphs.push(glyph);
              state.currentStringDrawInfo.text += fragment;
            } else {
              var ri = this._createRubyFragmentDrawInfo(fragment);
              if (ri.width <= 0) return;
              this._flushCurrentStringDrawInfo(state);
              if (this._needBreakLine(state, ri.width)) {
                this._breakLine(state, fragments, index);
              }
              state.currentLineInfo.width += ri.width;
              state.currentLineInfo.fragmentDrawInfoArray.push(ri);
              state.currentLineInfo.sourceText += fragment.text;
            }
          }
        }, {
          key: "_createStringGlyph",
          value: function _createStringGlyph(text, font) {
            var glyphs = [];
            for (var i = 0; i < text.length; i++) {
              var code = g.Util.charCodeAt(text, i);
              if (!code) continue;
              var glyph = this._createGlyph(code, font);
              if (!glyph) continue;
              glyphs.push(glyph);
            }
            return glyphs;
          }
        }, {
          key: "_createGlyph",
          value: function _createGlyph(code, font) {
            var glyph = font.glyphForCharacter(code);
            if (!glyph) {
              var str = code & 0xFFFF0000 ? String.fromCharCode((code & 0xFFFF0000) >>> 16, code & 0xFFFF) : String.fromCharCode(code);
              console.warn("Label#_invalidateSelf(): failed to get a glyph for '" + str + "' " + "(BitmapFont might not have the glyph or DynamicFont might create a glyph larger than its atlas).");
            }
            return glyph;
          }
        }, {
          key: "_createRubyFragmentDrawInfo",
          value: function _createRubyFragmentDrawInfo(fragment) {
            var glyphs = this._createStringGlyph(fragment.rb, this.font);
            var rubyGlyphs = this._createStringGlyph(fragment.rt, this.rubyOptions.rubyFont);
            var rubyFont = "rubyFont" in fragment ? fragment.rubyFont : this.rubyOptions.rubyFont;
            var rubyFontSize = "rubyFontSize" in fragment ? fragment.rubyFontSize : this.rubyOptions.rubyFontSize;
            var glyphScale = this.fontSize / this.font.size;
            var rubyGlyphScale = rubyFontSize / rubyFont.size;
            var rbWidth = glyphs.length > 0 ? glyphs.map(function (glyph) {
              return glyph.advanceWidth;
            }).reduce(function (pre, cu) {
              return pre + cu;
            }) * glyphScale : 0;
            var rtWidth = rubyGlyphs.length > 0 ? rubyGlyphs.map(function (glyph) {
              return glyph.advanceWidth;
            }).reduce(function (pre, cu) {
              return pre + cu;
            }) * rubyGlyphScale : 0;
            var width = rbWidth > rtWidth ? rbWidth : rtWidth;
            return new fr.RubyFragmentDrawInfo(fragment, width, rbWidth, rtWidth, glyphs, rubyGlyphs);
          }
        }, {
          key: "_flushCurrentStringDrawInfo",
          value: function _flushCurrentStringDrawInfo(state) {
            if (state.currentStringDrawInfo.width > 0) {
              state.currentLineInfo.fragmentDrawInfoArray.push(state.currentStringDrawInfo);
              state.currentLineInfo.width += state.currentStringDrawInfo.width;
              state.currentLineInfo.sourceText += state.currentStringDrawInfo.text;
            }
            state.currentStringDrawInfo = new fr.StringDrawInfo("", 0, []);
          }
        }, {
          key: "_feedLine",
          value: function _feedLine(state) {
            var glyphScale = this.fontSize / this.font.size;
            var minOffsetY = Infinity;
            var minMinusOffsetY = 0;
            var maxGlyphHeightWithOffsetY = 0;
            state.currentLineInfo.fragmentDrawInfoArray.forEach(function (fragmentDrawInfo) {
              fragmentDrawInfo.glyphs.forEach(function (glyph) {
                if (minMinusOffsetY > glyph.offsetY) {
                  minMinusOffsetY = glyph.offsetY;
                }
                // offsetYの一番小さな値を探す
                if (minOffsetY > glyph.offsetY) minOffsetY = glyph.offsetY;
                var heightWithOffsetY = glyph.offsetY > 0 ? glyph.height + glyph.offsetY : glyph.height;
                if (maxGlyphHeightWithOffsetY < heightWithOffsetY) {
                  maxGlyphHeightWithOffsetY = heightWithOffsetY;
                }
              });
            });
            minMinusOffsetY = minMinusOffsetY * glyphScale;
            maxGlyphHeightWithOffsetY = state.currentLineInfo.fragmentDrawInfoArray.length > 0 ? maxGlyphHeightWithOffsetY * glyphScale - minMinusOffsetY : this.fontSize;
            maxGlyphHeightWithOffsetY = Math.ceil(maxGlyphHeightWithOffsetY);
            var rhi = this._calcRubyHeightInfo(state.currentLineInfo.fragmentDrawInfoArray);
            state.currentLineInfo.height = rhi.hasRubyFragmentDrawInfo || this.fixLineGap ? maxGlyphHeightWithOffsetY + rhi.maxRubyGlyphHeightWithOffsetY + rhi.maxRubyGap : maxGlyphHeightWithOffsetY;
            state.currentLineInfo.minMinusOffsetY = minMinusOffsetY;
            if (this.trimMarginTop) {
              var minOffsetYInRange = Math.min(minOffsetY, this._calcStandardOffsetY(this.font)) * glyphScale;
              state.currentLineInfo.height -= minOffsetYInRange;
              state.currentLineInfo.minMinusOffsetY += minOffsetYInRange;
            }
            state.resultLines.push(state.currentLineInfo);
            state.currentLineInfo = {
              sourceText: "",
              fragmentDrawInfoArray: [],
              width: 0,
              height: 0,
              minMinusOffsetY: 0,
              surface: undefined
            };
          }
        }, {
          key: "_needBreakLine",
          value: function _needBreakLine(state, width) {
            return this.lineBreak && width > 0 && state.reservedLineBreakPosition === null && state.currentLineInfo.width + state.currentStringDrawInfo.width + width > this._lineBreakWidth && state.currentLineInfo.width + state.currentStringDrawInfo.width > 0; // 行頭文字の場合は改行しない
          }
        }, {
          key: "_isDifferentRubyOptions",
          value: function _isDifferentRubyOptions(ro0, ro1) {
            return ro0.rubyFontSize !== ro1.rubyFontSize || ro0.rubyFont !== ro1.rubyFont || ro0.rubyGap !== ro1.rubyGap || ro0.rubyAlign !== ro1.rubyAlign;
          }
        }, {
          key: "_calcStandardOffsetY",
          value: function _calcStandardOffsetY(font) {
            // 標準的な高さを持つグリフとして `M` を利用するが明確な根拠は無い
            var text = "M";
            var glyphM = font.glyphForCharacter(text.charCodeAt(0));
            return glyphM.offsetY;
          }
          /** stateのcurrent系プロパティを禁則処理的に正しい構造に再構築する */
        }, {
          key: "_breakLine",
          value: function _breakLine(state, fragments, index) {
            var _this3 = this;
            if (!this.lineBreakRule) {
              this._flushCurrentStringDrawInfo(state);
              this._feedLine(state);
              return;
            }
            var correctLineBreakPosition = this.lineBreakRule(fragments, index); // 外部ルールが期待する改行位置
            var diff = correctLineBreakPosition - index;
            if (diff === 0) {
              this._flushCurrentStringDrawInfo(state);
              this._feedLine(state);
            } else if (diff > 0) {
              // 先送り改行
              state.reservedLineBreakPosition = diff;
            } else {
              // 巻き戻し改行
              this._flushCurrentStringDrawInfo(state);
              var droppedFragmentDrawInfoArray = [];
              // currentLineInfoのfragmentDrawInfoArrayを巻き戻す
              var _loop = function _loop() {
                var fragmentDrawInfoArray = state.currentLineInfo.fragmentDrawInfoArray;
                var lastDrawInfo = fragmentDrawInfoArray[fragmentDrawInfoArray.length - 1];
                if (lastDrawInfo instanceof fr.RubyFragmentDrawInfo) {
                  diff++;
                  droppedFragmentDrawInfoArray.push(lastDrawInfo);
                  fragmentDrawInfoArray.pop();
                } else {
                  if (-diff >= lastDrawInfo.text.length) {
                    diff += lastDrawInfo.text.length;
                    droppedFragmentDrawInfoArray.push(lastDrawInfo);
                    fragmentDrawInfoArray.pop();
                  } else {
                    var droppedGlyphs = lastDrawInfo.glyphs.splice(diff);
                    var glyphScale = _this3.fontSize / _this3.font.size;
                    var droppedDrawInfoWidth = droppedGlyphs.reduce(function (acc, glyph) {
                      return glyph.advanceWidth * glyphScale + acc;
                    }, 0);
                    lastDrawInfo.width -= droppedDrawInfoWidth;
                    var droppedDrawInfoText = lastDrawInfo.text.substring(lastDrawInfo.text.length + diff);
                    lastDrawInfo.text = lastDrawInfo.text.substring(0, lastDrawInfo.text.length + diff);
                    droppedFragmentDrawInfoArray.push(new fr.StringDrawInfo(droppedDrawInfoText, droppedDrawInfoWidth, droppedGlyphs));
                    diff = 0;
                  }
                }
              };
              while (diff < 0) {
                _loop();
              }
              // currentLineInfoのその他を更新する
              var droppedWidth = 0;
              var droppedSourceText = "";
              droppedFragmentDrawInfoArray.forEach(function (fragment) {
                droppedWidth += fragment.width;
                droppedSourceText += fragment.text;
              });
              state.currentLineInfo.width -= droppedWidth;
              var sourceText = state.currentLineInfo.sourceText;
              state.currentLineInfo.sourceText = sourceText.substr(0, sourceText.length - droppedSourceText.length);
              this._feedLine(state);
              state.currentLineInfo.fragmentDrawInfoArray = droppedFragmentDrawInfoArray;
              state.currentLineInfo.width = droppedWidth;
              state.currentLineInfo.sourceText = droppedSourceText;
            }
          }
        }]);
        return Label;
      }(g.CacheableE);
      exports.Label = Label;
    }, {
      "./DefaultRubyParser": 1,
      "./FragmentDrawInfo": 2,
      "./RubyParser": 4
    }],
    4: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.flatmap = exports.RubyAlign = void 0;
      var RubyAlign;
      (function (RubyAlign) {
        /**
         * rtの字間は固定で中央に揃える。
         */
        RubyAlign[RubyAlign["Center"] = 0] = "Center";
        /**
         * rb幅に合わせてrtの字間を揃える。
         */
        RubyAlign[RubyAlign["SpaceAround"] = 1] = "SpaceAround";
      })(RubyAlign = exports.RubyAlign || (exports.RubyAlign = {}));
      function flatmap(arr, func) {
        return Array.prototype.concat.apply([], arr.map(func));
      }
      exports.flatmap = flatmap;
    }, {}],
    5: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RubyAlign = exports.RubyParser = exports.Label = exports.FragmentDrawInfo = exports.defaultRubyParser = void 0;
      var DefaultRubyParser_1 = require("./DefaultRubyParser");
      Object.defineProperty(exports, "defaultRubyParser", {
        enumerable: true,
        get: function get() {
          return DefaultRubyParser_1.parse;
        }
      });
      exports.FragmentDrawInfo = require("./FragmentDrawInfo");
      var Label_1 = require("./Label");
      Object.defineProperty(exports, "Label", {
        enumerable: true,
        get: function get() {
          return Label_1.Label;
        }
      });
      exports.RubyParser = require("./RubyParser");
      var RubyParser_1 = require("./RubyParser");
      Object.defineProperty(exports, "RubyAlign", {
        enumerable: true,
        get: function get() {
          return RubyParser_1.RubyAlign;
        }
      });
    }, {
      "./DefaultRubyParser": 1,
      "./FragmentDrawInfo": 2,
      "./Label": 3,
      "./RubyParser": 4
    }],
    6: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ActionType = void 0;
      var ActionType;
      (function (ActionType) {
        ActionType[ActionType["Wait"] = 0] = "Wait";
        ActionType[ActionType["Call"] = 1] = "Call";
        ActionType[ActionType["TweenTo"] = 2] = "TweenTo";
        ActionType[ActionType["TweenBy"] = 3] = "TweenBy";
        ActionType[ActionType["TweenByMult"] = 4] = "TweenByMult";
        ActionType[ActionType["Cue"] = 5] = "Cue";
        ActionType[ActionType["Every"] = 6] = "Every";
      })(ActionType = exports.ActionType || (exports.ActionType = {}));
    }, {}],
    7: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Easing = void 0;
      /**
       * Easing関数群。
       * 参考: http://gizma.com/easing/
       */
      var Easing;
      (function (Easing) {
        /**
         * 入力値をlinearした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function linear(t, b, c, d) {
          return c * t / d + b;
        }
        Easing.linear = linear;
        /**
         * 入力値をeaseInQuadした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInQuad(t, b, c, d) {
          t /= d;
          return c * t * t + b;
        }
        Easing.easeInQuad = easeInQuad;
        /**
         * 入力値をeaseOutQuadした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeOutQuad(t, b, c, d) {
          t /= d;
          return -c * t * (t - 2) + b;
        }
        Easing.easeOutQuad = easeOutQuad;
        /**
         * 入力値をeaseInOutQuadした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInOutQuad(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          --t;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }
        Easing.easeInOutQuad = easeInOutQuad;
        /**
         * 入力値をeaseInQubicした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInCubic(t, b, c, d) {
          t /= d;
          return c * t * t * t + b;
        }
        Easing.easeInCubic = easeInCubic;
        /**
         * @deprecated この関数は非推奨機能である。代わりに `easeInCubic` を用いるべきである。
         */
        Easing.easeInQubic = easeInCubic;
        /**
         * 入力値をeaseOutQubicした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeOutCubic(t, b, c, d) {
          t /= d;
          --t;
          return c * (t * t * t + 1) + b;
        }
        Easing.easeOutCubic = easeOutCubic;
        /**
         * @deprecated この関数は非推奨機能である。代わりに `easeOutCubic` を用いるべきである。
         */
        Easing.easeOutQubic = easeOutCubic;
        /**
         * 入力値をeaseInOutQubicした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInOutCubic(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t + 2) + b;
        }
        Easing.easeInOutCubic = easeInOutCubic;
        /**
         * @deprecated この関数は非推奨機能である。代わりに `easeInOutCubic` を用いるべきである。
         */
        Easing.easeInOutQubic = easeInOutCubic;
        /**
         * 入力値をeaseInQuartした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInQuart(t, b, c, d) {
          t /= d;
          return c * t * t * t * t + b;
        }
        Easing.easeInQuart = easeInQuart;
        /**
         * 入力値をeaseOutQuartした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeOutQuart(t, b, c, d) {
          t /= d;
          --t;
          return -c * (t * t * t * t - 1) + b;
        }
        Easing.easeOutQuart = easeOutQuart;
        /**
         * 入力値をeaseInQuintした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInQuint(t, b, c, d) {
          t /= d;
          return c * t * t * t * t * t + b;
        }
        Easing.easeInQuint = easeInQuint;
        /**
         * 入力値をeaseOutQuintした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeOutQuint(t, b, c, d) {
          t /= d;
          --t;
          return c * (t * t * t * t * t + 1) + b;
        }
        Easing.easeOutQuint = easeOutQuint;
        /**
         * 入力値をeaseInOutQuintした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInOutQuint(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t * t * t + 2) + b;
        }
        Easing.easeInOutQuint = easeInOutQuint;
        /**
         * 入力値をeaseInSineした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInSine(t, b, c, d) {
          return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        }
        Easing.easeInSine = easeInSine;
        /**
         * 入力値をeaseOutSineした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeOutSine(t, b, c, d) {
          return c * Math.sin(t / d * (Math.PI / 2)) + b;
        }
        Easing.easeOutSine = easeOutSine;
        /**
         * 入力値をeaseInOutSineした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInOutSine(t, b, c, d) {
          return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        }
        Easing.easeInOutSine = easeInOutSine;
        /**
         * 入力値をeaseInExpoした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInExpo(t, b, c, d) {
          return c * Math.pow(2, 10 * (t / d - 1)) + b;
        }
        Easing.easeInExpo = easeInExpo;
        /**
         * 入力値をeaseInOutExpoした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInOutExpo(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
          --t;
          return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
        }
        Easing.easeInOutExpo = easeInOutExpo;
        /**
         * 入力値をeaseInCircした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInCirc(t, b, c, d) {
          t /= d;
          return -c * (Math.sqrt(1 - t * t) - 1) + b;
        }
        Easing.easeInCirc = easeInCirc;
        /**
         * 入力値をeaseOutCircした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeOutCirc(t, b, c, d) {
          t /= d;
          --t;
          return c * Math.sqrt(1 - t * t) + b;
        }
        Easing.easeOutCirc = easeOutCirc;
        /**
         * 入力値をeaseInOutCircした結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInOutCirc(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
          t -= 2;
          return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
        }
        Easing.easeInOutCirc = easeInOutCirc;
        /**
         * 入力値を easeInOutBack した結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeInOutBack(t, b, c, d) {
          var x = t / d;
          var c1 = 1.70158;
          var c2 = c1 * 1.525;
          var v = x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
          return b + c * v;
        }
        Easing.easeInOutBack = easeInOutBack;
        /**
         * 入力値を easeOutBounce した結果の現在位置を返す。
         * @param t 経過時間
         * @param b 開始位置
         * @param c 終了位置
         * @param d 所要時間
         */
        function easeOutBounce(t, b, c, d) {
          var x = t / d;
          var n1 = 7.5625;
          var d1 = 2.75;
          var v;
          if (x < 1 / d1) {
            v = n1 * x * x;
          } else if (x < 2 / d1) {
            v = n1 * (x -= 1.5 / d1) * x + 0.75;
          } else if (x < 2.5 / d1) {
            v = n1 * (x -= 2.25 / d1) * x + 0.9375;
          } else {
            v = n1 * (x -= 2.625 / d1) * x + 0.984375;
          }
          return b + c * v;
        }
        Easing.easeOutBounce = easeOutBounce;
      })(Easing = exports.Easing || (exports.Easing = {}));
    }, {}],
    8: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Timeline = void 0;
      var Tween_1 = require("./Tween");
      /**
       * タイムライン機能を提供するクラス。
       */
      var Timeline = /** @class */function () {
        /**
         * Timelineを生成する。
         * @param scene タイムラインを実行する `Scene`
         */
        function Timeline(scene) {
          this._scene = scene;
          this._tweens = [];
          this._tweensCreateQue = [];
          this._fps = this._scene.game.fps;
          this.paused = false;
          scene.onUpdate.add(this._handler, this);
        }
        /**
         * Timelineに紐付いたTweenを生成する。
         * @param target タイムライン処理の対象にするオブジェクト
         * @param option Tweenの生成オプション。省略された場合、 {modified: target.modified, destroyed: target.destroyed} が与えられた時と同様の処理を行う。
         */
        Timeline.prototype.create = function (target, option) {
          var t = new Tween_1.Tween(target, option);
          this._tweensCreateQue.push(t);
          return t;
        };
        /**
         * Timelineに紐付いたTweenを削除する。
         * @param tween 削除するTween。
         */
        Timeline.prototype.remove = function (tween) {
          var index = this._tweens.indexOf(tween);
          var queIndex = this._tweensCreateQue.indexOf(tween);
          if (index < 0 && queIndex < 0) {
            return;
          }
          tween.cancel(false);
        };
        /**
         * Timelineに紐付いた全Tweenのアクションを完了させる。詳細は `Tween#complete()`の説明を参照。
         */
        Timeline.prototype.completeAll = function () {
          for (var i = 0; i < this._tweens.length; ++i) {
            var tween = this._tweens[i];
            if (!tween.isFinished()) {
              tween.complete();
            }
          }
          for (var i = 0; i < this._tweensCreateQue.length; ++i) {
            var tween = this._tweensCreateQue[i];
            if (!tween.isFinished()) {
              tween.complete();
            }
          }
        };
        /**
         * Timelineに紐付いた全Tweenのアクションを取り消す。詳細は `Tween#cancel()`の説明を参照。
         * @param revert ターゲットのプロパティをアクション開始前に戻すかどうか (指定しない場合は `false`)
         */
        Timeline.prototype.cancelAll = function (revert) {
          if (revert === void 0) {
            revert = false;
          }
          for (var i = 0; i < this._tweens.length; ++i) {
            var tween = this._tweens[i];
            if (!tween.isFinished()) {
              tween.cancel(revert);
            }
          }
          for (var i = 0; i < this._tweensCreateQue.length; ++i) {
            var tween = this._tweensCreateQue[i];
            if (!tween.isFinished()) {
              tween.cancel(revert);
            }
          }
        };
        /**
         * Timelineに紐付いた全Tweenの紐付けを解除する。
         */
        Timeline.prototype.clear = function () {
          this.cancelAll(false);
        };
        /**
         * このTimelineを破棄する。
         */
        Timeline.prototype.destroy = function () {
          this.clear();
          if (!this._scene.destroyed()) {
            this._scene.onUpdate.remove(this._handler, this);
          }
          this._scene = undefined;
        };
        /**
         * このTimelineが破棄済みであるかを返す。
         */
        Timeline.prototype.destroyed = function () {
          return this._scene === undefined;
        };
        Timeline.prototype._handler = function () {
          if (this.paused || this._tweens.length + this._tweensCreateQue.length === 0) {
            return;
          }
          this._tweens = this._tweens.concat(this._tweensCreateQue);
          this._tweensCreateQue = [];
          var tmp = [];
          for (var i = 0; i < this._tweens.length; ++i) {
            var tween = this._tweens[i];
            if (!tween.shouldRemove()) {
              tween._fire(1000 / this._fps);
              tmp.push(tween);
            }
          }
          this._tweens = tmp;
        };
        return Timeline;
      }();
      exports.Timeline = Timeline;
    }, {
      "./Tween": 9
    }],
    9: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Tween = void 0;
      var ActionType_1 = require("./ActionType");
      var Easing_1 = require("./Easing");
      /**
       * オブジェクトの状態を変化させるアクションを定義するクラス。
       * 本クラスのインスタンス生成には`Timeline#create()`を利用する。
       */
      var Tween = /** @class */function () {
        /**
         * Tweenを生成する。
         * @param target 対象となるオブジェクト
         * @param option オプション
         */
        function Tween(target, option) {
          this._target = target;
          this._stepIndex = 0;
          this._loop = !!option && !!option.loop;
          this._stale = false;
          this._modifiedHandler = undefined;
          if (option && option.modified) {
            this._modifiedHandler = option.modified;
          } else if (target && target.modified) {
            this._modifiedHandler = target.modified;
          }
          this._destroyedHandler = undefined;
          if (option && option.destroyed) {
            this._destroyedHandler = option.destroyed;
          } else if (target && target.destroyed) {
            this._destroyedHandler = target.destroyed;
          }
          this._steps = [];
          this._lastStep = undefined;
          this._pararel = false;
          this._initialProp = {};
          this.paused = false;
        }
        /**
         * オブジェクトの状態を変化させるアクションを追加する。
         * @param props 変化内容
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.to = function (props, duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          var action = {
            input: props,
            duration: duration,
            easing: easing,
            type: ActionType_1.ActionType.TweenTo,
            initialized: false
          };
          this._push(action);
          return this;
        };
        /**
         * オブジェクトの状態を変化させるアクションを追加する。
         * 変化内容はアクション開始時を基準とした相対値で指定する。
         * @param props 変化内容
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         * @param multiply `true`を指定すると`props`の値をアクション開始時の値に掛け合わせた値が終了値となる（指定しない場合は`false`）
         */
        Tween.prototype.by = function (props, duration, easing, multiply) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          if (multiply === void 0) {
            multiply = false;
          }
          var type = multiply ? ActionType_1.ActionType.TweenByMult : ActionType_1.ActionType.TweenBy;
          var action = {
            input: props,
            duration: duration,
            easing: easing,
            type: type,
            initialized: false
          };
          this._push(action);
          return this;
        };
        /**
         * 次に追加されるアクションを、このメソッド呼び出しの直前に追加されたアクションと並列に実行させる。
         * `Tween#con()`で並列実行を指定されたアクションが全て終了後、次の並列実行を指定されていないアクションを実行する。
         */
        Tween.prototype.con = function () {
          this._pararel = true;
          return this;
        };
        /**
         * オブジェクトの変化を停止するアクションを追加する。
         * @param duration 停止する時間（ミリ秒）
         */
        Tween.prototype.wait = function (duration) {
          var action = {
            duration: duration,
            type: ActionType_1.ActionType.Wait,
            initialized: false
          };
          this._push(action);
          return this;
        };
        /**
         * 関数を即座に実行するアクションを追加する。
         * @param func 実行する関数
         */
        Tween.prototype.call = function (func) {
          var action = {
            func: func,
            type: ActionType_1.ActionType.Call,
            duration: 0,
            initialized: false
          };
          this._push(action);
          return this;
        };
        /**
         * 一時停止するアクションを追加する。
         * 内部的には`Tween#call()`で`Tween#paused`に`true`をセットしている。
         */
        Tween.prototype.pause = function () {
          var _this = this;
          return this.call(function () {
            _this.paused = true;
          });
        };
        /**
         * 待機時間をキーとして実行したい関数を複数指定する。
         * @param actions 待機時間をキーとして実行したい関数を値としたオブジェクト
         */
        Tween.prototype.cue = function (funcs) {
          var keys = Object.keys(funcs);
          keys.sort(function (a, b) {
            return Number(a) > Number(b) ? 1 : -1;
          });
          var q = [];
          for (var i = 0; i < keys.length; ++i) {
            q.push({
              time: Number(keys[i]),
              func: funcs[keys[i]]
            });
          }
          var action = {
            type: ActionType_1.ActionType.Cue,
            duration: Number(keys[keys.length - 1]),
            cue: q,
            initialized: false
          };
          this._push(action);
          return this;
        };
        /**
         * 指定した時間を経過するまで毎フレーム指定した関数を呼び出すアクションを追加する。
         * @param func 毎フレーム呼び出される関数。第一引数は経過時間、第二引数はEasingした結果の変化量（0-1）となる。
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.every = function (func, duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          var action = {
            func: func,
            type: ActionType_1.ActionType.Every,
            easing: easing,
            duration: duration,
            initialized: false
          };
          this._push(action);
          return this;
        };
        /**
         * ターゲットをフェードインさせるアクションを追加する。
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.fadeIn = function (duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          return this.to({
            opacity: 1
          }, duration, easing);
        };
        /**
         * ターゲットをフェードアウトさせるアクションを追加する。
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.fadeOut = function (duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          return this.to({
            opacity: 0
          }, duration, easing);
        };
        /**
         * ターゲットを指定した座標に移動するアクションを追加する。
         * @param x x座標
         * @param y y座標
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.moveTo = function (x, y, duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          return this.to({
            x: x,
            y: y
          }, duration, easing);
        };
        /**
         * ターゲットを指定した相対座標に移動するアクションを追加する。相対座標の基準値はアクション開始時の座標となる。
         * @param x x座標
         * @param y y座標
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.moveBy = function (x, y, duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          return this.by({
            x: x,
            y: y
          }, duration, easing);
        };
        /**
         * ターゲットのX座標を指定した座標に移動するアクションを追加する。
         * @param x x座標
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.moveX = function (x, duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          return this.to({
            x: x
          }, duration, easing);
        };
        /**
         * ターゲットのY座標を指定した座標に移動するアクションを追加する。
         * @param y y座標
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.moveY = function (y, duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          return this.to({
            y: y
          }, duration, easing);
        };
        /**
         * ターゲットを指定した角度に回転するアクションを追加する。
         * @param angle 角度
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.rotateTo = function (angle, duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          return this.to({
            angle: angle
          }, duration, easing);
        };
        /**
         * ターゲットをアクション開始時の角度を基準とした相対角度に回転するアクションを追加する。
         * @param angle 角度
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.rotateBy = function (angle, duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          return this.by({
            angle: angle
          }, duration, easing);
        };
        /**
         * ターゲットを指定した倍率に拡縮するアクションを追加する。
         * @param scaleX X方向の倍率
         * @param scaleY Y方向の倍率
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.scaleTo = function (scaleX, scaleY, duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          return this.to({
            scaleX: scaleX,
            scaleY: scaleY
          }, duration, easing);
        };
        /**
         * ターゲットのアクション開始時の倍率に指定した倍率を掛け合わせた倍率に拡縮するアクションを追加する。
         * @param scaleX X方向の倍率
         * @param scaleY Y方向の倍率
         * @param duration 変化に要する時間（ミリ秒）
         * @param easing Easing関数（指定しない場合は`Easing.linear`）
         */
        Tween.prototype.scaleBy = function (scaleX, scaleY, duration, easing) {
          if (easing === void 0) {
            easing = Easing_1.Easing.linear;
          }
          return this.by({
            scaleX: scaleX,
            scaleY: scaleY
          }, duration, easing, true);
        };
        /**
         * このTweenに追加されたすべてのアクションを即座に完了する。
         * `Tween#loop`が`true`の場合、ループの終端までのアクションがすべて実行される。
         */
        Tween.prototype.complete = function () {
          for (var i = this._stepIndex; i < this._steps.length; ++i) {
            for (var j = 0; j < this._steps[i].length; ++j) {
              var action = this._steps[i][j];
              if (!action.initialized) {
                this._initAction(action);
              }
              var keys = Object.keys(action.goal);
              for (var k = 0; k < keys.length; ++k) {
                var key = keys[k];
                this._target[key] = action.goal[key];
              }
              if (action.type === ActionType_1.ActionType.Call && typeof action.func === "function") {
                action.func.call(this._target);
              } else if (action.type === ActionType_1.ActionType.Cue && action.cue) {
                for (var k = 0; k < action.cue.length; ++k) {
                  action.cue[k].func.call(this._target);
                }
              } else if (action.type === ActionType_1.ActionType.Every && typeof action.func === "function") {
                action.func.call(this._target, action.duration, 1);
              }
            }
          }
          this._stepIndex = this._steps.length;
          this._loop = false;
          this._lastStep = undefined;
          this._pararel = false;
          this.paused = false;
          if (this._modifiedHandler) {
            this._modifiedHandler.call(this._target);
          }
        };
        /**
         * このTweenに追加されたすべてのアクションを取り消す。
         * `revert`を`true` にした場合、ターゲットのプロパティをアクション開始前に戻す。
         * ただし`Tween#call()`や`Tween#every()`により変更されたプロパティは戻らない点に注意。
         * @param revert ターゲットのプロパティをアクション開始前に戻すかどうか (指定しない場合は `false`)
         */
        Tween.prototype.cancel = function (revert) {
          if (revert === void 0) {
            revert = false;
          }
          if (revert) {
            var keys = Object.keys(this._initialProp);
            for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              this._target[key] = this._initialProp[key];
            }
          }
          this._stepIndex = this._steps.length;
          this._loop = false;
          this._lastStep = undefined;
          this._pararel = false;
          this.paused = false;
          this._stale = true;
          if (this._modifiedHandler) {
            this._modifiedHandler.call(this._target);
          }
        };
        /**
         * アニメーションが終了しているかどうかを返す。
         * `_target`が破棄された場合又は、全アクションの実行が終了した場合に`true`を返す。
         */
        Tween.prototype.isFinished = function () {
          var ret = false;
          if (this._destroyedHandler) {
            ret = this._destroyedHandler.call(this._target);
          }
          if (!ret) {
            ret = this._stepIndex !== 0 && this._stepIndex >= this._steps.length && !this._loop;
          }
          return ret;
        };
        /**
         * アニメーションが削除可能かどうかを返す。
         * 通常、ゲーム開発者がこのメソッドを呼び出す必要はない。
         */
        Tween.prototype.shouldRemove = function () {
          return this._stale || this.isFinished();
        };
        /**
         * アニメーションを実行する。
         * @param delta 前フレームからの経過時間
         */
        Tween.prototype._fire = function (delta) {
          if (this._steps.length === 0 || this.isFinished() || this.paused) {
            return;
          }
          if (this._stepIndex >= this._steps.length) {
            if (this._loop) {
              this._stepIndex = 0;
            } else {
              return;
            }
          }
          var actions = this._steps[this._stepIndex];
          var remained = false;
          for (var i = 0; i < actions.length; ++i) {
            var action = actions[i];
            if (!action.initialized) {
              this._initAction(action);
            }
            if (action.finished) {
              continue;
            }
            action.elapsed += delta;
            switch (action.type) {
              case ActionType_1.ActionType.Call:
                action.func.call(this._target);
                break;
              case ActionType_1.ActionType.Every:
                var elapsed = Math.min(action.elapsed, action.duration);
                var progress = action.easing(elapsed, 0, 1, action.duration);
                if (progress > 1) {
                  progress = 1;
                }
                action.func.call(this._target, elapsed, progress);
                break;
              case ActionType_1.ActionType.TweenTo:
              case ActionType_1.ActionType.TweenBy:
              case ActionType_1.ActionType.TweenByMult:
                var keys = Object.keys(action.goal);
                for (var j = 0; j < keys.length; ++j) {
                  var key = keys[j];
                  // アクションにより undefined が指定されるケースと初期値を区別するため Object.prototype.hasOwnProperty() を利用
                  // (number以外が指定されるケースは存在しないが念の為)
                  if (!this._initialProp.hasOwnProperty(key)) {
                    this._initialProp[key] = this._target[key];
                  }
                  if (action.elapsed >= action.duration) {
                    this._target[key] = action.goal[key];
                  } else {
                    this._target[key] = action.easing(action.elapsed, action.start[key], action.goal[key] - action.start[key], action.duration);
                  }
                }
                break;
              case ActionType_1.ActionType.Cue:
                var cueAction = action.cue[action.cueIndex];
                if (cueAction !== undefined && action.elapsed >= cueAction.time) {
                  cueAction.func.call(this._target);
                  ++action.cueIndex;
                }
                break;
            }
            if (this._modifiedHandler) {
              this._modifiedHandler.call(this._target);
            }
            if (action.elapsed >= action.duration) {
              action.finished = true;
            } else {
              remained = true;
            }
          }
          if (!remained) {
            for (var k = 0; k < actions.length; ++k) {
              actions[k].initialized = false;
            }
            ++this._stepIndex;
          }
        };
        /**
         * Tweenの実行状態をシリアライズして返す。
         */
        Tween.prototype.serializeState = function () {
          var tData = {
            _stepIndex: this._stepIndex,
            _initialProp: this._initialProp,
            _steps: []
          };
          for (var i = 0; i < this._steps.length; ++i) {
            tData._steps[i] = [];
            for (var j = 0; j < this._steps[i].length; ++j) {
              tData._steps[i][j] = {
                input: this._steps[i][j].input,
                start: this._steps[i][j].start,
                goal: this._steps[i][j].goal,
                duration: this._steps[i][j].duration,
                elapsed: this._steps[i][j].elapsed,
                type: this._steps[i][j].type,
                cueIndex: this._steps[i][j].cueIndex,
                initialized: this._steps[i][j].initialized,
                finished: this._steps[i][j].finished
              };
            }
          }
          return tData;
        };
        /**
         * Tweenの実行状態を復元する。
         * @param serializedstate 復元に使う情報。
         */
        Tween.prototype.deserializeState = function (serializedState) {
          this._stepIndex = serializedState._stepIndex;
          this._initialProp = serializedState._initialProp;
          for (var i = 0; i < serializedState._steps.length; ++i) {
            for (var j = 0; j < serializedState._steps[i].length; ++j) {
              if (!serializedState._steps[i][j] || !this._steps[i][j]) continue;
              this._steps[i][j].input = serializedState._steps[i][j].input;
              this._steps[i][j].start = serializedState._steps[i][j].start;
              this._steps[i][j].goal = serializedState._steps[i][j].goal;
              this._steps[i][j].duration = serializedState._steps[i][j].duration;
              this._steps[i][j].elapsed = serializedState._steps[i][j].elapsed;
              this._steps[i][j].type = serializedState._steps[i][j].type;
              this._steps[i][j].cueIndex = serializedState._steps[i][j].cueIndex;
              this._steps[i][j].initialized = serializedState._steps[i][j].initialized;
              this._steps[i][j].finished = serializedState._steps[i][j].finished;
            }
          }
        };
        /**
         * `this._pararel`が`false`の場合は新規にステップを作成し、アクションを追加する。
         * `this._pararel`が`true`の場合は最後に作成したステップにアクションを追加する。
         */
        Tween.prototype._push = function (action) {
          if (this._pararel) {
            this._lastStep.push(action);
          } else {
            var index = this._steps.push([action]) - 1;
            this._lastStep = this._steps[index];
          }
          this._pararel = false;
        };
        Tween.prototype._initAction = function (action) {
          action.elapsed = 0;
          action.start = {};
          action.goal = {};
          action.cueIndex = 0;
          action.finished = false;
          action.initialized = true;
          if (action.type !== ActionType_1.ActionType.TweenTo && action.type !== ActionType_1.ActionType.TweenBy && action.type !== ActionType_1.ActionType.TweenByMult) {
            return;
          }
          var keys = Object.keys(action.input);
          for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (this._target[key] !== undefined) {
              action.start[key] = this._target[key];
              if (action.type === ActionType_1.ActionType.TweenTo) {
                action.goal[key] = action.input[key];
              } else if (action.type === ActionType_1.ActionType.TweenBy) {
                action.goal[key] = action.start[key] + action.input[key];
              } else if (action.type === ActionType_1.ActionType.TweenByMult) {
                action.goal[key] = action.start[key] * action.input[key];
              }
            }
          }
        };
        return Tween;
      }();
      exports.Tween = Tween;
    }, {
      "./ActionType": 6,
      "./Easing": 7
    }],
    10: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Easing = exports.Tween = exports.Timeline = void 0;
      var Timeline_1 = require("./Timeline");
      Object.defineProperty(exports, "Timeline", {
        enumerable: true,
        get: function get() {
          return Timeline_1.Timeline;
        }
      });
      var Tween_1 = require("./Tween");
      Object.defineProperty(exports, "Tween", {
        enumerable: true,
        get: function get() {
          return Tween_1.Tween;
        }
      });
      var Easing_1 = require("./Easing");
      Object.defineProperty(exports, "Easing", {
        enumerable: true,
        get: function get() {
          return Easing_1.Easing;
        }
      });
    }, {
      "./Easing": 7,
      "./Timeline": 8,
      "./Tween": 9
    }],
    11: [function (require, module, exports) {
      var system = require("./systems");
      function main() {
        system.openingScene.onLoad.add(function () {
          system.createGround(system.openingScene);
          system.showDisplay(system.openingScene);
          system.showRules(system.openingScene);
          system.openingScene.onPointDownCapture.add(function () {
            g.game.replaceScene(system.gameScene);
          });
        });
        g.game.pushScene(system.openingScene);
        system.gameScene.onLoad.add(function () {
          //音量調整
          system.bgmConfig();
          //地面生成
          system.createGround(system.gameScene);
          //虫生成
          system.numberingInsects();
          //ディスプレイ表示
          system.showDisplay(system.gameScene);
          //目標の形質と最初の親の設定
          system.setGoal();
        });
      }
      ;
      module.exports = main;
    }, {
      "./systems": 12
    }],
    12: [function (require, module, exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.clearStage = exports.setGoal = exports.announce = exports.showDisplay = exports.numberingInsects = exports.createInsect = exports.showRules = exports.bgmConfig = exports.createGround = exports.openingScene = exports.gameScene = void 0;
      var tl = require("@akashic-extension/akashic-timeline");
      var al = require("@akashic-extension/akashic-label");
      exports.gameScene = new g.Scene({
        game: g.game,
        assetIds: ["bgm", "成功", "失敗", "touch"]
      });
      exports.openingScene = new g.Scene({
        game: g.game
      });
      var timeline = new tl.Timeline(exports.gameScene);
      function createGround(scene) {
        var ground = new g.FilledRect({
          scene: scene,
          width: g.game.width,
          height: g.game.height,
          cssColor: "wheat"
        });
        scene.append(ground);
      }
      exports.createGround = createGround;
      function bgmConfig() {
        var bgm = exports.gameScene.assets.bgm;
        var player = bgm.play();
        player.changeVolume(0.7);
      }
      exports.bgmConfig = bgmConfig;
      var monospace = new g.DynamicFont({
        game: g.game,
        fontFamily: "monospace",
        size: 30
      });
      var sansserif = new g.DynamicFont({
        game: g.game,
        fontFamily: "sans-serif",
        size: 30
      });
      function showRules(openingScene) {
        var back = new g.FilledRect({
          scene: openingScene,
          cssColor: "black",
          width: 450,
          height: 450,
          x: g.game.width / 2,
          y: g.game.height / 2,
          anchorX: 0.5,
          anchorY: 0.5
        });
        var rules = new al.Label({
          scene: openingScene,
          font: monospace,
          text: "\u30E0\u30B7\u3068\u30E0\u30B7\u3092\u4EA4\u914D\u3055\u305B\u3066\n\u76EE\u6A19\u306E\u5F62\u8CEA\u3092\u6301\u3063\u305F\u866B\u3092\u4F5C\u308D\u3046\uFF01\n\n\n\uFF65\u76EE\u6A19\u3068\u6700\u521D\u306E\u89AAA\u306F\u30E9\u30F3\u30C0\u30E0\u306B\u9078\u3070\u308C\u308B\u305E\n\uFF65\u89AAA\u3068\u4EA4\u914D\u3055\u305B\u308B\u89AAB\u3092\u30AF\u30EA\u30C3\u30AF\u3067\u9078\u307C\u3046\n\uFF65\u751F\u307E\u308C\u305FX\u306FA\u3068B\u306E\u8981\u7D20\u3092\u907A\u4F1D\u3057\u3066\u3044\u308B\u305E\n\uFF65X\u304C\u76EE\u6A19\u306E\u5F62\u8CEA\u3068\u5B8C\u5168\u4E00\u81F4\u306A\u3089\u30AF\u30EA\u30A2\uFF01\n(\u5B8C\u5168\u4E00\u81F4\u3067\u306A\u3051\u308C\u3070X\u304C\u6B21\u306E\u89AAA\u3068\u306A\u308B\u3002\n\u30AF\u30EA\u30C3\u30AF\u3067\u307E\u305F\u89AAB\u3092\u9078\u307C\u3046)\n\n\n\u30D2\u30F3\u30C8\n\u907A\u4F1D\u8981\u7D20\u306F\uFF62\u30C4\u30CE\u306E\u6709\u7121\uFF63\uFF62\u4F53\u306E\u8272\uFF63\uFF62\u5927\u304D\u3055\uFF63\u3060\u3002\nX\u306FA\u3068B\u304B\u3089\u3069\u308C\u304B\u3072\u3068\u3064\u305A\u3064\u3092\u5F15\u304D\u7D99\u3050\u305E\u3002\n\u6B8B\u308A\u3072\u3068\u3064\u306F\u30E9\u30F3\u30C0\u30E0\u306B\u6C7A\u307E\u308B\u3093\u3060\u3002",
          fontSize: 20,
          textColor: "white",
          x: g.game.width / 2,
          y: g.game.height / 2,
          anchorX: 0.5,
          anchorY: 0.5,
          width: 430
        });
        openingScene.append(back);
        openingScene.append(rules);
      }
      exports.showRules = showRules;
      var isTouchable = false;
      var switchIsTouchable = function switchIsTouchable() {
        if (isTouchable === false) {
          isTouchable = true;
        } else if (isTouchable === true) {
          isTouchable = false;
        }
      };
      var sePlay = function sePlay() {
        exports.gameScene.assets["成功"].play();
      };
      var InsectRect = /*#__PURE__*/function (_g$FilledRect) {
        _inherits(InsectRect, _g$FilledRect);
        var _super2 = _createSuper(InsectRect);
        function InsectRect() {
          var _this4;
          _classCallCheck(this, InsectRect);
          _this4 = _super2.apply(this, arguments);
          _this4.gene = new Array(3);
          return _this4;
        }
        return _createClass(InsectRect);
      }(g.FilledRect);
      function createInsect(scene, colorIndex, bodySizeIndex, hornSizeIndex) {
        var direction = [0, 90, 180, 270];
        var directionIndex = Math.floor(g.game.random.generate() * direction.length);
        var leg1X = Math.floor(g.game.random.generate() * g.game.width);
        var leg1Y = Math.floor(g.game.random.generate() * g.game.height);
        var bodySize = [1, 1.3];
        var hornSize = [0, 20];
        var isRotating = false;
        var leftRight = 0;
        var leg1 = new InsectRect({
          scene: scene,
          x: g.game.width / 2,
          y: 80,
          width: 60,
          height: 5,
          cssColor: "black",
          anchorX: 0.5,
          anchorY: 0.5
        });
        var leg2 = new g.FilledRect({
          scene: scene,
          x: 0,
          y: 13,
          width: 60,
          height: 5,
          cssColor: "black",
          parent: leg1
        });
        var leg3 = new g.FilledRect({
          scene: scene,
          x: 0,
          y: 26,
          width: 60,
          height: 5,
          cssColor: "black",
          parent: leg1
        });
        var colors = ["darkcyan", "orange", "crimson", "darkslategray"];
        var body = new g.FilledRect({
          scene: scene,
          x: 10,
          y: -30,
          width: 40,
          height: 70,
          cssColor: colors[colorIndex],
          parent: leg1
        });
        var segment = new g.FilledRect({
          scene: scene,
          x: 10,
          y: -10,
          width: 40,
          height: 5,
          cssColor: "maroon",
          parent: leg1
        });
        var leftHorn = new g.FilledRect({
          scene: scene,
          x: 10,
          y: -50,
          width: 9,
          height: hornSize[hornSizeIndex],
          cssColor: "black",
          parent: leg1
        });
        var rightHorn = new g.FilledRect({
          scene: scene,
          x: 41,
          y: -50,
          width: 9,
          height: hornSize[hornSizeIndex],
          cssColor: "black",
          parent: leg1
        });
        leg1.angle = direction[directionIndex];
        leg1.x = leg1X;
        leg1.y = leg1Y;
        leg1.scaleX = bodySize[bodySizeIndex];
        leg1.scaleY = bodySize[bodySizeIndex];
        // フラグ管理に使う
        leg1.tag = true;
        leg1.gene = [colorIndex, bodySizeIndex, hornSizeIndex];
        leg1.onUpdate.add(function () {
          if (leg1.tag !== true) {
            return;
          }
          var _moveInsect = moveInsect(leg1, isRotating, leftRight);
          var _moveInsect2 = _slicedToArray(_moveInsect, 2);
          isRotating = _moveInsect2[0];
          leftRight = _moveInsect2[1];
        });
        body.touchable = true;
        body.onPointDown.add(function () {
          if (isTouchable === true && leg1.tag === true) {
            scene.append(leg1);
            scene.assets["失敗"].play();
            leg1.tag = false;
            parentIndexB = leg1.number;
            var parent = timeline.create(leg1);
            parent.call(switchIsTouchable).moveTo(g.game.width - 100, 260, 3000).con().rotateTo(0, 3000).call(sePlay);
            scene.setTimeout(function () {
              generateChild();
            }, 4500);
          }
        });
        return leg1;
      }
      exports.createInsect = createInsect;
      var insects = new Array(15);
      var numberingCounter = 0;
      function numberingInsects() {
        for (var colorIdx = 0; colorIdx < 4; colorIdx++) {
          for (var sizeIdx = 0; sizeIdx < 2; sizeIdx++) {
            for (var hornSizeIdx = 0; hornSizeIdx < 2; hornSizeIdx++) {
              insects[numberingCounter] = createInsect(exports.gameScene, colorIdx, sizeIdx, hornSizeIdx);
              insects[numberingCounter].number = numberingCounter;
              exports.gameScene.append(insects[numberingCounter]);
              numberingCounter++;
            }
          }
        }
      }
      exports.numberingInsects = numberingInsects;
      function generateChild() {
        var geneA = insects[parentIndexA].gene;
        var geneB = insects[parentIndexB].gene;
        var geneticElementIndexA = Math.floor(g.game.random.generate() * geneA.length);
        var geneticElementIndexB;
        do {
          geneticElementIndexB = Math.floor(g.game.random.generate() * geneB.length);
        } while (geneticElementIndexB === geneticElementIndexA);
        var newGene = [null, null, null];
        newGene[geneticElementIndexA] = geneA[geneticElementIndexA];
        newGene[geneticElementIndexB] = geneB[geneticElementIndexB];
        if (geneticElementIndexA + geneticElementIndexB === 3) {
          newGene[0] = Math.floor(g.game.random.generate() * 3);
        } else if (geneticElementIndexA + geneticElementIndexB === 2) {
          newGene[1] = Math.floor(g.game.random.generate() * 1);
        } else if (geneticElementIndexA + geneticElementIndexB === 1) {
          newGene[2] = Math.floor(g.game.random.generate() * 1);
        }
        insects[numberingCounter] = createInsect(exports.gameScene, newGene[0], newGene[1], newGene[2]);
        insects[numberingCounter].x = g.game.width - 100;
        insects[numberingCounter].y = 420;
        insects[numberingCounter].tag = false;
        insects[numberingCounter].angle = 0;
        exports.gameScene.append(insects[numberingCounter]);
        sePlay();
        checkClear();
      }
      function checkClear() {
        if (insects[targetIndex].gene[0] === insects[numberingCounter].gene[0] && insects[targetIndex].gene[1] === insects[numberingCounter].gene[1] && insects[targetIndex].gene[2] === insects[numberingCounter].gene[2]) {
          clearStage();
        } else {
          var parentA = timeline.create(insects[parentIndexA]);
          var parentB = timeline.create(insects[parentIndexB]);
          var child = timeline.create(insects[numberingCounter]);
          exports.gameScene.setTimeout(function () {
            parentA.rotateBy(1800, 1000).con().moveBy(Math.floor(g.game.random.generate() * (100 - -100 + 1)) + -100, 600, 1000).call(insects[parentIndexA].destroy);
            parentB.rotateBy(1800, 1000).con().moveBy(Math.floor(g.game.random.generate() * (100 - -100 + 1)) + -100, 600, 1000, tl.Easing.easeOutSine).call(insects[parentIndexB].destroy);
            child.wait(2000).moveTo(g.game.width - 100, 100, 1500).call(switchIsTouchable);
          }, 2000);
          parentIndexA = numberingCounter;
          numberingCounter++;
        }
      }
      function showDisplay(scene) {
        var frame0 = new g.FilledRect({
          scene: scene,
          x: 100,
          y: 30,
          width: 80 * 1.3,
          height: 100 * 1.3,
          cssColor: "white",
          anchorX: 0.5
        });
        var frame1 = new g.FilledRect({
          scene: scene,
          x: exports.gameScene.game.width - 100,
          y: 30,
          width: 80 * 1.3,
          height: 100 * 1.3,
          cssColor: "white",
          anchorX: 0.5
        });
        var frame2 = new g.FilledRect({
          scene: scene,
          x: exports.gameScene.game.width - 100,
          y: 190,
          width: 80 * 1.3,
          height: 100 * 1.3,
          cssColor: "white",
          anchorX: 0.5
        });
        var frame3 = new g.FilledRect({
          scene: scene,
          x: exports.gameScene.game.width - 100,
          y: 350,
          width: 80 * 1.3,
          height: 100 * 1.3,
          cssColor: "white",
          anchorX: 0.5
        });
        var multiply = new al.Label({
          scene: scene,
          font: sansserif,
          text: "*",
          fontSize: 50,
          textColor: "red",
          x: g.game.width - 92,
          y: 170,
          anchorX: 0.5,
          anchorY: 0.5,
          width: 50
        });
        var arrow = new al.Label({
          scene: scene,
          font: sansserif,
          text: "\u2193",
          fontSize: 50,
          textColor: "red",
          x: g.game.width - 102,
          y: 323,
          anchorX: 0.5,
          anchorY: 0.5,
          width: 50
        });
        var A = new al.Label({
          scene: scene,
          font: sansserif,
          text: "A",
          fontSize: 70,
          textColor: "red",
          x: g.game.width - 75,
          y: 50,
          anchorX: 0.5,
          width: 100
        });
        var B = new al.Label({
          scene: scene,
          font: sansserif,
          text: "B",
          fontSize: 70,
          textColor: "red",
          x: g.game.width - 75,
          y: 210,
          anchorX: 0.5,
          width: 100
        });
        var X = new al.Label({
          scene: scene,
          font: sansserif,
          text: "X",
          fontSize: 70,
          textColor: "red",
          x: g.game.width - 75,
          y: 370,
          anchorX: 0.5,
          width: 100
        });
        var goal = new al.Label({
          scene: scene,
          font: monospace,
          text: "\u76EE\n\u6A19",
          fontSize: 50,
          textColor: "red",
          x: 125,
          y: 35,
          anchorX: 0.5,
          width: 100
        });
        scene.append(multiply);
        scene.append(arrow);
        scene.append(frame0);
        scene.append(frame1);
        scene.append(frame2);
        scene.append(frame3);
        scene.append(A);
        scene.append(B);
        scene.append(X);
        scene.append(goal);
      }
      exports.showDisplay = showDisplay;
      function announce(text, size) {
        return new Promise(function (resolve) {
          exports.gameScene.assets["touch"].play();
          var back = new g.FilledRect({
            scene: exports.gameScene,
            cssColor: "black",
            width: 300,
            height: 100,
            x: g.game.width / 2,
            y: g.game.height / 2,
            anchorX: 0.5,
            anchorY: 0.5
          });
          var message = new al.Label({
            scene: exports.gameScene,
            font: sansserif,
            text: text,
            fontSize: size,
            textColor: "white",
            x: g.game.width / 2,
            y: g.game.height / 2,
            anchorX: 0.5,
            anchorY: 0.5,
            width: g.game.width,
            textAlign: "center"
          });
          exports.gameScene.setTimeout(function () {
            exports.gameScene.append(back);
            exports.gameScene.append(message);
            exports.gameScene.setTimeout(function () {
              back.destroy();
              message.destroy();
              resolve();
            }, 3300);
          }, 200);
        });
      }
      exports.announce = announce;
      var parentIndexA;
      var parentIndexB;
      var targetIndex = Math.floor(g.game.random.generate() * insects.length);
      function setGoal() {
        announce("目標決定", 50).then(function () {
          insects[targetIndex].tag = false;
          exports.gameScene.append(insects[targetIndex]);
          var theGoal = timeline.create(insects[targetIndex]);
          insects[targetIndex].angle = 0;
          theGoal.moveTo(100, 100, 2000).con().rotateBy(2160, 2000).call(sePlay);
          do {
            parentIndexA = Math.floor(g.game.random.generate() * insects.length);
          } while (parentIndexA === targetIndex);
          exports.gameScene.setTimeout(function () {
            announce("親Aを決定", 50).then(function () {
              insects[parentIndexA].tag = false;
              exports.gameScene.append(insects[parentIndexA]);
              var theFirst = timeline.create(insects[parentIndexA]);
              insects[parentIndexA].angle = 0;
              theFirst.moveTo(g.game.width - 100, 100, 2000).con().rotateBy(2160, 2000).call(sePlay);
            });
            exports.gameScene.setTimeout(function () {
              announce("ゲームスタート！\n親Bを選ぼう", 30).then(function () {
                switchIsTouchable();
              });
            }, 6000);
          }, 4000);
        });
      }
      exports.setGoal = setGoal;
      function moveInsect(insect, isRotating, leftRight) {
        if (isRotating === false && insect.x > 0 && insect.x < g.game.width && insect.y > 0 && insect.y < g.game.height) {
          var random = Math.floor(g.game.random.generate() * 100);
          if (random === 0) {
            leftRight = Math.floor(g.game.random.generate() * 2);
            isRotating = true;
          }
        }
        if (isRotating === true && leftRight === 0) {
          if (insect.angle === 0) {
            insect.angle = 360;
          }
          insect.angle -= 2;
        } else if (isRotating === true && leftRight === 1) {
          insect.angle += 2;
        }
        if (insect.angle === 360) {
          insect.angle = 0;
        }
        if (insect.angle === 0) {
          insect.y -= 3;
          isRotating = false;
        }
        if (insect.angle === 90) {
          insect.x += 3;
          isRotating = false;
        }
        if (insect.angle === 180) {
          insect.y += 3;
          isRotating = false;
        }
        if (insect.angle === 270) {
          insect.x -= 3;
          isRotating = false;
        }
        if (insect.x <= 0 || insect.x >= g.game.width || insect.y <= 0 || insect.y >= g.game.height) {
          if (insect.angle === 0 || insect.angle === 90) {
            insect.angle += 180;
          } else if (insect.angle === 180 || insect.angle === 270) {
            insect.angle -= 180;
          }
        }
        insect.modified();
        return [isRotating, leftRight];
      }
      function clearStage() {
        var back = new g.FilledRect({
          scene: exports.gameScene,
          cssColor: "black",
          width: 450,
          height: 100,
          x: g.game.width / 2,
          y: g.game.height / 2,
          anchorX: 0.5,
          anchorY: 0.5
        });
        var clearMessage = new al.Label({
          scene: exports.gameScene,
          font: sansserif,
          text: "Complete!!!",
          fontSize: 50,
          textColor: "white",
          x: g.game.width / 2,
          y: g.game.height / 2,
          anchorX: 0.5,
          anchorY: 0.5,
          width: 500,
          textAlign: "center"
        });
        exports.gameScene.append(back);
        exports.gameScene.append(clearMessage);
      }
      exports.clearStage = clearStage;
    }, {
      "@akashic-extension/akashic-label": 5,
      "@akashic-extension/akashic-timeline": 10
    }]
  }, {}, [11])(11);
});