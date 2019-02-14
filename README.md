4to6-Block-Examples
===
4to6-Block-Examples は、  
WordPress ブロックエディタ (Gutenberg) 用の  
Straightforwardなカスタマイズ ブロック example です。

## Description
あくまで beginner が対象です。  
カスタムブロックをCreateしてみたいとか、  
Tryしてみたいという方のTips and Referenceになれば幸いです。  

### note : About display of Font Awesome SVG file 
gutenberg-examples の block.js (normal) は、  
この **exampleの方法では表示されません。**    
Dashicons にスタイルを充てる example が以下です。
```javascript
icon: ( { background:'#a2837a', foreground:'#dfffff', src:'carrot',} ),   // For gutenberg-examples
```
**N.B.** gutenberg-examples/block.js (esnext) Operation not confirmed. 
## Usage
WordPress plug-inとしてインストールしてください。  
dashboardからのインストールか、ファイルをuploadして  
インストールして頂く事で、Custom Blockとしてお使い頂けます。

## Install
4to6-Block-Examples-master.zip をdownloadしたら  
以下に従いplug-inとしてインストールして下さい。
1. WordPress管理ダッシュボードの [ **プラグイン** ] > [ **新規追加** ] から  
[ **プラグインを追加** ] に移動します。
1. ページ上部の [ **プラグインのアップロード** ] をクリックします。
1. [ **参照...** ] をクリックし、ダウンロードしたzipファイルを見つけてアップロードします。
1. プラグインのインストールが完了したら、[ **有効にする** ] をクリックします。
1. You’re done!

## Licence
License : GPL2+

License URI : [https://www.gnu.org/licenses/gpl-2.0.txt](https://www.gnu.org/licenses/gpl-2.0.txt)   

GNU Public License : [https://wordpress.org/about/license/](https://wordpress.org/about/license/) 

## Author

Customized it : [FOUR 4to6](https://github.com/four4to6)

## References
- **The underlying block**
  - [https://github.com/modularwp/gutenberg-block-editable-example](https://github.com/modularwp/gutenberg-block-editable-example)
- **Gutenberg Handbook**
  - [https://wordpress.org/gutenberg/handbook/](https://wordpress.org/gutenberg/handbook/)
- **Control panel & Block Style**
  - [https://wemo.tech/2165](https://wemo.tech/2165)
- **Block categories**
  - [https://wemo.tech/2210](https://wemo.tech/2210)
- **Button to the Toolbar**
  - [https://technote.space/wordpress/add-button-to-gutenberg](https://technote.space/wordpress/add-button-to-gutenberg)
- **Removing Blocks**
  - [https://www.nxworld.net/wordpress/wp-gutenberg-remove-default-block.html](https://www.nxworld.net/wordpress/wp-gutenberg-remove-default-block.html)
  - [https://wemo.tech/2166](https://wemo.tech/2166)
- **Custom SVG Icons**
  - [https://wp.zacgordon.com/2017/12/07/how-to-add-custom-icons-to-gutenberg-editor-blocks-in-wordpress/](https://wp.zacgordon.com/2017/12/07/how-to-add-custom-icons-to-gutenberg-editor-blocks-in-wordpress/)
- **Simple box**
  - [https://love-wave.com/css-waku/](https://love-wave.com/css-waku/)
- **Font Awesome**
  - [https://fontawesome.com/](https://fontawesome.com/)
- **Dashicons**
  - [https://developer.wordpress.org/resource/dashicons/](https://developer.wordpress.org/resource/dashicons/)
- **README.md**
  - [https://deeeet.com/writing/2014/07/31/readme/](https://deeeet.com/writing/2014/07/31/readme/)
- **GitHub Flavored Markdown**
  - [https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/)
  - [https://help.github.com/articles/basic-writing-and-formatting-syntax/](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
