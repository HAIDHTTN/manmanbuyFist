$(function(){
    // 获取传过来的id
    // console.log(location.href);
    var id=location.href.split('=')[1]*1;
    // console.log(id);  
    $.ajax({
        url:"http://localhost:9090/api/getcouponproduct",
        data:{couponid:id},
        success:function(data){
            console.log(data);
            var html=template('listsTpl',data);
            $(".lists").html(html);
            $(".mui-navigate-right img").addClass("mui-media-object mui-pull-left");
        }
    })
    // 区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // 火箭 
   
    $(".mui-scroll").scroll(function(){
        console.log(1);
        var h=$('.mui-scroll').scrollTop();
        console.log(h);
        
        
	})


     // 遮罩层
    $('.mui-backdrop').hide();
    $('.lists').on('tap','.mui-media',function(){ 
        $.ajax({
            url:"http://localhost:9090/api/getcouponproduct",
            data:{couponid:id},
            success:function(data){
                console.log(data);
                $(".mui-navigate-right img").addClass("mui-media-object mui-pull-left");
                var html2=template('slidesTpl',data);
                $(".slidebox").html(html2);
                var swiper = new Swiper('.swiper-container', {
                    direction:'horizontal',
                    loop:true,
                    direction: 'horizontal', 
                    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    },
                  });
            }
        })
        $('.mui-backdrop').show();
    })
    $(".ico").on('tap',function(){
         $('.mui-backdrop').hide();
    })
})