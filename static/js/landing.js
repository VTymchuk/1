$(document).ready(function(){
	$("#go").click(function(){
		var acct = $("#account-number").val();
		Cookies.set('acct', acct);
	})
});