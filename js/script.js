'use strict';

function bindData() {
    let users = [], logos = [], games = [], descriptions = [], urls = [], banners = []

    for (let i = 0; i < data.length; i++) {

        if (data[i].stream != null) {
            users.push(data[i].stream.display_name)
            logos.push(data[i].stream.logo)
            games.push(data[i].stream.game)
            descriptions.push(data[i].stream.status)
            urls.push(data[i].stream.url)
            banners.push(data[i].stream.profile_banner)
        }

    }
}

function updateDOM() {

}

function isStreamDeleted() {

}

function isStreamActive() {

}

function isStreamInactive() {

}

console.log(data)