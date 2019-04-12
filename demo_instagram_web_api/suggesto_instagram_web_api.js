var respJson;
var endCursor="";
var aNext;
var index;


function getJson(url){
    respJson = '';
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function(data, status, xhr)
        {
            respJson = data;
        }        
    });
}

function getMediaByHashtag(hashtag){
    getJson('https://www.instagram.com/explore/tags/' + hashtag + '/?__a=1&max_id=' + endCursor);
    var listaUrl = [];
    for(var i in respJson["graphql"]["hashtag"]["edge_hashtag_to_media"]["edges"]){
        listaUrl.push(respJson["graphql"]["hashtag"]["edge_hashtag_to_media"]["edges"][i]["node"]["thumbnail_src"]);
    }
    endCursor = respJson["graphql"]["hashtag"]["edge_hashtag_to_media"]["page_info"]["end_cursor"];
    aNext = '</br></br><div class="text-right"><a href="#nextPage' + index + '" onclick=showImgByUrls(getMediaByHashtag(document.getElementById("inputTag").value));><h2>next</h2></a></div></br></br>';
    index+=1;
    return(listaUrl);
}

// prova a cercare val di fiemme (id=219073202)
function getMediaByLocationId(id){
    getJson('https://www.instagram.com/explore/locations/' + id + '/?__a=1&max_id=' + endCursor);
    var listaUrl = [];
    for(var i in respJson["graphql"]["location"]["edge_location_to_media"]["edges"]){
        listaUrl.push(respJson["graphql"]["location"]["edge_location_to_media"]["edges"][i]["node"]["thumbnail_src"]);
    }
    endCursor = respJson["graphql"]["location"]["edge_location_to_media"]["page_info"]["end_cursor"];
    aNext = '</br></br><div class="text-right"><a href="#nextPage' + index + '" onclick=showImgByUrls(getMediaByLocationId(document.getElementById("inputLocation").value));><h2>next</h2></a></div></br></br>';
    index+=1;
    return(listaUrl);
}

function getMediaByUsername(username){
    // Puoi vedere il profilo degli account pubblici e il tuo
    getJson('https://www.instagram.com/' + username + '/?__a=1');
    return(respJson);
}

function getMediaByAccountId(id){
    // Puoi vedere il profilo degli account pubblici e il tuo
    getJson('https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"' + id + '","first":12,"after":""}');
    return(respJson);
}

function getInfoAccountId(id){
    getJson('https://i.instagram.com/api/v1/users/' + id + '/info/');
    return(respJson);
}

