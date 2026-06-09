import Main_title from "../Components/Main-title";
import Navbar from "../Components/Navbar";
import Card_comp from "../Components/Card-comp";
import dev2 from "../Photos/dev2.jpeg";
import hunter_image from "../Photos/hunter.jpeg";
import fz_image from "../Photos/fz.jpeg";
import speedt4_image from "../Photos/speedt4.jpeg";
import vstorm_image from "../Photos/vstrom.jpeg";
import gt_image from "../Photos/gt.jpeg";
import s1k_image from "../Photos/s1k.jpeg";
import v4_image from "../Photos/v4.jpeg";
import at_image from "../Photos/at.jpeg";
import cbr_image from "../Photos/cbr.jpeg";
import cbrfb_image from "../Photos/cbrfb.jpeg";
import rd_image from "../Photos/rd.jpeg";
import rx_image from "../Photos/rx.jpeg";
import rxz_image from "../Photos/rxz.jpeg";

function Home(){

    let cb = "HONDA CB350RS:"
    let cb_details = "A bike that is just sails smoothly on road without any vibrations and with a GOAT exhaust note."

    let hunter = "ROYAL ENFIELD HUNTER 350:"
    let hunter_details = "A compact bike that is easy to handle to handle in city rides with a good exhaust note ."
    
    let fz = "YAMAHA FZ 155:"
    let fz_details = "A proper light weight bike which is made to glide through city traffic and flick easily with good efficiency."
   
    let speedt4 = "TRIUMPH SPEED T4:"
    let speedt4_details = " A solid bike with 30 BHP and 36NM, made for performance and commute, with a top speed 165KMPH ."
   
    let vstorm = "SUZUKI VSTORM 250:"
    let vstorm_details = " A ADV bike which is capable of going anywhere no matter the surface."

    let gt ="ROYAL ENFIELD CONTINENTAL GT 650:"
    let gt_details = " A cafe racer bike which the handsome bike under 4 lakhs with lots of power and tourque."
    
    let s1k ="BMW S1000RR:"
    let s1k_details = "A superbike which is loaded with tech and fully loaded with power and all electronincs."
    
    let v4 ="DUCATI PANIGALE V4:"
    let v4_details = "A Italian litre-class bike which is dedicated to ride to the limits in track. "

    let at ="HONDA AFRICA TWIN:"
    let at_details = "A japanese ADV bike which is probably a best all rounder bike with sufficient power. "
    
    let cbr ="HONDA CB250R:"
    let cbr_details = "A old sports-tourer which can outrun almost all the newer 400cc bikes in drag and tracks."
    
    let cbrfb ="HONDA CBR1000RR FIREBLADE SP:"
    let cbrfb_details = "A superbike which is known as or called as the king of litre class or 1000cc bikes"
    
    let rd ="YAMAHA RD 350:"
    let rd_details = "A vintage 350cc bikes which is better than the newer 650cc and is basically known as widow maker."

    let rx ="YAMAHA RX 155:"
    let rx_details = "A 30 year old bike which has no hates and has a specially place in evryones heart."

    let rxz ="YAMAHA RXZ:"
    let rxz_details ="A 30 year old legend."
    
    return(
        <>
        <div className="bg-darker">
            <div className="container">
                <Main_title title="!THE BIKE MARKET PLACE!"></Main_title>
            </div>
        </div>
        <div className="container">
            
            <div className="row d-flex flex-wrap g-2">
                <Card_comp image_link = {dev2} nick_name = "DEV" model={cb} model_details ={cb_details} ></Card_comp>
                <Card_comp image_link = {fz_image} nick_name = "VINI" model={fz} model_details = {fz_details}></Card_comp>
                <Card_comp image_link = {hunter_image} nick_name = "HEMAM" model={hunter} model_details = {hunter_details}></Card_comp>
                <Card_comp image_link = {speedt4_image} nick_name = "SREE" model={speedt4} model_details ={speedt4_details}></Card_comp>
                <Card_comp image_link = {vstorm_image} nick_name = "CHIRU" model={vstorm} model_details = {vstorm_details}></Card_comp>
                <Card_comp image_link = {gt_image} nick_name = "MEE" model={gt} model_details = {gt_details}></Card_comp>
                <Card_comp image_link = {s1k_image} nick_name = "BEEMER" model={s1k} model_details = {s1k_details}></Card_comp>
                <Card_comp image_link = {v4_image} nick_name = "MONSTER" model={v4} model_details = {v4_details}></Card_comp>
                <Card_comp image_link = {at_image} nick_name ="ADV" model={at} model_details ={at_details}></Card_comp>
                <Card_comp image_link = {cbr_image} nick_name = "MINI SUPER" model={cbr} model_details = {cbr_details}></Card_comp>   
                <Card_comp image_link = {cbrfb_image} nick_name = "KING" model={cbrfb} model_details = {cbrfb_details}></Card_comp>
                <Card_comp image_link = {rd_image} nick_name = "WIDOW MAKER" model={rd} model_details = {rd_details}></Card_comp>    
                <Card_comp image_link = {rx_image} nick_name = "KING" model={rx} model_details = {rd_details}></Card_comp>
                <Card_comp image_link = {rxz_image} nick_name = "KING1" model={rxz} model_details = {rxz_details}></Card_comp>


            </div>
        </div>
        </>
    )
}
export default Home;