'use strict';

function CORSRequest(method, url) {
    const xhr = new XMLHttpRequest()

    if ('withCredentials' in xhr) {
        xhr.open(method, url, true)
    }
    else if (typeof XDomainRequest != 'undefined') {
        xhr = new XDomainRequest()
        xhr.open(method, url)
    }
    else {
        xhr = null
    }

    return xhr
}

function APIRequest() {

}

function getJSON() {

}

function currentStreamStatus() {

}

function streamDeleted() {

}

function updateStatus() {

}

function updateInfo() {

}