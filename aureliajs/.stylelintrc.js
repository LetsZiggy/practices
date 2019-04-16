"use strict"

module.exports = {
	"root": true,
	"plugins": [ "stylelint-scss", "stylelint-order", "stylelint-csstree-validator" ],
	"processors": [],
	"extends": [ "stylelint-config-standard-scss", "stylelint-config-recess-order" ],
	"rules": {
		/**
		 * Possible errors
		 */


		/** Color */

		// "color-no-invalid-hex": false,


		/** Font family */

		// "font-family-no-duplicate-names": false,

		// "font-family-no-missing-generic-family-keyword": false,


		/** Function */

		"function-calc-no-invalid": true,

		// "function-calc-no-unspaced-operator": false,

		// "function-linear-gradient-no-nonstandard-direction": false,,


		/** String */

		// "string-no-newline": false,


		/** Unit */

		// "unit-no-unknown": false,


		/** Property */

		// "property-no-unknown": false,


		/** Keyframe declaration */

		// "keyframe-declaration-no-important": false,


		/** Declaration block */

		// "declaration-block-no-duplicate-properties": false,

		// "declaration-block-no-shorthand-property-overrides": false,


		/** Block */

		// "block-no-empty": false,


		/** Selector */

		// "selector-pseudo-class-no-unknown": false,

		// "selector-pseudo-element-no-unknown": false,

		// "selector-type-no-unknown": false,


		/** Media feature */

		// "media-feature-name-no-unknown": false,


		/** At-rule */

		// "at-rule-no-unknown": false,


		/** Comment */

		// "comment-no-empty": false,


		/** General / Sheet */

		// "no-descending-specificity": false,

		// "no-duplicate-at-import-rules": false,

		// "no-duplicate-selectors": false,

		// "no-empty-source": false,

		// "no-extra-semicolons": false,

		// "no-invalid-double-slash-comments": false,



		/**
		 * Limit language features
		 */


		/** Color */

		// "color-named": false,

		// "color-no-hex": false,


		/** Function */

		// "function-blacklist": false,

		// "function-url-no-scheme-relative": false,

		// "function-url-scheme-blacklist": false,

		// "function-url-scheme-whitelist": false,

		// "function-whitelist": false,


		/** Keyframes */

		// "keyframes-name-pattern": false,


		/** Number */

		// "number-max-precision": false,


		/** Time */

		// "time-min-milliseconds": false,


		/** Unit */

		// "unit-blacklist": false,

		// "unit-whitelist": false,


		/** Shorthand property */

		"shorthand-property-no-redundant-values": true,


		/** Value */

		"value-no-vendor-prefix": true,


		/** Custom property */

		// "custom-property-pattern": false,


		/** Property */

		// "property-blacklist": false,

		"property-no-vendor-prefix": true,

		// "property-whitelist": false,


		/** Declaration */

		// "declaration-block-no-redundant-longhand-properties": false,

		"declaration-no-important": true,

		// "declaration-property-unit-blacklist": false,

		// "declaration-property-unit-whitelist": false,

		// "declaration-property-value-blacklist": false,

		// "declaration-property-value-whitelist": false,


		/** Declaration block */

		// "declaration-block-single-line-max-declarations": false,


		/** Selector */

		// "selector-attribute-operator-blacklist": false,

		// "selector-attribute-operator-whitelist": false,

		// "selector-class-pattern": false,

		// "selector-combinator-blacklist": false,

		// "selector-combinator-whitelist": false,

		// "selector-id-pattern": false,

		// "selector-max-attribute": false,

		// "selector-max-class": false,

		// "selector-max-combinators": false,

		// "selector-max-compound-selectors": false,

		// "selector-max-empty-lines": false,

		// "selector-max-id": false,

		// "selector-max-pseudo-class": false,

		// "selector-max-specificity": false,

		// "selector-max-type": false,

		// "selector-max-universal": false,

		// "selector-nested-pattern": false,

		// "selector-no-qualifying-type": false,

		"selector-no-vendor-prefix": true,

		// "selector-pseudo-class-blacklist": false,

		// "selector-pseudo-class-whitelist": false,

		// "selector-pseudo-element-blacklist": false,

		// "selector-pseudo-element-whitelist": false,


		/** Media feature */

		// "media-feature-name-blacklist": false,

		"media-feature-name-no-vendor-prefix": true,

		// "media-feature-name-value-whitelist": false,

		// "media-feature-name-whitelist": false,


		/** Custom media */

		// "custom-media-pattern": false,


		/** At-rule */

		// "at-rule-blacklist": false,

		"at-rule-no-vendor-prefix": true,

		// "at-rule-property-requirelist": false,

		// "at-rule-whitelist": false,


		/** Comment */

		// "comment-word-blacklist": false,


		/** General / Sheet */

		// "max-nesting-depth": false,

		"no-unknown-animations": true,



		/**
		 * Stylistic issues
		 */


		/** Color */

		// "color-hex-case": false,

		// "color-hex-length": false,


		/** Font family */

		"font-family-name-quotes": "always-unless-keyword",


		/** Font weight */

		"font-weight-notation": [ "numeric", { "ignore": [ "relative" ]}],


		/** Function */

		// "function-comma-newline-after": false,

		// "function-comma-newline-before": false,

		// "function-comma-space-after": false,

		// "function-comma-space-before": false,

		// "function-max-empty-lines": false,

		// "function-name-case": false,

		// "function-parentheses-newline-inside": false,

		// "function-parentheses-space-inside": false,

		"function-url-quotes": "always",

		// "function-whitespace-after": false,


		/** Number */

		// "number-leading-zero": false,

		// "number-no-trailing-zeros": false,


		/** String */

		"string-quotes": "double",


		/** Length */

		// "length-zero-no-unit": false,


		/** Unit */

		// "unit-case": false,


		/** Value */

		"value-keyword-case": "lower",


		/** Value list */

		// "value-list-comma-newline-after": false,

		// "value-list-comma-newline-before": false,

		// "value-list-comma-space-after": false,

		// "value-list-comma-space-before": false,

		// "value-list-max-empty-lines": false,


		/** Custom property */

		// "custom-property-empty-line-before": false,


		/** Property */

		// "property-case": false,


		/** Declaration */

		// "declaration-bang-space-after": false,

		// "declaration-bang-space-before": false,

		// "declaration-colon-newline-after": false,

		// "declaration-colon-space-after": false,

		// "declaration-colon-space-before": false,

		/* Overwrite standard config */
		"declaration-empty-line-before": "never",


		/** Declaration block */

		// "declaration-block-semicolon-newline-after": false,

		// "declaration-block-semicolon-newline-before": false,

		// "declaration-block-semicolon-space-after": false,

		// "declaration-block-semicolon-space-before": false,

		// "declaration-block-trailing-semicolon": false,


		/** Block */

		// "block-closing-brace-empty-line-before": false,

		// "block-closing-brace-newline-after": false,

		// "block-closing-brace-newline-before": false,

		// "block-closing-brace-space-after": false,

		// "block-closing-brace-space-before": false,

		// "block-opening-brace-newline-after": false,

		// "block-opening-brace-newline-before": false,

		// "block-opening-brace-space-after": false,

		// "block-opening-brace-space-before": false,


		/** Selector */

		// "selector-attribute-brackets-space-inside": false,

		// "selector-attribute-operator-space-after": false,

		// "selector-attribute-operator-space-before": false,

		"selector-attribute-quotes": "always",

		// "selector-combinator-space-after": false,

		// "selector-combinator-space-before": false,

		// "selector-descendant-combinator-no-non-space": false,

		// "selector-pseudo-class-case": false,

		// "selector-pseudo-class-parentheses-space-inside": false,

		// "selector-pseudo-element-case": false,

		// "selector-pseudo-element-colon-notation": false,

		// "selector-type-case": false,


		/** Selector list */

		// "selector-list-comma-newline-after": false,

		// "selector-list-comma-newline-before": false,

		// "selector-list-comma-space-after": false,

		// "selector-list-comma-space-before": false,


		/** Rule */

		// "rule-empty-line-before": false,


		/** Media feature */

		// "media-feature-colon-space-after": false,

		// "media-feature-colon-space-before": false,

		// "media-feature-name-case": false,

		// "media-feature-parentheses-space-inside": false,

		// "media-feature-range-operator-space-after": false,

		// "media-feature-range-operator-space-before": false,


		/** Media query list */

		// "media-query-list-comma-newline-after": false,

		// "media-query-list-comma-newline-before": false,

		// "media-query-list-comma-space-after": false,

		// "media-query-list-comma-space-before": false,


		/** At-rule */

		/* Overwrite standard config */
		"at-rule-empty-line-before": [ "always", { "except": [ "blockless-after-blockless", "first-nested" ], "ignoreAtRules": [ "apply", "responsive", "screen", "tailwind", "variants" ]}],

		// "at-rule-name-case": false,

		"at-rule-name-newline-after": "always-multi-line",

		// "at-rule-name-space-after": false,

		// "at-rule-semicolon-newline-after": false,

		"at-rule-semicolon-space-before": "never",


		/** Comment */

		// "comment-empty-line-before": false,

		// "comment-whitespace-inside": false,


		/** General / Sheet */

		// "indentation": false,

		"linebreaks": "unix",

		// "max-empty-lines": false,

		// "max-line-length": false,

		// "no-eol-whitespace": false,

		// "no-missing-end-of-source-newline": false,

		"no-empty-first-line": true,

		// "unicode-bom": false,



		/**
		 * SCSS
		 */


		/** @-each */

		// "scss/at-each-key-value-single-line": false,


		/** @-else */

		// "scss/at-else-closing-brace-newline-after": false,

		// "scss/at-else-closing-brace-space-after": false,

		// "scss/at-else-empty-line-before": false,

		// "scss/at-else-if-parentheses-space-before": false,


		/** @-extend */

		// "scss/at-extend-no-missing-placeholder": false,


		/** @-function */

		// "scss/at-function-named-arguments": false,

		// "scss/at-function-parentheses-space-before": false,

		// "scss/at-function-pattern": false,


		/** @-if */

		// "scss/at-if-closing-brace-newline-after": false,

		// "scss/at-if-closing-brace-space-after": false,

		// "scss/at-if-no-null": false,


		/** @-import */

		// "scss/at-import-no-partial-leading-underscore": false,

		// "scss/at-import-partial-extension": false,

		// "scss/at-import-partial-extension-blacklist": false,

		// "scss/at-import-partial-extension-whitelist": false,


		/** @-mixin */

		// "scss/at-mixin-argumentless-call-parentheses": false,

		// "scss/at-mixin-named-arguments": false,

		// "scss/at-mixin-parentheses-space-before": false,

		// "scss/at-mixin-pattern": false,


		/** @-rule */

		// "scss/at-rule-conditional-no-parentheses": false,

		/* Overwrite standard-scss config */
		"scss/at-rule-no-unknown": [ true, { "ignoreAtRules": [ "apply", "responsive", "screen", "tailwind", "variants" ]}],


		/** $-variable */

		// "scss/dollar-variable-colon-newline-after": false,

		// "scss/dollar-variable-colon-space-after": false,

		// "scss/dollar-variable-colon-space-before": false,

		// "scss/dollar-variable-default": false,

		// "scss/dollar-variable-empty-line-after": false,

		// "scss/dollar-variable-empty-line-before": false,

		// "scss/dollar-variable-first-in-block": false,

		// "scss/dollar-variable-no-missing-interpolation": false,

		// "scss/dollar-variable-pattern": false,


		/** %-placeholder */

		// "scss/percent-placeholder-pattern": false,


		/** //-comment */

		// "scss/double-slash-comment-empty-line-before": false,

		// "scss/double-slash-comment-inline": false,

		// "scss/double-slash-comment-whitespace-inside": false,


		/** Comment */

		// "scss/comment-no-loud": false,


		/** Declaration */

		// "scss/declaration-nested-properties": false,

		// "scss/declaration-nested-properties-no-divided-groups": false,


		/** Dimension */

		// "scss/dimension-no-non-numeric-values": false,


		/** Function */

		// "scss/function-color-relative": false,

		// "scss/function-quote-no-quoted-strings-inside": false,

		// "scss/function-unquote-no-unquoted-strings-inside": false,


		/** Map */

		// "scss/map-keys-quotes": false,


		/** Media feature */

		// "scss/media-feature-value-dollar-variable": false,


		/** Operator */

		// "scss/operator-no-newline-after": false,

		// "scss/operator-no-newline-before": false,

		// "scss/operator-no-unspaced": false,


		/** Partial */

		// "scss/partial-no-import": false,


		/** Selector */

		// "scss/selector-nest-combinators": false,

		// "scss/selector-no-redundant-nesting-selector": false,

		// "scss/selector-no-union-class-name": false,


		/** General / Sheet */

		// "scss/no-dollar-variables": false,

		// "scss/no-duplicate-dollar-variables": false,

		// "scss/no-duplicate-mixins": false,

		// "scss/no-global-function-names": false,



		/**
		 * csstree-validator
		 */

		"csstree/validator": true,
	}
}
