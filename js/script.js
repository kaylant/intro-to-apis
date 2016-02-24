// select div container to write HTML to
var containerEl = document.querySelector("#container")

var inputEl = document.querySelector('#search input')
// console.log(inputEl)

// var congressionalPromise = $.getJSON('http://openstates.org/api/v1/legislators/?state=ny&apikey=cb1afb855f3241c9923aeb08da1fa968')

$.getJSON('http://openstates.org/api/v1/legislators/?state=nd&apikey=cb1afb855f3241c9923aeb08da1fa968').then(function (dataFromApi) {

	for(var i = 0; i < dataFromApi.length; i++){
    var legislatorObj = dataFromApi[i]
//    console.log(legislatorObj)
	var phoneNo = legislatorObj.offices[0].phone
	var email = legislatorObj.offices[0].email
	var url = legislatorObj.offices[0]['+url']
	var state = legislatorObj.state.toUpperCase()
	var picURL = legislatorObj.photo_url
//	console.log(state)
// 	console.log(phoneNo)

    var htmlString = "<div class = 'legislatorContainer'>"
        htmlString +=   "<p>Legislator " + (i + 1) + "</p>"
        htmlString +=	"<h2>" + legislatorObj.full_name + "</h2>"
        htmlString +=   "<p>" + legislatorObj.party + "</p>"
        htmlString +=   "<p>" + state + "</p>"
        htmlString +=   "<p>" + phoneNo + "</p>"
        htmlString +=   "<p>" + email + "</p>"
        htmlString +=   "<a href='" + url + "'>Website, yo!</a>"
        htmlString +=   "<div class = 'imgContainer'><img src ='" + picURL + "'/></div>"
        htmlString += "</div>"
    
    containerEl.innerHTML += htmlString 
	}

})

var searchFunction = function(e) {
	if (e.keyCode === 13){
		alert("gross!")
	}
}

inputEl.addEventListener('keydown',searchFunction)


	// 	if (e.keyCode === 13) {
		
	// 	var sameDistrict = []

	//     for(var i = 0; i < legislatorObj.length; i++){


	//         if (legislatorObj[i].district === inputEl.value) {

	//             sameDistrict.push(legislatorObj[i])
	//         }

	//     }

	//     return sameDistrict
	// 	}
 // 	}

