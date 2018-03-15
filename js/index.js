$(function(){
	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#4C4B4B', '#7BAABE', '#f90','rgb(16, 16, 16)','#000'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6'],
		'navigation': true,
		/*连续滚动*/
        // loopBottom:true,
        // loopTop:true,
        /*监听到页面滚动完成的时候*/
        afterLoad:function(anchorLink,index){
            /*
            * anchorLink 描点的连接
            * index 序号
            * */
            $('.section').removeClass('now');
            setTimeout(function(){
                $('.section').eq(index-1).addClass('now');
            },300);
            
        }

        
	});
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 5000);
// 头部导航栏对应的变色效果和动画  获取对应的active----------------------   
    



// 模块一(five) --------------------------------------------------------
    // hover效果
    $(".bofang-1").on("mouseover",function(){
        $(".zhezhao1").css("opacity","0.2");
        $('.zhezhao1').css("transition","all 2s")
    }),$(".bofang-1").on("mouseout",function(){
        $(".zhezhao1").css("opacity","0.6");
        $('.zhezhao1').css("transition","all 2s")
    });
    $(".give").on("mouseover",function(){
        $(".zhezhao1").css("opacity","0.2");
        $('.zhezhao1').css("transition","all 4s")
    }),$(".give").on("mouseout",function(){
        $(".zhezhao1").css("opacity","0.6");
        $('.zhezhao1').css("transition","all 4s")
    })
 



});
