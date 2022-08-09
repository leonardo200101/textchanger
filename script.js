var xyz = $('#xyz');

var tl = new TimelineMax({
	repeat:-1,
	repeatDelay: 1.5,
	yoyo:true
});

tl
.to(xyz, .7, {
	text: "design",
	color: "#EDFF00"
})
.to(xyz, .7, {
	text: "code",
	color: "#ED1E79"
}, "+=1.5")
.to(xyz, .7, {
	text: "brand",
	color: "#0BFCF0"
}, "+=1.5");