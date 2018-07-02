var attrListDinosaurs = ["colorCombination", "beastType", "ability", "secondAbility", "pedigree", "element", "type", "eyes", "nose", "mouth", "tail", "plume", "legs", "spikes", "wings"];
var attrListUnicorns = ["colorCombination", "beastType", "ability", "secondAbility", "pedigree", "element", "type", "eyes", "horn", "hair", "tail", "snout", "legs"];
var attrLengthDinosaurs = [6, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
var attrLengthUnicorns = [6, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

function calculateGeneSequence() {
	var beastType = $(".gene-selector#beastType").val();
	var newSeq = bigInt(0);
	var attrList = [];
	var attrLengths = [];
	var typeString = "";
	if (beastType == 0) {
		attrList = attrListDinosaurs;
		attrLengths = attrLengthDinosaurs;
		typeString = "dinosaur";
	} else if (beastType == 1) {
		attrList = attrListUnicorns;
		attrLengths = attrLengthUnicorns;
		typeString = "unicorn";
	}
	for (var i = 0; i < attrList.length; i++) {
		console.log("Value for "+attrList[i]+" is "+$(".gene-selector#"+attrList[i]).val());
		var len = attrLengths[i];
		newSeq = newSeq.times(2 ** len).add(bigInt($(".gene-selector#"+attrList[i]).val()));
	}
	$(".final_seq").val(newSeq);
	$("#displayImage").attr("src", "https://image-generator-beta.herokuapp.com/"+typeString+"/"+newSeq.toString());
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