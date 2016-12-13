'use strict';

const roboStatus = function () {

    const obj = {
        isOnline: function (user) {
            if (user.stream !== null) {
                return true
            }
        },
        isDeleted: function (user) {
            if (user.status === 404) {
                return true
            }
        }
    }
    return obj
}


const roboDOM = function () {
    const userStatus = roboStatus()

    userStatus.createCards = function () {
        const userCards = document.getElementById('userCards')

        for (let i = 0; i < data.length; i++) {
            if (data[i].stream !== null) {
                userCards.insertAdjacentHTML('afterbegin', '<div class="column col-4 col-xs-12"><div class="card"><div class="card-image"><img src="' + data[i].stream.profile_banner + '" class="img-responsive" /></div><div class="card-header"><h4 class="card-title">' + data[i].stream.display_name + '</h4><h6 class="card-meta">' + data[i].stream.game + '</h6></div><div id="beforeCardFooter" class="card-body">' + data[i].stream.status + '</div></div></div>')
            }

            let beforeCardFooter = document.getElementById('beforeCardFooter')

            if (this.isOnline(data[i])) {
                beforeCardFooter.insertAdjacentHTML('afterend', '<div class="card-footer"><div class="toast toast-success text-center">Online</div></div>')
            }

            else if (this.isDeleted(data[i])) {
                beforeCardFooter.insertAdjacentHTML('afterend', '<div class="card-footer"><div class="toast toast-clear text-center">Account deleted!</div></div>')
            }

            else {
                beforeCardFooter.insertAdjacentHTML('afterend', '<div class="card-footer"><div class="toast toast-danger text-center">Offline</div></div>')
            }
        }
    }
    return userStatus
}
console.log(data)
let start = roboDOM()
start.createCards()