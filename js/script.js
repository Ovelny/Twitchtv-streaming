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
            this.userCards.insertAdjacentHTML('beforeend', '<div class="column"><a href="' + data[i].stream.url + '" target="_blank"><div class="card"><div class="card-image"><img src="' + data[i].stream.profile_banner + '" class="img-responsive"/></div><div class="card-header"><h4 class="card-title">' + data[i].stream.display_name + '</h4><h6 class="card-meta">' + data[i].stream.game + '</h6></div><div class="card-body">' + data[i].stream.status + '</div></div></a></div>')
        }

        else if (data[i].status) {
            this.userCards.insertAdjacentHTML('beforeend', '<div class="column"><div class="card"><div class="card-image"><img src="http://res.cloudinary.com/ovelny/image/upload/v1481846602/account_not_found_divobv.jpg" class="img-responsive" /></div><div class="card-header"><h4 class="card-title">404!</h4><h6 class="card-meta">Does it still exist?</h6></div><div class="card-body"></div></div></div>')
        }

        else {
            this.userCards.insertAdjacentHTML('beforeend', '<div class="column"><a href="https://www.twitch.tv/' + data[i].display_name.toLowerCase() + '" target="_blank"><div class="card"><div class="card-image"><img src="http://res.cloudinary.com/ovelny/image/upload/v1481846602/Check_back_later_vtff7r.jpg" class="img-responsive" /></div><div class="card-header"><h4 class="card-title">' + data[i].display_name + '</h4><h6 class="card-meta">Offline for now</h6></div><div class="card-body"></div></div></a></div>')
        }

        this.beforeCardFooter = document.getElementsByClassName('card-body')

        if (this.isOnline(data[i])) {
            this.beforeCardFooter[i].insertAdjacentHTML('afterend', '<div class="card-footer"><div class="toast toast-success text-center">Online</div></div>')
        }

        else if (this.isDeleted(data[i])) {
            this.beforeCardFooter[i].insertAdjacentHTML('afterend', '<div class="card-footer"><div class="toast toast-clear text-center">Oops!</div></div>')
        }

        else {
            this.beforeCardFooter[i].insertAdjacentHTML('afterend', '<div class="card-footer"><div class="toast toast-danger text-center">Offline</div></div>')
        }
    }
}

TwitchViewer.prototype.toggleOnline = function () {
    document.getElementById('toggle').addEventListener('click', function () {
        for (let i = 0; i < data.length; i++) {
            const el = document.getElementsByClassName('column')[i]
            const cardFooter = document.getElementsByClassName('card-footer')[i]
            if (cardFooter.textContent === 'Oops!' || cardFooter.textContent === 'Offline') {
                el.classList.toggle('ghost')
            }
        }
    })
}

const start = new TwitchViewer()
start.updateDOM()
start.toggleOnline()