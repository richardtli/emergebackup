LogoColors2021 = ['rgb(131,178,255)', 'rgb(107,122,232)', 'rgb(138,117,255)', 'rgb(107,188,232)']

const Logo20211 = document.querySelector(".Logo2021-1")
const Logo20212 = document.querySelector(".Logo2021-2")
const Logo20213 = document.querySelector(".Logo2021-3")
const Logo20214 = document.querySelector(".Logo2021-4")

Logo20211.style.stroke = LogoColors2021[0]
Logo20212.style.stroke = LogoColors2021[1]
Logo20213.style.stroke = LogoColors2021[2]
Logo20214.style.stroke = LogoColors2021[3]

function ChangeLogo2021Colors() {
    LogoColors2021.push(LogoColors2021.shift())
Logo20211.style.stroke = LogoColors2021[3]
Logo20212.style.stroke = LogoColors2021[2]
Logo20213.style.stroke = LogoColors2021[1]
Logo20214.style.stroke = LogoColors2021[0]
}

setInterval(ChangeLogo2021Colors, 500);