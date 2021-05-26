var TYPE_COIN="coin"
var TYPE_BUTTON="button"
var inputCall=0;
var inputs = [
	{
		type: TYPE_COIN,
		value: 0.25
	},
	{
		type: TYPE_COIN,
		value: 0.25
	},
	{
		type: TYPE_BUTTON,
		value: "A"
	},
	{
		type: TYPE_BUTTON,
		value: "CANCEL"
	},
	{
		type: TYPE_COIN,
		value: 0.25
	},
	{
		type: TYPE_COIN,
		value: 0.25
	},
	{
		type: TYPE_BUTTON,
		value: "A"
	},
	{
		type: TYPE_BUTTON,
		value: "1"
	},
	{
		type: TYPE_COIN,
		value: 0.25
	},
	{
		type: TYPE_COIN,
		value: 0.25
	},
	{
		type: TYPE_COIN,
		value: 0.10
	},
	{
		type: TYPE_COIN,
		value: 0.25
	},
	{
		type: TYPE_COIN,
		value: 0.25
	},
	{
		type: TYPE_BUTTON,
		value: "C"
	},
	{
		type: TYPE_BUTTON,
		value: "1"
	},
]
var output=undefined
var doc=undefined

function init(outputLocation, document){
	output=outputLocation
	doc=document
}

function print(stringToPrint){
	doc.write(stringToPrint + "<br>")
}

function getInput(){

	if(inputCall > inputs.length){
		return undefined;
	}

	return inputs[inputCall++];
}

function vend(itemNumber){
	print("Vended: " + itemNumber)
	return true;
}

function returnCurrency(amountToReturn){
	print("Refunded: " + amountToReturn)
	return true;
}