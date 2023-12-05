import{j as s,u as x,r as h,a as j}from"./index-b2b99665.js";import g from"./Loader-21d29c6b.js";import{u as p}from"./useCart-7d2e1af4.js";const v=({product:t})=>{const{cart:e,addToCart:r,removeFromCart:i}=p(),a=e[t.id],o=a?a.quantity:0,c=()=>{r(t)},d=()=>{i(t.id)};return s.jsx("div",{className:"add-to-cart",children:a?s.jsxs(s.Fragment,{children:[s.jsx("div",{onClick:d,className:"add remove",children:"-"}),s.jsx("div",{className:"quantity",children:o}),s.jsx("div",{onClick:c,className:"add",children:"+"})]}):s.jsx("button",{onClick:c,className:"add",children:"Add to Cart"})})},N=({product:t})=>s.jsxs("div",{className:"product-item",children:[s.jsx("img",{className:"product-image",src:t.image,alt:t.title}),s.jsxs("div",{className:"product-details",children:[s.jsx("div",{className:"product-title",children:t.title}),s.jsxs("div",{className:"buy-item",children:[s.jsxs("div",{className:"product-price",children:["Price: $",t.price]}),s.jsx(v,{product:t})]})]})]});const C=({totalPages:t,currentPage:e,paginate:r})=>s.jsx("div",{className:"pagination",children:Array.from({length:t}).map((i,a)=>s.jsx("button",{onClick:()=>r(a+1),className:a+1===e?"active":"",children:a+1},a))});const k=()=>{const{categoryName:t}=x(),e=3,[r,i]=h.useState(1),a=r*e,o=a-e,c=n=>i(n),{isLoading:d,error:P,data:l}=j(`https://fakestoreapi.com/products/category/${t||""}`,[],c),m=l.slice(o,a),u=Math.ceil(l.length/e);return s.jsx("div",{className:"container",children:d?s.jsx(g,{}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"product-list",children:m&&m.map(n=>s.jsx(N,{product:n},n.id))}),s.jsx(C,{totalPages:u,currentPage:r,paginate:c})]})})};export{k as default};
