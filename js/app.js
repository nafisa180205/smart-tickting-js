const selectedSeatElement = document.getElementById('selected-seat')
const totalBookedElement = document.getElementById('total-booked')
const availableSeatElement = document.getElementById('available-seat')
const totalPriceElement = document.getElementById('total-price')
const couponInputElement = document.getElementById('coupon-input')
const couponButtonElement = document.getElementById('coupon-btn')
const defaultTextElement = document.getElementById('default-text')
const grandTotalElement = document.getElementById('grand-total')
const phoneNumberElement = document.getElementById('phone-number')
const NextButtonElement = document.getElementById('next-btn')


let selectedSeat = []
let totalPrice = 0
function handleSelectSeats(event){
    console.log(event.innerText)

    const value = event.innerText

    if(selectedSeat.includes(value)){
        return alert('Seat already added')
    }

    else if(selectedSeat.length < 4){

        event.classList.add('bg-primary')
        event.classList.add('text-white')
    
        selectedSeat.push(event.innerText)
        totalBookedElement.innerText = selectedSeat.length
        // decrease total seat number 
        // const availableSeatValue = availableSeatElement.innerText
        // const newAvailableSeatValue =  availableSeatValue - 1
        // availableSeatElement.innerText = newAvailableSeatValue


        // remove default text
        defaultTextElement.classList.add('hidden')
    
        selectedSeatElement.innerHTML += `<li class = "text-base font-normal flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>`
    
        totalPrice = totalPrice + 550
    
        totalPriceElement.innerText = totalPrice.toFixed(2)
    
        if(selectedSeat.length >3){
            couponInputElement.removeAttribute('disabled')
            couponButtonElement.removeAttribute('disabled')
    
        }
    }

    else{
        return alert("Max seat limit is reached")
    }

   

}


document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponInputValue = couponInputElement.value
    let couponSave = 0
    
    if(couponInputValue !== "NEW50" && couponInputValue !== "Couple20" ){
        return alert('Your provided coupon is invalid')
    }


    if(couponInputValue === "NEW50"){
        couponSave = totalPrice * .15

    }

    else if(couponInputValue === "Couple20"){
        couponSave =  totalPrice * .20
    }
    const showCouponPrice = document.getElementById('show-coupon-price')

    showCouponPrice.innerHTML = `
    <p>Discount</p> 
    <p>
    <span>-BDT:</span>
    <span>${couponSave.toFixed(2)}</span>
    </p>

    `

    const grandTotalValue = totalPrice - couponSave
    grandTotalElement.innerText = grandTotalValue.toFixed(2)

})


phoneNumberElement.addEventListener('input' , function(e){
    const inputValue = e.target.value
    if(inputValue.length >= 11){
        NextButtonElement.removeAttribute('disabled')
    }
})


// reset button

document.getElementById('btn-continue').addEventListener('click' , function(){
    window.location.reload()
})