import{R as e,L as C,u as O,r as i,a as k,b as Z,W as G,B as W,c as K,d as D,e as V,q as Q}from"./vendor.db9b3bf5.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};X();const Y="_navbar_1jidr_1",ee="_navItem_1jidr_19",te="_icon_1jidr_23";var y={navbar:Y,navItem:ee,icon:te};function ae(s){const{currentUserId:t}=s;return e.createElement("nav",{className:y.navbar},e.createElement("div",{className:y.navItem},e.createElement(C,{to:"/NewPost"},e.createElement("img",{className:y.icon,src:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/icons8-add-image-50.png?v=1650902100632",alt:"NewPost"}))),e.createElement("div",{className:y.navItem},e.createElement(C,{to:"/"},e.createElement("img",{className:y.icon,src:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/icons8-explore-64.png?v=1650426575189",alt:"Explore"}))),e.createElement("div",{className:y.navItem},e.createElement(C,{to:`/Profile/${t}`},e.createElement("img",{className:y.icon,src:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/icons8-person-64.png?v=1650426575189",alt:"Profile"}))))}const ne="_postContainer_1xm6f_1",re="_searchContainer_1xm6f_8",se="_labelItem_1xm6f_15",oe="_postItem_1xm6f_19",ie="_postImg_1xm6f_23";var p={postContainer:ne,searchContainer:re,labelItem:se,postItem:oe,postImg:ie},q=s=>{var t=Math.floor((new Date-new Date(s))/1e3),n=Math.floor(t/31556926);return n>=1?n+" years ago":(n=Math.floor(t/2592e3),n>=1?n+" months ago":(n=Math.floor(t/86400),n>=1?n+" days ago":(n=Math.floor(t/3600),n>=1?n+" hours ago":(n=Math.floor(t/60),n>=1?n+" minutes ago":Math.floor(t)+" seconds ago"))))};const le="_container_30qbr_1",ce="_itemContainer_30qbr_8",de="_userProfile_30qbr_14",me="_sellerName_30qbr_29",ge="_row_30qbr_42",he="_imgContainer_30qbr_47",ue="_listingImg_30qbr_52",pe="_listingInfo_30qbr_59",fe="_listingInfoItem_30qbr_64",ve="_sellerContainer_30qbr_68",be="_buttonContainer_30qbr_73",Ee="_contactSellerButton_30qbr_77",Ie="_contactSellerLink_30qbr_89";var r={container:le,itemContainer:ce,userProfile:de,sellerName:me,row:ge,imgContainer:he,listingImg:ue,listingInfo:pe,listingInfoItem:fe,sellerContainer:ve,buttonContainer:be,contactSellerButton:Ee,contactSellerLink:Ie};function J(s){const{items:t,users:n}=s,{listingId:d}=O();return e.createElement("div",{className:r.container},d?t.filter(a=>a.id===d).sort((a,o)=>new Date(o.date)-new Date(a.date)).map((a,o)=>{const m=n.find(g=>g.id===a.sellerId);return e.createElement("div",{className:r.itemContainer,key:`${o}-listing`},e.createElement("div",{className:`${r.row} ${r.userProfile}`},e.createElement("img",{src:a.sellerImg}),e.createElement(C,{className:r.sellerName,to:`profile/${a.sellerId}`},e.createElement("div",null,a.sellerId))),e.createElement("div",null,e.createElement("div",{className:r.imgContainer},e.createElement("img",{src:a.image,className:r.listingImg})),e.createElement("div",{className:r.sellerContainer},e.createElement("div",{className:r.listingInfo},e.createElement("div",{className:r.listingInfoItem},a.title),e.createElement("div",{className:r.listingInfoItem},"$",a.price),e.createElement("div",{className:r.listingInfoItem},q(a.date))),e.createElement("div",{className:r.buttonContainer},e.createElement("a",{href:"tel:"+m.phone,className:r.contactSellerButton},e.createElement("div",{className:r.contactSellerLink},"Phone")),e.createElement("a",{href:"mailto: "+m.email,className:r.contactSellerButton},e.createElement("div",{className:r.contactSellerLink},"Email"))))))}):t.sort((a,o)=>new Date(o.date)-new Date(a.date)).map((a,o)=>{const m=n.find(g=>g.id===a.sellerId);return e.createElement("div",{className:r.itemContainer,key:`${o}-listing`},e.createElement("div",{className:`${r.row} ${r.userProfile}`},e.createElement("img",{src:a.sellerImg}),e.createElement(C,{className:r.sellerName,to:`profile/${a.sellerId}`},e.createElement("div",null,a.sellerId))),e.createElement("div",null,e.createElement("div",{className:r.imgContainer},e.createElement("img",{src:a.image,className:r.listingImg})),e.createElement("div",{className:r.sellerContainer},e.createElement("div",{className:r.listingInfo},e.createElement("div",{className:r.listingInfoItem},a.title),e.createElement("div",{className:r.listingInfoItem},"$",a.price),e.createElement("div",{className:r.listingInfoItem},q(a.date))),e.createElement("div",{className:r.buttonContainer},e.createElement("a",{href:"tel:"+m.phone,className:r.contactSellerButton},e.createElement("div",{className:r.contactSellerLink},"Phone")),e.createElement("a",{href:"mailto: "+m.email,className:r.contactSellerButton},e.createElement("div",{className:r.contactSellerLink},"Email"))))))}))}function _e(s){const{users:t,items:n}=s,[d,a]=i.exports.useState("All"),[o,m]=i.exports.useState(n);function g(u){if(a(u.target.value),u.target.value==="All"){m(n);return}const b=n.filter(E=>E.category===u.target.value);m(b)}return e.createElement("div",{className:"container"},e.createElement("div",{className:p.searchContainer},e.createElement("div",{className:p.checkContainer},e.createElement("label",{className:p.labelItem},e.createElement("input",{type:"radio",value:"All",checked:d==="All",onChange:g}),"All",e.createElement("span",{className:p.checkmark})),e.createElement("label",{className:p.labelItem},e.createElement("input",{type:"radio",value:"Furniture",checked:d==="Furniture",onChange:g}),"Furniture",e.createElement("span",{class:p.checkmark})),e.createElement("label",{className:p.labelItem},e.createElement("input",{type:"radio",value:"Clothes",checked:d==="Clothes",onChange:g}),"Clothes",e.createElement("span",{className:p.checkmark})),e.createElement("label",{className:p.labelItem},e.createElement("input",{type:"radio",value:"Other",checked:d==="Other",onChange:g}),"Other",e.createElement("span",{className:p.checkmark})))),e.createElement("div",{className:p.postContainer},e.createElement(J,{users:t,items:o})))}const ye="_navbar_119dr_1",we="_logo_119dr_20";var x={navbar:ye,logo:we};function Ne(){return e.createElement("nav",{className:x.navbar},e.createElement("div",{className:x.navItem},e.createElement("button",null)),e.createElement("div",{className:x.navItem},e.createElement("img",{className:x.logo,src:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/logo.jpg?v=1650481144790",alt:"BC Thrift"})),e.createElement("div",{className:x.navItem},e.createElement("button",null)))}const Ce="_square_1vx5b_2",ke="_content_1vx5b_7",xe="_image_1vx5b_13",je="_flex_1vx5b_19";var M={square:Ce,content:ke,image:xe,flex:je};function De(s){return e.createElement("div",{className:M.square},e.createElement("div",{className:M.content},e.createElement("img",{className:M.image,src:s.listing.image,alt:"Post Thumbnail"})))}const Se="_profileContainer_s6ytr_1",Le="_profileContainer2_s6ytr_7",Te="_posts_s6ytr_12",$e="_flex_s6ytr_18",Pe="_justifyCenter_s6ytr_25",Be="_info_s6ytr_29",Me="_center_s6ytr_34",Fe="_profile_s6ytr_1",Oe="_gray_s6ytr_48",qe="_blackBold_s6ytr_52",Je="_profileName_s6ytr_57",He="_userBio_s6ytr_61",Re="_followBtn_s6ytr_64",ze="_unfollowBtn_s6ytr_72",Ae="_reviewsList_s6ytr_82",Ue="_userProfile_s6ytr_91",Ze="_actions_s6ytr_106";var c={profileContainer:Se,profileContainer2:Le,posts:Te,flex:$e,justifyCenter:Pe,info:Be,center:Me,profile:Fe,gray:Oe,blackBold:qe,profileName:Je,userBio:He,followBtn:Re,unfollowBtn:ze,reviewsList:Ae,userProfile:Ue,actions:Ze};function Ge(s){const{userId:t}=O(),{currentUserId:n}=s,[d,a]=i.exports.useState(""),o=s.users.find(l=>l.id===t),m=s.items.filter(l=>l.sellerId===t),g=s.reviews.filter(l=>l.reviewedId===t),u=s.reviews.filter(l=>l.authorId===t);function b(l){a(l.target.value)}function E(l){l.preventDefault(),s.addReview(n,t,d),a("")}return e.createElement("div",{className:"container"},e.createElement("div",{className:c.profileContainer},e.createElement("div",{className:c.profileContainer2},e.createElement("div",{className:`${c.flex} ${c.justifyCenter}`},e.createElement("img",{src:o.photo,className:c.profile})),e.createElement("span",{className:c.blackBold},o.name),e.createElement("br",null),e.createElement("div",{className:c.userBio},o.bio),e.createElement("div",{className:`${c.flex} ${c.info}`},e.createElement("div",{className:`${c.center} ${c.gray}`},e.createElement("span",{className:c.blackBold},m.length),"Listings"),e.createElement("div",{className:`${c.center} ${c.gray}`},e.createElement("span",{className:c.blackBold},g.length),"Reviews"),e.createElement("div",{className:`${c.center} ${c.gray}`},e.createElement("span",{className:c.blackBold},u.length),"Reviewed")),e.createElement("div",{className:c.posts},m.map((l,I)=>e.createElement(C,{key:I,to:`/${l.id}`},e.createElement(De,{listing:l})))),e.createElement("h1",null,"My reviews"),e.createElement("div",null,g.map((l,I)=>{const f=s.users.find(v=>v.id===l.authorId);return e.createElement("div",{className:c.reviewsList,key:`review-${I}`},e.createElement("div",{className:`${c.row} ${c.userProfile}`},e.createElement("img",{src:f.photo}),e.createElement("div",{className:c.name,to:`Profile/${f.id}`},e.createElement("div",null,f.id))),e.createElement("div",null,l.description))})),n!==t?e.createElement("div",null,e.createElement("h1",null,"Write a review"),e.createElement("textarea",{placeholder:"Write review...",rows:"3",value:d,onChange:b}),e.createElement("div",{className:c.actions},e.createElement("button",{onClick:E},"Share"))):e.createElement(e.Fragment,null))))}const We="_photo_t0zfj_1",Ke="_dropArea_t0zfj_19",Ve="_dragging_t0zfj_25",Qe="_message_t0zfj_29",Xe="_image_t0zfj_34",Ye="_desc_t0zfj_41",et="_actions_t0zfj_55",tt="_error_t0zfj_69";var w={photo:We,dropArea:Ke,dragging:Ve,message:Qe,image:Xe,desc:Ye,actions:et,error:tt};class H extends i.exports.PureComponent{constructor(t){super(t);this.handleDragEnter=this.handleDragEnter.bind(this),this.handleDrop=this.handleDrop.bind(this),this.handleDragOver=this.handleDragOver.bind(this),this.handleDragLeave=this.handleDragLeave.bind(this)}handleDrop(t){t.preventDefault(),t.stopPropagation(),this.props.onDrop&&this.props.onDrop(t)}handleDragEnter(t){t.preventDefault(),t.stopPropagation(),this.dragTargetSaved=t.target,this.props.onDragEnter&&this.props.onDragEnter(t)}handleDragOver(t){t.dataTransfer.types.includes("Files")!==!1&&(t.preventDefault(),t.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(t))}handleDragLeave(t){t.preventDefault(),t.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===t.target&&this.props.onDragLeave(t)}render(){let t=e.Children.only(this.props.children);return e.cloneElement(t,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}H.propTypes={onDrop:k.func,onDragEnter:k.func,onDragOver:k.func,onDragLeave:k.func,children:k.element.isRequired};function at(s){const[t,n]=i.exports.useState(!1),[d,a]=i.exports.useState(""),[o,m]=i.exports.useState(""),[g,u]=i.exports.useState(""),[b,E]=i.exports.useState("Furniture"),[l,I]=i.exports.useState(null),[f,v]=i.exports.useState(""),_=Z();function N(h){n(!0)}function L(h){n(!1)}function T(h){if(h.dataTransfer.types.includes("Files")!==!1){if(h.dataTransfer.files.length>=1){let B=h.dataTransfer.files[0];if(B.size>1e7)return;if(B.type.match(/image.*/)){let F=new FileReader;F.onloadend=U=>{I(U.target.result)},F.readAsDataURL(B)}}n(!1)}}function $(h){u(h.target.value)}function P(h){a(h.target.value)}function R(h){m(h.target.value)}function z(h){if(h.preventDefault(),l===null){v("Photo must be added");return}console.log("here in post",d,o,g,b),s.addListing(l,d,o,g,b),v(""),_("/")}function A(h){E(h.target.value)}return e.createElement("div",{className:"container"},e.createElement("h1",{style:{textAlign:"center"}},"Upload a listing"),e.createElement("div",{className:w.photo},l?e.createElement("img",{src:l,alt:"New Post"}):e.createElement("div",{className:w.message},"Drop your image"),e.createElement(H,{onDragEnter:N,onDragLeave:L,onDrop:T},e.createElement("div",{className:[w.dropArea,t?w.dragging:null].join(" ")}))),e.createElement("div",{className:w.desc},e.createElement("textarea",{placeholder:"Insert title...",rows:"3",value:g,onChange:$}),e.createElement("textarea",{placeholder:"Insert description...",rows:"3",value:d,onChange:P}),e.createElement("textarea",{placeholder:"Insert price...",rows:"3",value:o,onChange:R}),e.createElement("select",{onChange:A},e.createElement("option",{value:"Furniture"},"Furniture"),e.createElement("option",{value:"Clothes"},"Clothes"),e.createElement("option",{value:"Other"},"Other"))),e.createElement("div",{className:w.error},f),e.createElement("div",{className:w.actions},e.createElement("button",{onClick:()=>_("/")},"Cancel"),e.createElement("button",{onClick:z},"Share")))}var S={currentUserId:"Jason",users:[{id:"Micah",email:"micah.kim@bc.edu",phone:"6173966229",photo:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/IMG_7182-2.jpg?v=1650402550811",bio:"I am a sophomore studying Computer Science. I love singing in my freetime!",name:"Micah Kim"},{id:"Jason",email:"jason.tee@bc.edu",phone:"6173966229",photo:"https://cdn.glitch.global/16f44a30-eb40-4ea4-9589-7ac0ef3fb742/jason.jpeg?v=1650397334972",bio:"I am a senior studying Computer Science and a minor in Management and Leadership. I love building applications!",name:"Jason Tee"},{id:"Hajin",email:"hajin.cho@bc.edu",phone:"6173966229",photo:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/hajin.jpeg?v=1650420461705",bio:"I am a sophomore student studying Computer Science and Philosophy. I enjoy playing golf!",name:"Hajin Cho"}],saleitems:[{id:"item-1",sellerId:"Jason",sellerImg:"https://cdn.glitch.global/16f44a30-eb40-4ea4-9589-7ac0ef3fb742/jason.jpeg?v=1650397334972",title:"Perspectives 1 Textbooks",image:"https://cdn.glitch.global/16f44a30-eb40-4ea4-9589-7ac0ef3fb742/books.jpeg?v=1650391331234",description:"These are some used perspectives textbooks. I used them my freshman year and am selling them for much cheaper than the bookstore!",price:"19.99",date:"2020-02-09T22:52:01Z",category:"Other"},{id:"item-2",sellerId:"Jason",sellerImg:"https://cdn.glitch.global/16f44a30-eb40-4ea4-9589-7ac0ef3fb742/jason.jpeg?v=1650397334972",title:"Wooden Bed Frame",image:"https://cdn.glitch.global/16f44a30-eb40-4ea4-9589-7ac0ef3fb742/furniture.jpeg?v=1650394031303",description:"Working TV stand. It is fully made of wood. Used for a year.",price:"29.99",date:"2020-02-09T22:52:01Z",category:"Furniture"},{id:"item-3",sellerId:"Micah",sellerImg:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/IMG_7182-2.jpg?v=1650402550811",title:"Kitchen Utensil Set",image:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/kitchen.jpg?v=1650402238373",description:"Some used kitchen utensils. Used regularly but they are all in good condition. I need to get rid of them since I am graduating.",price:"9.99",date:"2020-02-09T22:52:01Z",category:"Other"},{id:"item-4",sellerId:"Hajin",sellerImg:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/hajin.jpeg?v=1650420461705",title:"Multivariable Calculus Textbook (2nd edition)",image:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/textbook.jpg?v=1650424683409",description:"Some used .",price:"19.99",date:"2020-02-09T22:52:01Z",category:"Other"},{id:"item-5",sellerId:"Hajin",sellerImg:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/hajin.jpeg?v=1650420461705",title:"Wooden TV Stand",image:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/tvstand.jpg?v=1650424779136",description:"Some used. Still in great condition. Open to offers .",price:"25",date:"2022-02-09T22:52:01Z",category:"Furniture"},{id:"item-6",sellerId:"Micah",sellerImg:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/IMG_7182-2.jpg?v=1650402550811",title:"Boston College Grey Hoodie (size M)",image:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/Clothes.png?v=1650907030835",description:"Almost New. Great Essential BC gear! Size Tag is missing but fits like a medium.  .",price:"20",date:"2021-04-09T22:52:01Z",category:"Clothes"},{id:"item-7",sellerId:"Micah",sellerImg:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/IMG_7182-2.jpg?v=1650402550811",title:"Fundamental of Finance Textbook",image:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/Finance%20Textbook.jpeg?v=1650907750249",description:"Never Used. Bought the textbook last semester, 2021 Fall, for Professor Jorring's Fundamental of Finance course. ",price:"60",date:"2021-11-09T22:52:01Z",category:"Other"},{id:"item-8",sellerId:"Jason",sellerImg:"https://cdn.glitch.global/16f44a30-eb40-4ea4-9589-7ac0ef3fb742/jason.jpeg?v=1650397334972",title:"Nike Dunk Shoes (Men size 10)",image:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/Nike-Dunk-Low-UNC.webp?v=1650908156579",description:" Shoes in great preloved condition! I love the light-blue color of these UNC Nike Dunk Low. Original box included. If you have questions don't hesitate to ask. ",price:"200",date:"2021-11-09T22:52:01Z",category:"Clothes"},{id:"item-9",sellerId:"Hajin",sellerImg:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/hajin.jpeg?v=1650420461705",title:"Bean Bag Chair perfect for dorm",image:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/Pillow couch.png?v=1650916159309",description:"The chair is a good size for the common room. It is very comfortable and has been used for 1 year. There is also a side sleeve pocket for holding a book! ",price:"80",date:"2021-10-09T22:52:01Z",category:"Furniture"},{id:"item-10",sellerId:"Jason",sellerImg:"https://cdn.glitch.global/16f44a30-eb40-4ea4-9589-7ac0ef3fb742/jason.jpeg?v=1650397334972",title:"New Balance Men Boston College Merch Training Shorts",image:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/Training Shorts.png?v=1650919522905",description:"Black Training pants. Men size Large. Selling them because it is too big on me! Brand new condition. ",price:"25",date:"2022-02-09T22:52:01Z",category:"Clothes"},{id:"item-11",sellerId:"Micah",sellerImg:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/IMG_7182-2.jpg?v=1650402550811",title:"Leather Office Chair",image:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/Office Chair.png?v=1650920268097",description:"I am selling my office chair. I am selling it because I will be abroad next semester - no damage but in great condition.The Faux-leather upholstery adds classic charm. It pairs easily with any decor style. Great way to decorate your dorm!",price:"85",date:"2021-10-09T22:52:01Z",category:"Furniture"},{id:"item-12",sellerId:"Hajin",sellerImg:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/hajin.jpeg?v=1650420461705",title:"LED Light Charging Vanity Mirror",image:"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/LED Mirror.png?v=1650919959567",description:"This is a mirror I have used for 4 years. Still in good condition. Slight damage can be noticeable. It also has a dimable LED light for that perfect selfie lighting. It can turn 360 degrees and has a spot to charge your phone while you get ready for the day! ",price:"43",date:"2021-02-09T22:52:01Z",category:"Other"}],reviews:[{authorId:"Jason",reviewedId:"Hajin",description:"The textbook purchase was definitely worth it! He was so nice to me :)"},{authorId:"Micah",reviewedId:"Jason",description:"I love the bed frame! It is exactly what I wanted and was looking for."},{authorId:"Hajin",reviewedId:"Micah",description:"I do not recommend buying items from Hajin. It was a scam. The Kitchen Utensil Set was very dirty so I threw it away. "},{authorId:"Hajin",reviewedId:"Jason",description:"Jason responded very quickly and I was able to get my item really quickly! I would recommend Jason for sure. "},{authorId:"Hajin",reviewedId:"Jason",description:"I met up with Jason to pick up the item on campus. It was very quick and convenient. "},{authorId:"Jason",reviewedId:"Micah",description:"Jason was very nice. He responded to my questions regarding the item and concerns that I had. I would definitely recommend getting items from Jason! "},{authorId:"Jason",reviewedId:"Hajin",description:"I was not satisfied with the item due to some damages I was not aware of. However, Jason was able to just give it for me for free! Very responsible. "},{authorId:"Micah",reviewedId:"Hajin",description:"I purchased my Finance textbook I needed for next semester from Micah. I was worried that it would be the different version but it was the same edition that I was looking for! It was used but still in clean, good condition. Was able to save up so much money!"},{authorId:"Micah",reviewedId:"Jason",description:"We have realized that we were in the same class which made the delivery process easier! I was able to get the shoes in our next class. This was another way of making friends! Love it :)"}]};const nt="_container_r9daz_1";var rt={container:nt};const st="Hello React!",ot="A simple React single page app, built with Glitch. Remix it to get your own!!!!",it="glitch-default",lt="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2Fhello-react-social.png?v=1616712747908";var j={"glitch-help-instructions":"For a custom domain, change the 'url' parameter from 'glitch-default' to your domain _without_ a traling slash, like 'https://www.example.com'",title:st,description:ot,url:it,image:lt};const ct=()=>{const s=window.location.hostname;return i.exports.createElement(G,null,i.exports.createElement("title",null,j.title),i.exports.createElement("meta",{name:"description",content:j.description}),i.exports.createElement("meta",{name:"robots",content:"index,follow"}),i.exports.createElement("link",{rel:"canonical",href:s}),i.exports.createElement("meta",{property:"og:title",content:j.title}),i.exports.createElement("meta",{property:"og:type",content:"article"}),i.exports.createElement("meta",{property:"og:url",content:s}),i.exports.createElement("meta",{property:"og:description",content:j.description}),i.exports.createElement("meta",{property:"og:image",content:j.image}),i.exports.createElement("meta",{name:"twitter:card",content:"summary"}))};function dt(){const[s,t]=i.exports.useState(()=>JSON.parse(window.localStorage.getItem("users"))||S.users),[n,d]=i.exports.useState(S.saleitems),[a,o]=i.exports.useState(S.reviews),[m,g]=i.exports.useState("home"),[u,b]=i.exports.useState(S.currentUserId);i.exports.useEffect(()=>{console.log(s),window.localStorage.setItem("users",JSON.stringify(s))},[s]);function E(f,v,_,N,L){const T=s.find(P=>P.id===u);console.log(v,_,N);const $={id:`item=${n.length+1}`,sellerId:u,sellerImg:T.photo,title:N,image:f,description:v,price:_,category:L,date:new Date().toISOString()};d(n.concat($)),g("home")}function l(){g("home")}function I(f,v,_){const N={authorId:f,reviewedId:v,description:_};o(a.concat(N))}return e.createElement(W,null,e.createElement(ct,null),e.createElement("div",{className:rt.container},e.createElement(Ne,null),e.createElement("main",{role:"main",className:"wrapper"},e.createElement(K,null,e.createElement(D,{path:"/",element:e.createElement(_e,{users:s,items:n})}),e.createElement(D,{path:"/Profile/:userId",element:e.createElement(Ge,{currentUserId:u,users:s,items:n,reviews:a,addReview:I})}),e.createElement(D,{path:"/NewPost",element:e.createElement(at,{addListing:E,cancelListing:l})}),e.createElement(D,{path:"/:listingId",element:e.createElement(J,{users:s,items:n})}))),e.createElement(ae,{currentUserId:u})))}V.render(e.createElement(e.StrictMode,null,e.createElement(Q,null,e.createElement(dt,null))),document.getElementById("root"));