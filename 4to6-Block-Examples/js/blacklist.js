wp.domReady( function() {
/**
 *****【 4to6 Block BLACK LIST 】
 *
 *****【 WARNING 】*************
 *
 * List blocks that are not supposed to be used
 * This information is【 TOP SECRET 】.
 * Remove the corresponding block from the list when using it.
 * In the unlikely event that information is lost to the outside
 * 【 4to6 Block Information agency 】
 * will erase the data.
 *
 ****  Below, BLACK LIST **********/

/**
 * カテゴリー：一般ブロック *
 */
// 【 該当なし 】

/**
 * カテゴリー：フォーマット *
 */
wp.blocks.unregisterBlockType( 'core/preformatted' );     // 整形済み
wp.blocks.unregisterBlockType( 'core/pullquote' );        // プルクオート
wp.blocks.unregisterBlockType( 'core/verse' );            // 詩

/**
 * カテゴリー：レイアウト要素 *
 */
// 【 該当なし 】

/**
 * カテゴリー：ウィジェット *
 */
wp.blocks.unregisterBlockType( 'core/archives' );          // アーカイブ
wp.blocks.unregisterBlockType( 'core/categories' );        // カテゴリー
wp.blocks.unregisterBlockType( 'core/latest-comments' );   // 最新のコメント

/**
 * カテゴリー：埋め込み *
 */
wp.blocks.unregisterBlockType( 'core-embed/soundcloud' );   // SoundCloud
wp.blocks.unregisterBlockType( 'core-embed/spotify' );      // Spotify
wp.blocks.unregisterBlockType( 'core-embed/animoto' );      // Animoto
wp.blocks.unregisterBlockType( 'core-embed/cloudup' );      // Cloudup
wp.blocks.unregisterBlockType( 'core-embed/collegehumor' ); // CollegeHumor
wp.blocks.unregisterBlockType( 'core-embed/funnyordie' );   // Funny or Die
wp.blocks.unregisterBlockType( 'core-embed/imgur' );        // Imgur
wp.blocks.unregisterBlockType( 'core-embed/issuu' );        // Issuu
wp.blocks.unregisterBlockType( 'core-embed/kickstarter' );  // Kickstarter
wp.blocks.unregisterBlockType( 'core-embed/meetup-com' );   // Meetup.com
wp.blocks.unregisterBlockType( 'core-embed/photobucket' );  // Photobucket
wp.blocks.unregisterBlockType( 'core-embed/polldaddy' );    // Polldaddy
wp.blocks.unregisterBlockType( 'core-embed/reverbnation' ); // ReverbNation
wp.blocks.unregisterBlockType( 'core-embed/screencast' );   // Screencast
wp.blocks.unregisterBlockType( 'core-embed/scribd' );       // Scribd
wp.blocks.unregisterBlockType( 'core-embed/slideshare' );   // Slideshare
wp.blocks.unregisterBlockType( 'core-embed/smugmug' );      // SmugMug
wp.blocks.unregisterBlockType( 'core-embed/speaker-deck' ); // Speaker Deck
wp.blocks.unregisterBlockType( 'core-embed/ted' );          // TED
wp.blocks.unregisterBlockType( 'core-embed/tumblr' );       // Tumblr
wp.blocks.unregisterBlockType( 'core-embed/videopress' );   // VideoPress
wp.blocks.unregisterBlockType( 'core-embed/wordpress-tv' ); // WordPress.tv
} );
