jQuery(document).ready(function($) {
 
  wp.blocks.registerBlockStyle("core/paragraph", {
    name: "dashborder",
    label: "枠あり（点線）"
  });

  wp.blocks.registerBlockStyle("core/paragraph", {
    name: "bg-red",
    label: "背景色（黒板風）"
  });

  wp.blocks.registerBlockStyle("core/paragraph", {
    name: "point",
    label: "ポイント"
  });
});
