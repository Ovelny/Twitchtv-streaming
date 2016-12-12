'use strict';

const RoboList = function () {
    this.users = []
    this.logos = []
    this.games = []
    this.descriptions = []
    this.urls = []
    this.banners = []

    this.createLists = function () {
        for (const i = 0; i < data.length; i++) {
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
}

const RoboSort = function () {
    // sort arrays and gives an object for each streamer
}

const RoboStatus = function () {

    this.isOnline = function () {
        // return true if user is online
    }

    this.isOffline = function () {
        // return true if user is offline
    }

    this.isDeleted = function () {
        // return true if user is deleted
    }
}

const RoboDOM = function () {
    // update DOM depending of results
}

console.log(data)