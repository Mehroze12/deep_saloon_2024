// import React from 'react'
// import Divider from '../../../Components/Divider'
// import { IMAGES } from '../../../utils/Images'

// const Card = () => {

//   const PromoData = [
//     {
//       image: IMAGES.PROMOCODE,
//       name: 'Enter a promo code'
//     },
//     {
//       image: IMAGES.GIFTICON,
//       name: 'Redeem a gift crad'
//     },
//   ]

//   const Amount =
//     [
//       {
//         name: 'Subtotal',
//         amount: '$170'
//       },
//       {
//         name: 'Delivery',
//         amount: '-'
//       },
//       {
//         name: 'Taxes',
//         amount: '$0.00'
//       },
//     ]

//   return (
//     <div className='bg-gray p-5 w-[100%] flex gap-5 flex-col items-center justify-center'>


//       <div className=' w-full flex    items-center justify-between'>
//         <p className='text7 text-white'>Order Summary</p>
//         <p className='underline text7 text-borderColor'>Edit Cart</p>
//       </div>

//       <Divider />

//       <div className='flex w-full items-center gap-4'>
//         <div>
//           <img src={IMAGES.PROMOCODE} className='w-[123px] h-[123px]' />
//         </div>

//         <div className='flex flex-col w-full gap-4'>
//           <div className='flex justify-between '>
//             <p className='text7 text-white'>Pemanent Hair Extensions</p>
//             <p className='text7 text-borderColor'>adsasd</p>
//           </div>
//           <div>
//             <p className='text9 text-white'>Qty: 1</p>
//             <p className='text9 text-white'>More Details ^</p>

//           </div>
//         </div>

//       </div>


//       <Divider />

//       <Divider />



//       <div className='w-full flex flex-col gap-1'>
//         {PromoData.map((item, ind) =>
//         (
//           <div className="flex gap-4 items-center">
//             <img src={item.image} className='w-[20px] h-[20px] object-contain' />
//             <p className='underline text7 text-white'>{item.name}</p>
//           </div>
//         ))}



//       </div>


//       <Divider />



//       <div className="w-full">
//         {Amount.map((item, ind) =>
//         (
//           <div key={ind} className="flex justify-between items-center ">
//             <p className="text7 text-white font-normal ">{item.name}</p>
//             <p className="text7 text-white font-normal ">{item.amount}</p>
//           </div>
//         ))}
//       </div>

//       <Divider />



//       <div className="flex justify-between items-center w-full">
//         <p className="text6 text-white">Total</p>
//         <p className="text6 text-white">$170</p>
//       </div>


//     </div>
//   )
// }

// export default Card


import React from 'react'
import Divider from '../../../Components/Divider'
import { IMAGES } from '../../../utils/Images'
import Button from '../../../Components/Button'

const PromoData = [
  {
    image: IMAGES.PROMOCODE,
    name: 'Enter a promo code',
  },
  {
    image: IMAGES.GIFTICON,
    name: 'Redeem a gift card',
  },
]

const AmountData = [
  {
    name: 'Subtotal',
    amount: '$170',
  },
  {
    name: 'Delivery',
    amount: '-',
  },
  {
    name: 'Taxes',
    amount: '$0.00',
  },
]

const ProductData = {
  image: IMAGES.HAIREXTENSION,
  name: 'Permanent Hair Extensions',
  qty: 1,
  details: 'More Details ^',
}

const PromoItem = ({ item }) => (
  <div className="flex gap-4 items-center">
    <img src={item.image} className="w-[20px] h-[20px] object-contain" alt="Promo" />
    <p className="underline text7 text-white">{item.name}</p>
  </div>
)

const AmountItem = ({ item }) => (
  <div className="flex justify-between items-center gap-5">
    <p className="text7 text-white font-normal">{item.name}</p>
    <p className="text7 text-white font-normal">{item.amount}</p>
  </div>
)

const ProductItem = ({ product }) => (
  <div className="flex w-full items-center gap-4">
    <img src={product.image} className="w-[150px] h-[150px]" alt="Product" />
    <div className="flex flex-col w-full gap-4">
      <div className="flex justify-between">
        <p className="text7 text-white w-[60%]">{product.name}</p>
        <p className="text7 text-borderColor">&159</p>
      </div>
      <div>
        <p className="text9 text-white">Qty: {product.qty}</p>
        <p className="text9 text-white">{product.details}</p>
      </div>
    </div>
  </div>
)

const Card = () => (
  <div className="bg-gray p-5 w-[100%] flex gap-5 flex-col items-center justify-center">
    <div className="w-full flex items-center justify-between">
      <p className="text7 text-white">Order Summary</p>
      <p className="underline text7 text-borderColor cursor-pointer">Edit Cart</p>
    </div>

    <Divider />

    {/* Product Details */}
    <ProductItem product={ProductData} />

    <Divider />

    {/* Promo Code Section */}
    <div className="w-full flex flex-col gap-1">
      {PromoData.map((item, index) => (
        <PromoItem key={index} item={item} />
      ))}
    </div>

    <Divider />

    {/* Amount Details */}
    <div className="w-full">
      {AmountData.map((item, index) => (
        <AmountItem key={index} item={item} />
      ))}
    </div>

    <Divider />

    {/* Total */}
    <div className="flex justify-between items-center w-full">
      <p className="text7 text-white">Total</p>
      <p className="text7 text-white">$170</p>
    </div>

    <Button />
  </div>
)

export default Card
