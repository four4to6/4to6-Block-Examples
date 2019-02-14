/**
 * コントロールパネルをカスタマイズするブロックを指定
*/
function isValidBlockType( name ) {

    const validBlockTypes = [
        //'core/paragraph',                          // 段落 
        //'core/list',                               // リスト 
        'four-4to6/four4to6-custom-block',  // カスタムブロック 
    ];

    return validBlockTypes.includes( name );

}// end isValidBlockType()

(function () {
    
    var editor = wp.editor,
        element = wp.element,
        compose = wp.compose,
        components = wp.components,
        addFilter = wp.hooks.addFilter,
        el = element.createElement,
        Fragment = element.Fragment,
        InspectorControls = editor.InspectorControls;
        createHigherOrderComponent = compose.createHigherOrderComponent;
        
    /* コントロールパネルに項目を追加する関数 */
    var addMyControls = createHigherOrderComponent(function (BlockEdit) {
        return function (props) {

            var myComponent = el(components.PanelBody, {
                title: "装飾設定",
                icon: 'admin-customizer', /* アイコンを指定 */
                className: 'cp_custom_class' 
            },
                el(components.SelectControl, {
                    label: "テキスト装飾",
                    options: [{
                        label: "なし",
                        value: ""
                    }, {
                        label: "マーカー（橙）",
                        value: "marker_orange"
                    }, {
                        label: "マーカー（青）",
                        value: "marker_blue"
                    }, {
                        label: "赤太字",
                        value: "s_text_red"
                    }],
                    onChange: function (val) {
                        var selectedText = window.getSelection().toString();
                        document.execCommand("insertHTML", true, '<span class="' + val + '">' + selectedText + "</span>")
                    }
                })
            );

            if ( isValidBlockType(props.name) && props.isSelected ) {
                return el(Fragment, null, el(BlockEdit, props), el(InspectorControls, null, myComponent));
            }
            return el(BlockEdit, props)
        }
    }, "addMyControls");

    /* コントロールパネルに項目を追加するフィルター */
    addFilter("editor.BlockEdit", "my-plugin/my-control", addMyControls);

})();
