function StringToIntArray(b, d) { 
	b || (b = "");
	var a = this.split(b), c;
	for (c in a) i = 0, a[c] = parseFloat(a[c].replace(d ? /[^0-9|.]/g : /[^0-9]/g, "").replace(/\./g, function(all, match) { return i++===0 ? '.' : ''; }).replace(/^0+/g, ""));
	return a.filter(function(a) { return a === a })
}
Object['defineProperty'] && !String.prototype.hasOwnProperty('toIntArray') ? Object.defineProperty(String.prototype, "toIntArray", { value: StringToIntArray }) : String.prototype.toInt = StringToIntArray;
