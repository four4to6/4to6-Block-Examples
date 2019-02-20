/**
 * FOUR 4to6 Block Example
 *
 * Based on
 * https://github.com/modularwp/gutenberg-block-editable-example
 */
( function() {
	var __                = wp.i18n.__; // The __() function for internationalization.
	var createElement	  = wp.element.createElement; // The wp.element.createElement() function to create elements.
	var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() function to register blocks.
	var RichText          = wp.editor.RichText; // For creating editable elements.
	var BlockControls     = wp.editor.BlockControls; // For adding control elements.
	var AlignmentToolbar  = wp.editor.AlignmentToolbar; // For creating the alignment toolbar element within the control elements.

        // Font Awesome SVG file. 
        const el = wp.element.createElement;
        const svg = wp.components.SVG;
        const iconEl = el('svg', { width: 20, height: 20, viewBox: '0 0 512 512' },
              el('path', { class: "btn_svg_class2", d: "M 290.59 192 c -20.18 0 -106.82 1.98 -162.59 85.95 V 192 c 0 -52.94 -43.06 -96 -96 -96 c -17.67 0 -32 14.33 -32 32 s 14.33 32 32 32 c 17.64 0 32 14.36 32 32 v 256 c 0 35.3 28.7 64 64 64 h 176 c 8.84 0 16 -7.16 16 -16 v -16 c 0 -17.67 -14.33 -32 -32 -32 h -32 l 128 -96 v 144 c 0 8.84 7.16 16 16 16 h 32 c 8.84 0 16 -7.16 16 -16 V 289.86 c -10.29 2.67 -20.89 4.54 -32 4.54 c -61.81 0 -113.52 -44.05 -125.41 -102.4 Z M 448 96 h -64 l -64 -64 v 134.4 c 0 53.02 42.98 96 96 96 s 96 -42.98 96 -96 V 32 l -64 64 Z m -72 80 c -8.84 0 -16 -7.16 -16 -16 s 7.16 -16 16 -16 s 16 7.16 16 16 s -7.16 16 -16 16 Z m 80 0 c -8.84 0 -16 -7.16 -16 -16 s 7.16 -16 16 -16 s 16 7.16 16 16 s -7.16 16 -16 16 Z" } )
              );
	
	/**
	 * Register block
	 *
	 * @param  {string}   name     Block name.
	 * @param  {Object}   settings Block settings.
	 * @return {?WPBlock}          Block itself, if registered successfully,
	 *                             otherwise "undefined".
	 */
	registerBlockType(
		'four-4to6/four4to6-custom-block', // Block name. Must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		{
			title: __( 'FOUR 4to6 Block Example' ), // Block title. __() function allows for internationalization.
					
			//icon: 'carrot',                                                           // Block icon from Dashicons. https://developer.wordpress.org/resource/dashicons/.
			//icon: { background:'#a2837a', foreground:'#dfffff', src:'carrot',},       // foreground: Dashicons color.
			icon: { background: 'rgba(254, 243, 224, 0.52)', src: iconEl },             // Font Awesome SVG file. 
                        description: __( 'this is a FOUR 4tp6 Block description' ),  // This is a short description for your block.			
			category: '4to6-category', // Block category. Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

			// Additional search terms for your block
                        keywords: [ __( '4to6' ), __( 'custom' ), __( 'example' ) ],
                        
			 //ブロックスタイルを登録します。
                        styles: [
                        {
                          name: 'default',
                          label: __( 'Default' ),
                          isDefault: true   //スタイルをデフォルトとしてマークします。
                         },
                             {
                          name: 'dash_border',
                          label: __( 'Dashborder' )
                         },
                         {
                          name: 'background_red',
                          label: __( 'Background (Red)' )
                         },
                            ],
			attributes: {
				content: {
					type: 'string',
					default: '',
				},
			},
			
			attributes: {
				content: {
					type: 'array',
					source: 'children',
					selector: 'p',
					default: '',
				},
				alignment: {
					type: 'string',
				},
			},

			// Defines the block within the editor.
			edit: function( props ) {
				var content = props.attributes.content;
				var alignment = props.attributes.alignment;

				function onChangeContent( updatedContent ) {
					props.setAttributes( { content: updatedContent } );
				}

				function onChangeAlignment( updatedAlignment ) {
					props.setAttributes( { alignment: updatedAlignment } );
				}

				return [
					createElement(
						BlockControls,
						{},
						createElement(
							AlignmentToolbar,
							{
								value: alignment,
								onChange: onChangeAlignment
							}
						)
					),
					createElement(
						RichText,
						{
							tagName: 'p',
							className: props.className,
							style: { textAlign: alignment },
							value: content,
							onChange: onChangeContent,
							onFocus: props.setFocus
						},
					)
				];
			},

			// Defines the saved block.
			save: function( props ) {
				var content = props.attributes.content;
				var alignment = props.attributes.alignment;

				return createElement(
					'p',
					{
						className: props.className,
						style: { textAlign: alignment },
					},
					content
				);
			},
		}
	);
})();
