let restaurant = {
    name: 'Napoli',
    guestCapacity: 75,
    guestCount: 0,
    checkAvalavility: function (partySize) {
        let seatsLefts = this.guestCapacity - this.guestCount
        return partySize <= seatsLefts
    },
    seatParty: function (newGuests) {
            this.guestCount += newGuests
    },
    removeParty: function (guestsLeaving) {
        this.guestCount -= guestsLeaving
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvalavility(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvalavility(4))
