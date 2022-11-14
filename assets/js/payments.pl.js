const bizumButton = document.getElementById('bizumButton')
const bankButton = document.getElementById('bankButton')
const cardButton = document.getElementById('cardButton')
const paypalButton = document.getElementById('paypalButton')
const cryptoButton = document.getElementById('cryptoButton')
const privatButton = document.getElementById('privatButton')

const infoBlock = document.getElementById('paymentInfoBlock')

const bizumPaymentInfo = `<div class="paymentInfo">Bizum: ${620} ${844} ${711}</div>`
const bankPaymentInfo = `<div class="paymentInfo">
  <div>Informacje o koncie do dokonania dotacji przelewem SEPA lub SWIFT:</div>
  <div>${'IB'}AN: ${'ES39'} ${'1563'} ${'2626'} ${'3232'} ${'6916'} ${'2693'}</div>
  <div>BIC: ${'NTSBE'}${'SM1XXX'}</div>
  <div>N${'am'}e: ${'Dmy'}t${'ro'} Za${'iet'}s</div>
</div>`
const cardPaymentInfo = `<div class="paymentInfo">Kliknij link, aby przekazać darowiznę kartą, Apple Pay lub Google Pay: <a href="https://send.monobank.ua/jar/5XYsUEYyAJ">https://send.monobank.ua/jar/5XYsUEYyAJ</a></div>`
const paypalPaymentInfo = `<div class="paymentInfo">Kliknij link, aby przekazać darowiznę przez PayPal: <a href="https://www.paypal.me/dmitryzaets">https://www.paypal.me/dmitryzaets</a></div>`
const cryptoPaymentInfo = `<div class="paymentInfo">
  <div>E${'T'}H: ${'0xfacD0FBCb'}${'2E9b8e'}2D2C90eDEeFC${'9562b77'}986e04</div>
</div>`
const privatPaymentInfo = `<div class="paymentInfo">
  <div>Ka${'r'}ta: ${'516'}8752${'004217'}504</div>
</div>`

bankButton.onclick = () => {
  infoBlock.innerHTML = bankPaymentInfo
}

cardButton.onclick = () => {
  infoBlock.innerHTML = cardPaymentInfo
}

paypalButton.onclick = () => {
  infoBlock.innerHTML = paypalPaymentInfo
}

cryptoButton.onclick = () => {
  infoBlock.innerHTML = cryptoPaymentInfo
}

privatButton.onclick = () => {
  infoBlock.innerHTML = privatPaymentInfo
}
