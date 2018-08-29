$('.gutter>pre>div').each(function(){
	var index = $(this).html();
	if(index > 15){
		$(this).css('display','none');
		$(this).parents('.gutter').next('.code').find('div').eq(index).css('display','none');
	}
})
$('.gutter>pre>div:last-child').each(function(){
	var last = $(this).html();
	if(last > 15){
		var tr = "<tr style='color:#ddd'><td colspan='2'><a onclick='showall(this)' data='0' href='javascript:;'>>> 查看全部代码</a></td></tr>";
		$(this).parents('tbody').append(tr);
	}
})

function showall(obj){
	var data = $(obj).attr('data');
	if(data == '0'){
		$(obj).parents('tbody').find('div').css('display','block');
		$(obj).html('>> 隐藏代码').attr('data','1');
	}else{
		$(obj).html('>> 查看全部代码').attr('data','0');
		$(obj).parents('tr').prev('tr').find('div').each(function(){
			var index = $(this).html();
			if(index > 15){
				$(this).css('display','none');
				$(this).parents('.gutter').next('.code').find('div').eq(index).css('display','none');
			}
		})
	}
}