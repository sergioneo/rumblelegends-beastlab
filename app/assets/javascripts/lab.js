var attrListDinosaurs = ["beastType", "ability", "secondAbility", "pedigree", "element", "type", "eyes", "nose", "mouth", "tail", "plume", "legs", "spikes", "wings"];
var attrListUnicorns = ["beastType", "ability", "secondAbility", "pedigree", "element", "type", "eyes", "horn", "hair", "tail", "snout", "legs"];

function calculateGeneSequence() {
	var beastType = $(".gene-selector#beastType").val();
	var newSeq = 0;
	var attrList = [];
	if (beastType == 0) {
		attrList = attrListDinosaurs;
	} else if (beastType == 1) {
		attrList = attrListUnicorns;
	}
	for (var i = 0; i < attrList.length; i++) {
		console.log("Value for "+attrList[i]+" is "+$(".gene-selector#"+attrList[i]).val());
		newSeq = newSeq * 32 + parseInt($(".gene-selector#"+attrList[i]).val());
	}
	$(".final_seq").val(newSeq);
	$("#displayImage").attr("src", "https://image-generator-beta.herokuapp.com/image/"+newSeq);
}

$(function() {
	
	$(".uni").hide();
	$(".dino").show();

	$(".gene-selector").change(function(){
		calculateGeneSequence();
	});

	$(".gene-selector#beastType").change(function(){
		if ($(".gene-selector#beastType").val() == 0) {
			$(".uni").hide();
			$(".dino").show();
		} else {
			$(".dino").hide();
			$(".uni").show();
		}
	});

})