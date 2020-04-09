export default {
	//格式化时间
	formatDate: (value, pattern) => {
		var date = new Date(value),
			//年
			y = date.getFullYear(),
			//月
			m = date.getMonth() + 1,
			//日
			d = date.getDate(),
			//时
			hh = date.getHours(),
			//分
			mm = date.getMinutes(),
			//秒
			ss = date.getSeconds();
		if (pattern.toLoweerCase === 'yyyy-mm-dd') {
			return `${y}-${m}-${d}`;
		} else {
			return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
		}
	},
	}