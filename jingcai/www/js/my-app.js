// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Framework7.$;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

 $$('.col-50 img').on('click', function (e) {
    if (this.src.split('wudong').length==2||this.src.split('dong2').length==2) {
        
        return;
    };
 var j=0;    
    for (var i = photoBrowserPhotos.length - 1; i >= 0; i--) {
        if(this.src.split(photoBrowserPhotos[i]).length==2){j=i;}
    };
    photoBrowserDark.open(j);
});
$$('.col-100 img').on('click', function (e) {
 var j=0;    
    for (var i = photoBrowserPhotos.length - 1; i >= 0; i--) {
        if(this.src.split(photoBrowserPhotos[i]).length==2){j=i;}
    };
    photoBrowserDark.open(j);
});

$$('#tab4').on('show', function () {
        if ($$('#tab4 object').attr('data')!='http://shop.m.taobao.com/shop/shop_index.htm?shop_id=37045310') {$$('#tab4 object').attr('data','http://shop.m.taobao.com/shop/shop_index.htm?shop_id=37045310')}
});

$$('#tab2').on('show', function () {
    
        if ($$('#tab2 object').attr('data')!='http://y.baidu.com/jingcai') {$$('#tab2 object').attr('data','http://y.baidu.com/jingcai')}
                
});
// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back-blue"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}




// Demo Photo Browsers
var photoBrowserPhotos = [
    
    'pic/tu1.jpeg',
    'pic/tu2.jpeg',
    'pic/tu3.jpeg',
    'pic/wu1.png',
    'pic/wu2.png',
    'pic/wu3.png',
    'pic/wu4.png',
    'pic/wu5.png',
    'pic/c0.png',
    'pic/c1.png',
    'pic/c2.png',
    'pic/c3.png',
    'pic/c4.png',    
    'pic/sheng.jpeg',
    'pic/sheng1.jpeg',
    'pic/shuang.jpeg',
    'pic/shuang1.jpeg',
    'pic/shuang2.jpeg',
    'pic/shuang3.jpeg',
    'pic/jing1.jpeg',
    'pic/jing2.jpeg',
    'pic/xiang.png',
    'pic/yi.png',
    'pic/yun.png',
    'pic/wu.png',
    'pic/nv.png',
    'pic/xiang.png',
    'pic/shou.png',
    'pic/hundun.gif',
    'pic/li.png',
    'pic/baozi.png',
];
var photoBrowserDark = myApp.photoBrowser({
    photos: photoBrowserPhotos    
});