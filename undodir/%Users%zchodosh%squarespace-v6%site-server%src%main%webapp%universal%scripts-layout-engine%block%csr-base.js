Vim�UnDo� �VM��%��ф���J�)����R��1��53�   _           
                       b��N   	 _�                     3        ����                                                                                                                                                                                                                                                                                                                                                             b��I     �   3   5   `              �   3   5   _    5��    3                      j                     �    3                      j                     5�_�                    4       ����                                                                                                                                                                                                                                                                                                                                                             b��O    �   3   5   `              console.log(widgetJson)5��    3                     �                     5�_�                    4       ����                                                                                                                                                                                                                                                                                                                                                             b��     �   3   4                   console.log(widgetJson);5��    3                      j      !               5�_�                    4   5    ����                                                                                                                                                                                                                                                                                                                                                             b��	    �   3   5   _      L        renderBlock(widgetJson.type, widgetJson.value).then(function(html) {5��    3   5                  �                     5�_�                    2       ����                                                                                                                                                                                                                                                                                                                                                             b��
     �   3   5   b      
          �   3   5   a    �   2   5   `              �   2   4   _    5��    2                      i              	       �    2                     q                     �    2                    q                    �    2                    �                    �    2                    �              	       �    3                      �              	       �    3                     �                    5�_�                    3        ����                                                                                                                                                                                                                                                                                                                            3          5   	       V       b��'     �   2   3                  var renderData = {             type:   	        }5��    2                      i      5               5�_�                    2        ����                                                                                                                                                                                                                                                                                                                            3          3   	       V       b��*     �   1   3   `      '        var widgetJson = this.toJSON();    �   2   4   `              �   2   4   _    5��    2                      i              	       �    2                     q                     �    2          	           j      	               �    2                      i                     �    1   '                  h                     5�_�      	              4       ����                                                                                                                                                                                                                                                                                                                            4          4   5       v   5    b��=     �   3   5   _      c        renderBlock(widgetJson.type, widgetJson.value, { id: widgetJson.id }).then(function(html) {5��    3          "           ~      "               5�_�      
           	   4       ����                                                                                                                                                                                                                                                                                                                            4          4   5       v   5    b��?     �   3   5   _      A        renderBlock( { id: widgetJson.id }).then(function(html) {5��    3                     ~                     5�_�   	              
   4       ����                                                                                                                                                                                                                                                                                                                            4          4   5       v   5    b��A    �   3   5   _      @        renderBlock({ id: widgetJson.id }).then(function(html) {5��    3                                          �    3                    �                    �    3   0                 �                    �    3   B                 �                    5�_�   
                        ����                                                                                                                                                                                                                                                                                                                            4          4   5       v   5    b��P     �               _   'import debounce from 'lodash/debounce';   Himport renderBlock from 'apps/App/shared/utils/renderBlock/renderBlock';   \import { isBlockValueEqual } from 'apps/App/components/Annotations/utils/layoutEngineUtils';       /**   2 * @module @sqs/layout-engine/block-model-csr-base    */   AYUI.add('@sqs/layout-engine/block-model-csr-base', function (Y) {       (  Y.namespace('SQS.LayoutEngine.Block');         /**   3   * Block that renders using client-side rendering   ^   * Alternative to modelsync-base for blocks that don't need external data for render context      *   *   * @namespace     SQS.LayoutEngine.Block       * @class         ModelCsrBase   /   * @extends       SQS.LayoutEngine.Block.Base      */   8  Y.SQS.LayoutEngine.Block.ModelCsrBase = Y.Base.create(       'block-csr',   "    Y.SQS.LayoutEngine.Block.Base,       [],       {              initializer: function () {   =        this.previousBlockValue = this.get('model').toJSON();         },             renderUI: function () {           this._renderBlock();         },             bindUI: function () {   H        this.debouncedRender = debounce(function csrBaseModelChange(e) {             this._renderBlock(e);   7        }, this.get('contentRefreshRate'), true, true);   F        this.get('model').after('change', this.debouncedRender, this);         },       P      // Despite the underscore prefix, this method gets overridden and listened   *      // to by block and block mixin files   F      _renderSuccess: function LEModelCsrBaseRenderSuccess(response) {   (        var cb = this.get('contentBox');           cb.empty();   !        cb.insert(response.html);         },       E      _renderBlock: function LEModelCsrBaseRenderBlock(forceRender) {   '        var widgetJson = this.toJSON();       p        renderBlock({ type: widgetJson.type, value: widgetJson.value, id: widgetJson.id }).then(function(html) {   *          var cb = this.get('contentBox');   )          if (cb.getDOMNode() !== null) {   0            this._renderSuccess({ html: html });   .            this.fire('widget:contentUpdate');   8            var blockValue = this.get('model').toJSON();   J            if (!isBlockValueEqual(blockValue, this.previousBlockValue)) {   9              this.fire('block:renderedAfterDataChange');               }   1            this.previousBlockValue = blockValue;             }           }.bind(this));         },             destructor: function() {   #        if (this.debouncedRender) {   (          this.debouncedRender.cancel();   	        }         }       },       {   "      CSS_PREFIX: 'sqs-block-csr',         MODEL: Y.Model,         ATTRS: {           /**   K         * Refresh rate for debouncing re-render after model change. In ms.   P         * 200ms default prevents rerendering on each keystroke for text inputs.   N         * Blocks that render an embed of a 3rd-party may want a larger delay.   
         *            * @type {Number}            */           contentRefreshRate: {             value: 200   	        }         }       }     );       }, '1.0', { requires: [   	  'base',   
  'model',   	  'node',   !  '@sqs/layout-engine/block-base'   ] });5�5�_�                    #   G    ����                                                                                                                                                                                                                                                                                                                            4          4   5       v   5    b�۝     �   #   %   `      
          �   #   %   _    5��    #                      &              	       �    #                     &                    5�_�                    $       ����                                                                                                                                                                                                                                                                                                                            5          5   5       v   5    b�ۡ    �   #   %   `                console.log(e)5��    #                     >                     5�_�                     $       ����                                                                                                                                                                                                                                                                                                                            5          5   5       v   5    b��M   	 �   #   $                    console.log(e);5��    #                      &                     5�_�   
                2       ����                                                                                                                                                                                                                                                                                                                            5          5   5       v   5    b�س    �   2   3   _              �   2   4   `              console.log(widgetJson)5��    2                      i              	       �    2                     q                     �    2                    |                    5�_�                    3       ����                                                                                                                                                                                                                                                                                                                            :          :   5       v   5    b��     �   3   4   `              �   3   5   a              var blockContext = {   	        }�   4   5   b      
          �   4   6   c                 type: widgetJson.type,   "          value: widgetJson.value,             id: widgetJson.id5��    3                      �              	       �    3                     �                     �    3                    �                    �    3                    �              	       �    4                      �              	       �    4                      �                     �    4                  
   �                     �    5   
                  �                     �    5   "              
   �                     �    6   
                  �                     5�_�                    8   	    ����                                                                                                                                                                                                                                                                                                                            :          :   5       v   5    b��=     �   7   9   e      
        };5��    7   	                                       5�_�                    3   	    ����                                                                                                                                                                                                                                                                                                                            9          9   X       v   X    b��?     �   2   4        5��    2                      i                      5�_�                    9       ����                                                                                                                                                                                                                                                                                                                            9          9   X       v   X    b��D     �   8   :   d      7        renderBlock(blockContext).then(function(html) {5��    8          E                E              5�_�                    7   	    ����                                                                                                                                                                                                                                                                                                                            ;          ;   X       v   X    b��J     �   7   8   d              �   7   9   e          !        console.log(blockContext)5��    7                      �              	       �    7                      �                     �    7                     �              	       �    8                     �                     5�_�                    9   !    ����                                                                                                                                                                                                                                                                                                                            ;          ;   X       v   X    b��P    �   8   :   f      "        console.log(blockContext);5��    8   !                                       5�_�                    9   !    ����                                                                                                                                                                                                                                                                                                                            :          :   X       v   X    b�ي     �   8   :        5��    8                      �      #               5�_�                     9        ����                                                                                                                                                                                                                                                                                                                            9          9   X       v   X    b�ً    �   8   :        5��    8                      �                     5��