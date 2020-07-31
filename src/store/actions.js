export default {
    addcart(context,payload){
  return new Promise((resolve,reject) =>{
    let oldProduct=null;
     for(let item of context.state.cartlist){
        if(item.iid===payload.iid){
        oldProduct=item;
             }
            }
          if(oldProduct){
          // oldProduct.count+=1
          context.commit('addcount',oldProduct);
          resolve("当前的商品数目加一")
           }else{
           payload.count=1;
          // context. state.cartlist.push(payload)
          context.commit('addtocart',payload);
          resolve("添加了新商品")
          // console.log(payload);
            }
  
  })

}
}