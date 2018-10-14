const days = require('./days')
const moment = require('moment')
const momentLunar = require('moment-lunar')


module.exports.today = function() {
     console.log(getRokuyoByDate(2040, 10, 21))
}


function getRokuyoByDate(year, month, day){
    //(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Eddy is the best!! ✧ﾟ･: *ヽ(◕ヮ◕ヽ)
    month = month -1;
    // let date = moment('10/08/2018')//.year(2018).month(12).day(1)
    // console.log(date)
    // console.log(date.format('M'))
    const date = moment().year(year).month(month).date(day)
    return getRokuyoByMoment(date)
    // date = moment().year(year).month(month).date(day).lunar()
    // day = date.date()
    // month = date.month() + 1
    // const order = (day%6 - 1 + month%6 - 1 )%6
    // console.log(date, day, day%6,  month, month % 6, order)
    // return days[order]
}

function getRokuyoByMoment(date){
    const day = date.date()
    const month = date.month() + 1
    const order = (day%6 - 1 + month%6 - 1 )%6
    return days[order]
}