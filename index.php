<?php

/**
 * Plugin Name: FOUR 4to6 Block-Examples
 * Plugin URI: https://github.com/four4to6/4to6-Block-Examples
 * Description: This is the Custom Block Plugin of the Block Editor (Gutenberg).
 * Author:  FOUR 4to6
 * Author URI: https://neco913.kirara.st/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue the block's assets for the editor.
 *
 * wp-blocks:  Includes the registerBlockType() function to register blocks.
 * wp-editor:  Includes the RichText functionality for editable content.
 * wp-element: Includes the createElement() function to create elements.
 * wp-i18n:    Includes the __() function for internationalization.
 *
 * @since 1.0.0
 */

// FOUR 4to6 Custom Block
function four_4to6_custom_block_example($hook) {
	wp_enqueue_script(
		'four-4to6-custom-block-example', // Unique handle.
		plugins_url( 'block.js', __FILE__ ), // Block.js: We register the block here.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // filemtime ? Gets file modification time.
	);	
	wp_enqueue_style(
		'four-4to6-custom-block-example-style', // Handle.
		plugins_url( 'block_style.css', __FILE__ ), // editor.css: This file styles the block within the Gutenberg editor.
		array( ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __FILE__ ) . 'block_style.css' ) // filemtime ? Gets file modification time.
	);
}
add_action( 'enqueue_block_editor_assets', 'four_4to6_custom_block_example' );

// frontend and the backend.
function four_4to6_custom_block_example_enqueue($hook) {
	wp_enqueue_style(
		'four-4to6-custom-block-example-css', // Handle.
		plugins_url( 'block_style.css', __FILE__ ), // style.css: This file styles the block on the frontend.
		array( ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __FILE__ ) . 'block_style.css' ) // filemtime ? Gets file modification time.
	);
}
add_action( 'enqueue_block_assets', 'four_4to6_custom_block_example_enqueue' );

// ツールバーボタン script 
function custom_toolbar_btn($hook) {
    wp_enqueue_script( 'toolbar_btn_js', plugins_url( 'js/toolbar_btn.js', __FILE__ ),
    array( 'wp-blocks', 'wp-element', 'wp-rich-text', 'wp-editor', 'wp-components' )
       );
}
add_action('enqueue_block_editor_assets','custom_toolbar_btn');

// ツールバーボタン css
function custom_style_toolbar_btn($hook) {
    wp_enqueue_style( 'toolbar_btn_css', plugins_url( 'css/toolbar_btn.css', __FILE__ ),
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'css/toolbar_btn.css' )
      );
}
add_action('enqueue_block_assets','custom_style_toolbar_btn');

// スタイルセレクト機能 script
function style_editor($hook) {
    wp_enqueue_script( 'style_js', plugins_url( 'js/style.js', __FILE__ ),
    array( 'wp-blocks', 'wp-element', 'wp-editor' )
     );
}
add_action('enqueue_block_editor_assets','style_editor');
 
// スタイルセレクト機能 css
function style_frontend_editor($hook) {
    wp_enqueue_style( 'style_css', plugins_url( 'css/style.css', __FILE__ ),
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'css/style.css' )
     );
}
add_action('enqueue_block_assets', 'style_frontend_editor');

// コントロールパネルjsを読み込む
function custom_block_control_panel($hook) {
    wp_enqueue_script( 'control_p_custom', plugins_url( 'js/control_p_custom.js', __FILE__ ),
    array( 'wp-blocks', 'wp-components', 'wp-element', 'wp-editor' )
     );
}
add_action('enqueue_block_editor_assets', 'custom_block_control_panel');
 
// コントロールパネルcssを読み込む
function custom_style_block_control_panel($hook) {
    wp_enqueue_style( 'style_cp_custom_css', plugins_url( 'css/style_cp_custom.css', __FILE__ ),
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'css/style_cp_custom.css' )
     );
}
add_action('enqueue_block_assets', 'custom_style_block_control_panel');

// オリジナルのカテゴリーを追加する
function custom_4to6_plugin_block_categories( $categories, $post ) {
    if ( $post->post_type !== 'post' ) {
        return $categories;
    }
    return array_merge(
        $categories,
        array(
            array(
                'slug' => '4to6-category',   //ブロックカテゴリーのスラッグ
                'title' => '4to6 Blocks',  //ブロックカテゴリーの表示名
                'icon'  => 'iconMyC',    //アイコンの指定（Dashicons or カスタム(SVG)アイコン）
            ),
        )
    );
}
add_filter( 'block_categories', 'custom_4to6_plugin_block_categories', 10, 2 );

// カテゴリーアイコン(SVG) script 
function custom_4to6_category_icon($hook) {
    wp_enqueue_script( '4to6_category_icon_js', plugins_url( 'js/4to6_category_icon.js', __FILE__ ),
    array( 'wp-blocks', 'wp-components', 'wp-element' )
       );
}
add_action('enqueue_block_editor_assets','custom_4to6_category_icon');


// ブラックリストを登録する
function my_plugin_blacklist_blocks($hook) {
    wp_enqueue_script( 'my-plugin-blacklist-blocks', plugins_url( 'js/blacklist.js', __FILE__ ),
        array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' )
    );
}
add_action('enqueue_block_editor_assets', 'my_plugin_blacklist_blocks');



// include 'examples/index.php';
