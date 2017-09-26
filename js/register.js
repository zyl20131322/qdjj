// 年份选项
function addBirthYear(){
	var obj=document.getElementById('birthYear');
	for(var year=1945;year<2017;year++){
		obj.options.add(new Option(year,year));
	}
}