import {Item} from "../templates/item"

export const ProductFirst = () => {
    fetch("/db/products.json")
        .then(req => req.json())
        .then(req => req[0].data)
        .then(function (param){
            
            var item = [param.item]
            
            const listComponent = (item) => {
                return item.map((item) => {
                    //alterar url de imagem por "item.imageName", quando o servidor voltar a funcionar
                    return (
                        Item(item.businessId, "https://dummyimage.com/190x160/f3f3f3.jpg?text=produto", item.name, item.oldPrice, item.price, item.productInfo.paymentConditions )
                    )
                }).join('')
            }

            const el = document.querySelector('[product-first]')
            el.innerHTML = listComponent(item)

        })
        .catch( console.log )
}