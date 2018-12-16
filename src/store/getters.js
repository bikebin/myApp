
export const total = (state) => {
    let total = 0
    state.added.forEach((item) => {
      if(item.checked) {
        total +=  item.price * item.num
      }
    })
    return total.toFixed(2)
  }



