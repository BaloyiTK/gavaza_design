import { useState } from "react";


const designs = [

  {
    id: 1,
    name: "Premium Designer Apron",
    category: "Aprons",
    image: "/images/apron1.jpg",
    description:
      "Beautiful custom aprons designed for personal and professional use."
  },

  {
    id: 2,
    name: "Custom Embroidery Design",
    category: "Embroidery",
    image: "/images/embroidery1.jpg",
    description:
      "Unique embroidery patterns created according to your choice."
  },

  {
    id: 3,
    name: "Traditional Heritage Outfit",
    category: "Traditional Clothes",
    image: "/images/traditional1.jpg",
    description:
      "Elegant traditional clothing made for special occasions."
  },

  {
    id: 4,
    name: "African Celebration Wear",
    category: "Traditional Clothes",
    image: "/images/traditional2.jpg",
    description:
      "Beautiful cultural designs celebrating heritage."
  },

  {
    id: 5,
    name: "Personalised Custom Outfit",
    category: "Custom Designs",
    image: "/images/custom1.jpg",
    description:
      "Your idea transformed into a unique fashion design."
  },

  {
    id: 6,
    name: "Business Apron Collection",
    category: "Aprons",
    image: "/images/apron2.jpg",
    description:
      "Professional aprons designed for businesses."
  }

];


const categories = [
  "All",
  "Aprons",
  "Embroidery",
  "Traditional Clothes",
  "Custom Designs"
];



export default function GalleryPage(){


const [selectedCategory,setSelectedCategory] = useState("All");



const filteredDesigns =
selectedCategory === "All"

?

designs

:

designs.filter(
(item)=>item.category === selectedCategory
);



const orderDesign = (name)=>{

const message =
`Hi Gavaza Sesinyani Designs, I am interested in ${name}.`;

window.open(
`https://wa.me/27800000000?text=${encodeURIComponent(message)}`,
"_blank"
);

};



return (

<section
className="
pt-28
pb-20
px-4
sm:px-6
bg-[#fffaf3]
"
>


<div className="
max-w-7xl
mx-auto
">


<h1
className="
text-4xl
sm:text-5xl
md:text-6xl
text-center
font-serif
font-bold
text-[#7A3E1D]
"
>

Our Design Collection

</h1>



<p
className="
mt-4
text-center
text-gray-600
text-sm
sm:text-base
max-w-xl
mx-auto
"
>

Explore our handmade aprons, embroidery,
traditional clothes and custom designs.

</p>




{/* Mobile Scrollable Categories */}

<div
className="
mt-8
flex
gap-3
overflow-x-auto
pb-3
sm:justify-center
scrollbar-hide
"
>


{
categories.map((category)=>(

<button

key={category}

onClick={()=>setSelectedCategory(category)}

className={`
whitespace-nowrap
px-5
py-2.5
rounded-full
text-sm
font-medium
transition

${
selectedCategory === category

?

"bg-[#7A3E1D] text-white"

:

"bg-white text-gray-700 border"

}

`}

>

{category}

</button>

))

}


</div>





{/* Gallery Cards */}

<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-10
"

>


{
filteredDesigns.map((design)=>(


<div

key={design.id}

className="
bg-white
rounded-3xl
overflow-hidden
shadow-md
hover:shadow-xl
transition
"

>


<img

src={design.image}

alt={design.name}

className="
w-full
h-80
sm:h-96
object-cover
"

/>



<div
className="
p-5
"
>


<p
className="
text-sm
text-[#C89B5C]
font-semibold
"
>

{design.category}

</p>



<h2
className="
text-xl
font-bold
mt-2
text-[#7A3E1D]
"
>

{design.name}

</h2>



<p
className="
text-gray-600
text-sm
mt-3
"
>

{design.description}

</p>




<button

onClick={()=>orderDesign(design.name)}

className="
mt-5
w-full
bg-green-600
text-white
py-3
rounded-full
font-medium
hover:bg-green-700
transition
"

>

Order On WhatsApp

</button>



</div>



</div>


))

}


</div>



</div>


</section>

)

}