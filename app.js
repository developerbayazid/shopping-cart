function productChangeHandler(product, isIncrease){
    const productInput = document.getElementById(product + '-quantity');
    const productQuantity = parseInt(productInput.value);

    let productQuantityNumber = productQuantity;
    if(isIncrease == true){
        productQuantityNumber = productQuantity + 1;
    }else if(isIncrease == false && productQuantity > 0){
        productQuantityNumber = productQuantity - 1;
    }
    productInput.value = productQuantityNumber;

    let productTotalPrice = 0;
    if(product == 'case'){
        productTotalPrice = productQuantityNumber * 59;
    }else if(product == 'phone'){
        productTotalPrice = productQuantityNumber * 1219;
    }
    document.getElementById(product + '-price').innerText = productTotalPrice;
    calculateTotal();

}

function calculateTotal(){
    const phoneInput = document.getElementById('phone-quantity');
    const phoneQuantity = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-quantity');
    const caseQuantity = parseInt(caseInput.value);

    const totalAmount = (phoneQuantity * 1219) + (caseQuantity * 59)

    document.getElementById('total-amount').innerText = totalAmount;

    const tax = totalAmount * 0.05;
    const totalTax = Math.round(tax);
    document.getElementById('tax').innerText = totalTax;

    const grandTotalAmount = totalAmount + totalTax;
    document.getElementById('grand-total').innerText = grandTotalAmount;

}