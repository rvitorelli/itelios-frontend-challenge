import {Item} from "../templates/item"
import { tns } from "tiny-slider";

export const ProductSlide = () => {
    fetch("/db/products.json")
        .then(req => req.json())
        .then(req => req[0].data)
        .then(function (param){
            
            var item = param.recommendation
            
            const listComponent = (item) => {
                return item.map((item) => {
                    //alterar url de imagem por "item.imageName", quando o servidor voltar a funcionar
                    if(item.oldPrice == null){
                        let empty = item.oldPrice = ""
                        return (
                            Item(item.businessId, "https://dummyimage.com/190x160/f3f3f3.jpg?text=produto", item.name, "", empty, item.price, item.productInfo.paymentConditions )
                        )
                    }
                    return (
                        Item(item.businessId, "https://dummyimage.com/190x160/f3f3f3.jpg?text=produto", item.name, "De:",item.oldPrice, item.price, item.productInfo.paymentConditions )
                    )
                }).join('')
            }

            const el = document.querySelector('[product-slide]')
            el.innerHTML = listComponent(item)

            const slider = tns({
                container: 'ul.my-slider', //classe do slider
                items: 3, //Quantidade de itens exibidos
                animateNormal: "tns-normal", // Tipo de Animção
                loop: false,
                mouseDrag: true,
                slideBy: "page",
                rewind: true,
                responsive: {
                    "1044": {"items": 3},"1043": {"items": 2},"840": {"items": 2},"839": {"items": 1},"500": {"items": 1},"100": {"items": 1}
                },
            });

        })
        .catch( console.log )
}