$(function(){
    // 优惠券种类的页面渲染
    $.ajax({
        url:"http://localhost:9090/api/getcoupon",
        success:function(data){
            console.log(data);
            var html=template("cocponListTpl",data);
            $(".coupons").html(html);
        }
    })

    // 给每个a标签添加点击事件
    $(".coupons").on('tap','.coupons li .clist',function(){
        var id=$(this).data("id");
        //console.log(id); 
        location="conponsDetail.html?id="+id;  
    })
    // 滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

})