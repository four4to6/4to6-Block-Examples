( function( wp ) {

const el = wp.element.createElement;
const svg = wp.components.SVG;
const iconEl = el('svg', { width: 20, height: 20, viewBox: '0 0 512 512' },
 el('path', { class: "btn_svg_class", d: "M 93.95 290.03 A 327.038 327.038 0 0 0 0.17 485.11 l -0.03 0.23 c -1.7 15.28 11.21 28.2 26.49 26.51 a 327.02 327.02 0 0 0 195.34 -93.8 l 75.4 -75.4 l -128.02 -128.02 l -75.4 75.4 Z M 485.49 26.51 c -35.35 -35.35 -92.67 -35.35 -128.02 0 l -21.76 21.76 l -36.56 -36.55 c -15.62 -15.62 -40.95 -15.62 -56.56 0 L 138.47 115.84 c -6.25 6.25 -6.25 16.38 0 22.63 l 22.62 22.62 c 6.25 6.25 16.38 6.25 22.63 0 l 87.15 -87.15 l 19.59 19.59 L 191.98 192 L 320 320.02 l 165.49 -165.49 c 35.35 -35.35 35.35 -92.66 0 -128.02 Z" } )
);

    wp.richText.registerFormatType(
    'toolbar-btn/toolbar-btn1', {
     title: 'My-ToolbarBtn',
     tagName: 'mark',
     className: 'marker_tb_btn',
     edit: function( props ) {
           return wp.element.createElement(
           wp.editor.RichTextToolbarButton, {
              icon: iconEl,
              title: 'My-ToolbarBtn',
              onClick: function() {
              props.onChange(wp.richText.toggleFormat(
              props.value,
              { type: 'toolbar-btn/toolbar-btn1' }
              ));
            },
              isActive: props.isActive,
              className: 'btn_bg_class'
            }
          );
        }
      }
    );
/* ボタンを二個登録する場合は */
/*
     wp.richText.registerFormatType(
    'toolbar-btn/toolbar-btn2', {
     title: 'My-ToolbarBtn-2',
     tagName: 'mark',
     className: 'marker_tb_btn2',
     edit: function( props ) {
           return wp.element.createElement(
           wp.editor.RichTextToolbarButton, {
              icon: 'edit',
              title: 'My-ToolbarBtn-2',
              onClick: function() {
              props.onChange(wp.richText.toggleFormat(
              props.value,
              { type: 'toolbar-btn/toolbar-btn2' }
              ));
            },
              isActive: props.isActive,
              className: 'btn_bg_class2'
            }
          );
        }
      }
    );
/*
/* コメントアウトを外してください */
} )( window.wp );
