import '../styles/Button.css'

const Button=({name,allBtn})=>{
    // console.log(allBtn);
      let btn="button";
      if(allBtn) btn="button allBtn"
    return (
        <button className={btn}>
            {name}
        </button>
    )
}

export default Button;