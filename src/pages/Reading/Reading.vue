<template>
  <div id="reading_root_container"  :class="bgTheme">
    <div class="content">
      <div class="con_hd">
          <span>
              当前位置：<a href="" target="_blank">首页</a> &gt;
              <a href="" target="_blank">玄幻小说</a> &gt;
              <a href="" target="_blank" class="sm">武器大师</a>
          </span>

        <div class="gxsz">
          <!--换背景-->
          <span class="bj" btn="tool" name="background" title="切换背景"  v-on:click="toggleToolTip('bg')"></span>
          <div class="xiala bjxl" v-show="showChangeBgTooltip" mod="tool_background">
            <s class="sjbj"></s>
            <ul>
              <li class="bj01" v-on:click="changeReadingBg('bgcolor01')"></li>
              <li class="bj02" v-on:click="changeReadingBg('bgcolor02')"></li>
              <li class="bj03" v-on:click="changeReadingBg('bgcolor03')"></li>
              <li class="bj04" v-on:click="changeReadingBg('bgcolor04')"></li>
              <li class="bj05" v-on:click="changeReadingBg('bgcolor05')"></li>
              <li class="bj06" v-on:click="changeReadingBg('bgcolor06')"></li>
            </ul>
          </div>

          <!--切换字体大小-->
          <span class="zh" btn="tool" name="font" title="切换字体大小" v-on:click="toggleToolTip('font_size')"><s></s></span>
          <div class="xiala zhxl" v-show="showChangeFontTooltip" mod="tool_font">
            <s class="sjbj"></s>
            <div class="xl_con">
              <s class="reduce" v-on:click="curFontSize -= 1"></s>
              <a>{{ curFontSize }}</a>
              <s class="add" v-on:click="curFontSize += 1"></s>
            </div>
          </div>

          <!--切换窗口大小-->
          <span class="kd" btn="tool" name="screen" title="切换窗口大小" v-on:click="toggleToolTip('window_size')"><s></s></span>
          <div class="xiala kdxl" v-show="showChangeWindowSizeTip" mod="tool_screen">
            <s class="sjbj"></s>
            <div class="xl_con">
              <s class="reduce"></s>
              <a>1000</a>
              <s class="add"></s>
            </div>
          </div>


          <span class="ydfs" btn="tool" name="gund" title="切换滚动/翻页模式" v-on:click="toggleToolTip('scroll_mode')"><s></s></span>
          <div class="xiala gdxl" v-show="showScrollModeTip" mod="tool_gund">
            <s class="sjbj"></s>
            <div class="xl_con"><p>点击切换翻页模式</p></div>
          </div>
        </div>
      </div>


      <div class="art_box" id="chapter_11040162">
        <div class="article">
          <h2>第1章 九阳神炉</h2>
          <ul>
            <li>作者：独悠</li>
            <li>类别：<a href="" target="_blank">异界大陆</a></li>
            <li>更新时间：2015-08-24</li>
            <li>本章字数：2842</li>
          </ul>
          <div class="art_con" >
            <p v-bind:style="{fontSize : curFontSize + 'px'}">“真他妈晦气，这小子太不经打了，三两下就死了。”
            </p><p v-bind:style="{fontSize : curFontSize + 'px'}">“鸿哥，这样真的没事吗？他毕竟是大伯的儿子，要是让大伯知道的话……”
          </p><p v-bind:style="{fontSize : curFontSize + 'px'}">“一个私生子而已，有什么好怕的？再说了，谁知道是我们动的手？走！走！赶紧离开这鬼地方！”</p>

          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  // todo how to import this css more elegant
  import "../../../reader/reader_common.css";
  import "../../../reader/layer.css";
  // import "../../../reader/book.js";
  import "../../../reader/read.css";

  import Vue from 'vue'
  import VTooltip from 'v-tooltip'
  Vue.use(VTooltip)
  Vue.directive('tooltip', VTooltip.VTooltip)
  Vue.directive('close-popover', VTooltip.VClosePopover)
  Vue.component('v-popover', VTooltip.VPopover)

  export default {
    mounted(){
      let that = this;
      this.$nextTick(() => {

      })
    },
    methods:{
      // fixme: this method is so stupid
      toggleToolTip(id) {
        if (id === "bg") {
          this.showChangeBgTooltip = !this.showChangeBgTooltip;

          this.showChangeFontTooltip = false;
          this.showTurnPageModeTip = false;
          this.showChangeWindowSizeTip = false;
          this.showScrollModeTip = false;
        } else if (id === "font_size") {
          this.showChangeFontTooltip = !this.showChangeFontTooltip;

          this.showTurnPageModeTip = false;
          this.showChangeWindowSizeTip = false;
          this.showScrollModeTip = false;
          this.showChangeBgTooltip = false;
        } else if (id === "turn_page") {
          this.showTurnPageModeTip = !this.showTurnPageModeTip;

          this.showChangeFontTooltip = false;
          this.showChangeWindowSizeTip = false;
          this.showScrollModeTip = false;
          this.showChangeBgTooltip = false;
        } else if (id === "scroll_mode") {
          this.showScrollModeTip = !this.showScrollModeTip;

          this.showTurnPageModeTip = false;
          this.showChangeWindowSizeTip = false;
          this.showChangeFontTooltip = false;
          this.showChangeBgTooltip = false;
        } else if (id === 'window_size') {
          this.showChangeWindowSizeTip = !this.showChangeWindowSizeTip;

          this.showTurnPageModeTip = false;
          this.showScrollModeTip = false;
          this.showChangeFontTooltip = false;
          this.showChangeBgTooltip = false;
        }
      },

      changeReadingBg(bg_name) {
        this.bgTheme = bg_name
      }
    },
    data(){
      return {
        showChangeBgTooltip: false,
        showChangeFontTooltip: false,
        showChangeWindowSizeTip:false,
        showTurnPageModeTip: false,
        showScrollModeTip: false,
        bgTheme: 'bgcolor01',
        curFontSize: 16
      }
    },
    created: function () {

    }
  }
</script>

<style lang="scss" rel="stylesheet" scoped>
  .content{width: 80%;}

</style>
