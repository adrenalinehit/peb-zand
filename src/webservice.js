var zanduli = {};
var ajax = require('ajax');
zanduli.cats = [];
zanduli.listings = [];

var popCats = function(data, st, req) {
	zanduli.cats = data.Data;
    console.log('loaded cats');
};

var popLists = function(data, st, req) {
	var lists = data.Data;
	for (var j = 0; j < lists.length; j++) {
		zanduli.listings.push({
			title: lists[j].Title,
			guid: lists[j].CategoryGuid
		});
	}
        console.log('loaded lists');
};

function populateData(opts) {
	ajax({
		url: opts.address,
		type: 'json'
	}, opts.callback);
}

(function(){
    
populateData({
	address: 'http://ec2-54-76-161-40.eu-west-1.compute.amazonaws.com/zanduli2/MobileService.svc/V2/en/AllCategory',
	callback: popCats
});

populateData({
	address: 'http://ec2-54-76-161-40.eu-west-1.compute.amazonaws.com/zanduli2/MobileService.svc/V2/en/AllListing',
	callback: popLists
});

})();


module.exports = zanduli;