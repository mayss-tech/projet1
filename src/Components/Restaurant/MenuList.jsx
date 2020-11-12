import React,{useState} from 'react';
import img1 from '../images/baguette.PNG';
import img2 from '../images/ciabta.PNG';
import img3 from '../images/tacos.PNG';
const MenuList= (props) => {
    const[categories,setcategories]=useState([{
        id:1,
        pic:img1,
        nom:"Baguette Farcie"
    },
        { id:1,
        pic:img2,
        nom:"Ciabata" },
        { id:1,
        pic:img3,
        nom:"Tacos" }
    ])
    const [menu,setmenu]=useState([{
    id:1,
    title:"FERMIER",
    price:"7dt",
    desc:"Jambon de dinde fumé, oignons, tomates fraiches, mozzarella, sauce"
    },
    {
    id:1,
    title:"MEXICAN",
    price:"8dt",
    desc:"Pouletn épicé, poivrons, champignons, piments, rouges, oignons, mozzarella, sauce"
    },
        {
    id:1,
    title:"ARIZONA",
    price:"8.5dt",
    desc:"Viande de boeuf hachée, jambon de boeuf fumé, poivrons, piments, mozzarella, sauce"
    }
])
    return ( <div >
        <div >
        <h3>Mon pannier</h3>
        <i className="fas fa-shopping-cart" ></i>
        </div>
        <h2>Sandwitch</h2>
        <div style={{display:"flex", justifyContent:"space-around"}} >
    {categories.filter(el=>el.id==props.match.params.id).map(el=><div key={el.id}>
        <img src={el.pic}/>
        <p>{el.nom} </p></div>)}</div>

    {menu.map(el=><div key={el.id}>
    <img src={el.img}  />
    <h5> {el.title} </h5>
    <p> {el.desc} </p>
    <p> {el.price} </p>
    <button>Ajouter au pannier</button>
    </div>)}
    
    </div> );
}

export default MenuList;