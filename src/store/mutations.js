import * as types from './mutation-type'


const mutations = {
  [types.GOODS_ADD](state,val) {
    if(state.added.length === 0) {
      state.added.push({
        id:val.id,
        num:val.num,
        price:val.price,
        name:val.name,
        pic:val.pic,
        type:val.type,
        checked:val.checked
      })
    }else {
      let flag = true
      state.added.forEach((item) => {
        if(item.id === val.id) {
            item.type = val.type
            if(item.type === 0) {
              item.num = item.num + val.num
            }else if(item.type === 1) {
              item.num++
            }
            flag = false
        }
      })
      if(flag) {
        state.added.push({
          id:val.id,
          num:val.num,
          price:val.price,
          name:val.name,
          pic:val.pic,
          type:val.type,
          checked:val.checked
        })
      }
    }
  },
  [types.GOODS_REDUCE](state,val) {
    state.added.forEach((item) => {
      if(item.id === val.id) {
        if(item.num < 2) {
          item.num = 1
        }else {
          item.num--
        }
      }
    })
  },
  [types.GOODS_REMOVE](state,val) {
    state.added.splice(val,1)
  },
  [types.GOODS_CHOSE](state,val) {
    state.added[val].checked = !state.added[val].checked
  }
}

export default mutations
