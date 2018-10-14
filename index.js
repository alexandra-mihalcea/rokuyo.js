const days = require('./days')
const moment = require('moment')
require('moment-lunar')

function today() {
    return getByMoment(moment())
}

function getByDate(year, month, day){
    month = month -1;
    const date = moment().year(year).month(month).date(day)
    return getByMoment(date)
}

function getByMoment(date){
    date = date.lunar()
    const day = date.date()
    const month = date.month() + 1
    const order = (day%6 - 1 + month%6 - 1 )%6
    return days[order]
}

module.exports = {today, getByDate, getByMoment}
