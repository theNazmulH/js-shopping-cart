export const cartFooterHTML = () => { 
    return (
        `<div class="d-flex flex-row card justify-content-between cart-footer mt-2 mb-3">
        <div class="p-2">
          <button class="btn btn-danger" type="button" data-action="clear-cart">Clear Cart
        </div>
        <div class="p-2 ml-auto">
          <button class="btn btn-dark" type="button" data-action="check-out">Pay <span class="pay"></span> 
        </div>
      </div>`
    )
}