document.addEventListener("visibilitychange",function () {
	//  用户离开当前页面
	if (document.visibilityState === 'hidden') {
		document.title = '1';
		alert("leave")
	}

	//   用户打开或者回到页面
	if (document.visibilityState === 'visible') {
		document.title = '2'
		alert(document.title)
	}
	
})