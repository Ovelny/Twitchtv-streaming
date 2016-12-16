'use strict';


const TwitchViewer = function () {
    this.userCards = document.getElementById('userCards')
}

TwitchViewer.prototype.isOnline = function (user) {
    if (user.stream) {
        return true
    }
}

TwitchViewer.prototype.isDeleted = function (user) {
    if (user.status === 404) {
        return true
    }
}

TwitchViewer.prototype.updateDOM = function () {
    for (let i = 0; i < data.length; i++) {
        if (data[i].stream && data[i].stream.display_name) {
            this.userCards.insertAdjacentHTML('afterbegin', '<div class="column col-4 col-xs-12"><div class="card"><div class="card-image"><img src="' + data[i].stream.profile_banner + '" class="img-responsive"/></div><div class="card-header"><h4 class="card-title">' + data[i].stream.display_name + '</h4><h6 class="card-meta">' + data[i].stream.game + '</h6></div><div id="beforeCardFooter" class="card-body">' + data[i].stream.status + '</div></div></div>')
        }

        else if (data[i].status) {
            this.userCards.insertAdjacentHTML('afterbegin', '<div class="column col-4 col-xs-12"><div class="card"><div class="card-image"><img src="http://res.cloudinary.com/ovelny/image/upload/v1481846602/account_not_found_divobv.jpg" class="img-responsive" /></div><div class="card-header"><h4 class="card-title">Account not found!</h4><h6 class="card-meta">Does it still exist?</h6></div><div id="beforeCardFooter" class="card-body"></div></div></div>')
        }

        else {
            this.userCards.insertAdjacentHTML('afterbegin', '<div class="column col-4 col-xs-12"><div class="card"><div class="card-image"><img src="http://res.cloudinary.com/ovelny/image/upload/v1481846602/Check_back_later_vtff7r.jpg" class="img-responsive" /></div><div class="card-header"><h4 class="card-title">' + data[i].display_name + '</h4><h6 class="card-meta">Offline for now</h6></div><div id="beforeCardFooter" class="card-body"></div></div></div>')
        }

        this.beforeCardFooter = document.getElementById('beforeCardFooter')

        if (this.isOnline(data[i])) {
            this.beforeCardFooter.insertAdjacentHTML('afterend', '<div class="card-footer"><div class="toast toast-success text-center">Online</div></div>')
        }

        else if (this.isDeleted(data[i])) {
            this.beforeCardFooter.insertAdjacentHTML('afterend', '<div class="card-footer"><div class="toast toast-clear text-center">Oops!</div></div>')
        }

        else {
            this.beforeCardFooter.insertAdjacentHTML('afterend', '<div class="card-footer"><div class="toast toast-danger text-center">Offline</div></div>')
        }
        console.log('ran ' + i + ' times')
    }
}

console.log(data)
let start = new TwitchViewer()
start.updateDOM()